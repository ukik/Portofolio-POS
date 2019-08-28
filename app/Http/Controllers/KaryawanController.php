<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic;

class KaryawanController extends Controller
{
    public function index()
    {
        $karyawan = \KaryawanModel::with('transaksis')->filterPaginate();

        return response()->json($karyawan)
            ->header('Content-Type', 'application/json')
            // ->header('Content-Type', 'application/x-www-form-urlencoded')
            ->setStatusCode(200);
    }

    public function store(Request $request)
    {
        try {
            ImageManagerStatic::make(request()->foto);
            $foto = true;
        } catch (\Exception $e) {
            $foto = false;
        }
        
        $model = \KaryawanModel::class;

        $payload =  [
            'nik'                   => request()->nik,
            'nama_depan'            => request()->nama_depan,
            'nama_belakang'         => request()->nama_belakang,
            'jabatan'               => request()->jabatan,
            'alamat'                => request()->alamat,
            'telpon'                => request()->telpon,
            'email'                 => request()->email,
            'tempat_lahir'          => request()->tempat_lahir,
            'tanggal_lahir'         => request()->tanggal_lahir,
            'jenis_kelamin'         => request()->jenis_kelamin,
            'status'                => request()->status,
            'pendidikan_terakhir'   => request()->pendidikan_terakhir,
            'gaji'                  => request()->gaji,           
        ];

        if($foto){

            $validator = \Validator::make([ 'foto' => request()->foto ], [         
                'foto'  => 'bail|required|imageable',
            ]);     

            if($validator->fails()) {
                return response()->json([
                    'fails' => true,
                    'messages' => $validator->messages(),
                ])        
                ->header('Content-Type', 'application/json')
                // ->header('Content-Type', 'application/x-www-form-urlencoded')
                ->setStatusCode(200);          
            }        
            
            if($request->get('foto')) {
                $image = $request->get('foto');
                $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];

                if (!file_exists(public_path('images/karyawan/'))) {
                    mkdir(public_path('images/karyawan/'), 666, true);
                }

                if($request->has('nik')){
                    $image_exists = $model::find(request()->nik)->value('foto');
                    if(\File::exists($image_exists)) {
                        \File::delete($image_exists);
                    }           
                }

                \Image::make($request->get('foto'))->save(public_path('images/karyawan/').$name);
            }
                
            $payload['foto'] = 'images/karyawan/'.$name;

        } else {

            $payload['foto'] = './images/no-menu-1.png';

        }         

        $nik = $model::find(request()->nik);

        if($nik) {

            $validator = \Validator::make($payload, [
                'nik'                   => 'required|string|min:15|max:16',
                'nama_depan'            => 'required|string|max:35',
                //'nama_belakang'         => 'required|string|max:35',
                'alamat'                => 'required|string',
                'telpon'                => 'required|string|max:30',
                'email'                 => 'required|email|max:40',
                'tempat_lahir'          => 'required|string|max:30',
                'tanggal_lahir'         => 'required|string|max:20',
                'jenis_kelamin'         => 'required|in:laki-laki,perempuan',
                'status'                => 'required|in:lajang,menikah',
                'pendidikan_terakhir'   => 'required|in:SD,SMP,SMA,SMK,MA,D3,S1,S2,S3,PROF',
                'gaji'                  => 'required|numeric',                
                'foto'                  => 'required|imageable',
            ]);

            $payload['password'] = bcrypt(request()->password);

        } else {

            $payload['password'] = bcrypt(request()->password);

            $validator = \Validator::make($payload, [
                'nik'                   => 'required|string|min:15|max:16|unique:karyawan',
                'nama_depan'            => 'required|string|max:35',
                //'nama_belakang'         => 'required|string|max:35',
                'alamat'                => 'required|string',
                'telpon'                => 'required|string|max:30',
                'email'                 => 'required|email|max:40|unique:karyawan',
                'password'              => 'required|string',
                'tempat_lahir'          => 'required|string|max:30',
                'tanggal_lahir'         => 'required|string|max:20',
                'jenis_kelamin'         => 'required|in:laki-laki,perempuan',
                'status'                => 'required|in:lajang,menikah',
                'pendidikan_terakhir'   => 'required|in:SD,SMP,SMA,SMK,MA,D3,S1,S2,S3,PROF',
                'gaji'                  => 'required|numeric',                
            ]);

        }
        
        if($validator->fails()) {
            return response()->json([
                'fails' => true,
                'messages' => $validator->messages(),
            ])        
            ->header('Content-Type', 'application/json')
            // ->header('Content-Type', 'application/x-www-form-urlencoded')
            ->setStatusCode(200);          
        }

        $data = $model::updateOrCreate(
            [ 'nik' => request()->nik ], $payload);
			
        return response()->json([
            'token'     => bearerToken($request),
            'role'      => Getter('user')->jabatan,
            'auth'      => true,
            'payload'   => $data,
        ])        
        ->header('Content-Type', 'application/json')
        // ->header('Content-Type', 'application/x-www-form-urlencoded')
        ->setStatusCode(200);           

    }

    public function destroy($id)
    {
        \KaryawanModel::whereNik($id)->delete();

        return response()->json([
            'role'      => Getter('user')->jabatan,
            'auth'      => true,
        ])        
        ->header('Content-Type', 'application/json')
        // ->header('Content-Type', 'application/x-www-form-urlencoded')
        ->setStatusCode(200);               

    }
}
