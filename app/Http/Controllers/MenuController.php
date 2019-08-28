<?php

namespace App\Http\Controllers;

use Faker\Factory;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic;

class MenuController extends Controller
{
    public function index()
    {
        $menu = \MenuModel::filterPaginate();
        return response()->json($menu)
            ->header('Content-Type', 'application/json')
            // ->header('Content-Type', 'application/x-www-form-urlencoded')
            ->setStatusCode(200);
    }

    public function store(Request $request)
    {
        $faker = Factory::create();

        $model = \MenuModel::class;

        try {
            ImageManagerStatic::make(request()->foto);
            $foto = true;
        } catch (\Exception $e) {
            $foto = false;
        }

        $payload =  [
            'kode_menu'     => $request->has('kode_menu') ? request()->kode_menu : null,
            'nama_menu'     => request()->nama_menu,
            'kategori'      => request()->kategori,
            'harga'         => request()->harga,
            'satuan'        => request()->satuan,
        ];

        if($foto) {

            $validator = \Validator::make([ 'foto' => request()->foto ], [
                'foto'      => 'required|imageable',
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

                if (!file_exists(public_path('images/menu/'))) {
                    mkdir(public_path('images/menu/'), 666, true);
                }

                if($request->has('kode_menu')){
                    $image_exists = $model::find(request()->kode_menu)->value('foto');
                    if(\File::exists($image_exists)) {
                        \File::delete($image_exists);
                    }                
                }

                \Image::make($request->get('foto'))->save(public_path('images/menu/').$name);

            }

            $payload['foto'] = 'images/menu/'.$name;

        } else {

            $payload['foto'] = './images/no-menu-1.png';
        }

        $kode_menu = $model::find(request()->kode_menu);
            
        if($kode_menu) {

            $validator = \Validator::make($payload, [
                // 'kode_menu'     => 'bail|required|string|min:36|unique:menu', // uuid only
                'nama_menu'     => 'required|string|max:50',
                'kategori'      => 'required|string|in:makanan,minuman,camilan',
                'harga'         => 'required|numeric',
                'satuan'        => 'required|string|in:mangkuk,piring,gelas',
            ]);

        } else {

            $validator = \Validator::make($payload, [
                'nama_menu'     => 'required|string|max:50',
                'kategori'      => 'required|string|in:makanan,minuman,camilan',
                'harga'         => 'required|numeric',
                'satuan'        => 'required|string|in:mangkuk,piring,gelas',
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
            [ 'kode_menu' => request()->kode_menu ], $payload);

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
        \MenuModel::whereKodeMenu($id)->delete();

        return response()->json([
            'role'      => Getter('user')->jabatan,
            'auth'      => true,
        ])        
        ->header('Content-Type', 'application/json')
        // ->header('Content-Type', 'application/x-www-form-urlencoded')
        ->setStatusCode(200);               

    }
}
