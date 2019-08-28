<?php

namespace App\Http\Controllers;

use Faker\Factory;
use Illuminate\Http\Request;

class TransaksiController extends Controller
{
    public function index()
    {
        $transaksi = \TransaksiModel::with('karyawan')->with('menus')->filterPaginate();
        return response()->json($transaksi)
            ->header('Content-Type', 'application/json')
            // ->header('Content-Type', 'application/x-www-form-urlencoded')
            ->setStatusCode(200);
    }

    public function menu()
    {
        $menu = \MenuModel::all();
        return response()->json($menu)
            ->header('Content-Type', 'application/json')
            // ->header('Content-Type', 'application/x-www-form-urlencoded')
            ->setStatusCode(200);
    }

    public function store(Request $request)
    {
        $faker = Factory::create();

        $transaksi = new \TransaksiModel;
        $transaksi->kode_transaksi  = request()->kode_transaksi;
        $transaksi->nik             = Getter('user')->nik;
        $transaksi->nama_customer   = request()->nama_customer;
        $transaksi->nomor_meja      = request()->nomor_meja;
        $transaksi->uang_dibayarkan = request()->uang_dibayarkan;

        foreach (request()->menu_ordered_array as $key => $value) {
            
            // $kode_menu = $value->id;
            $menu = \MenuModel::find($value['id']);

            $mutasi_menu = new \MutasiMenuModel;

            //$mutasi_menu->kode_mutasi = $faker->uuid ;
            $mutasi_menu->kode_transaksi = request()->kode_transaksi;
            $mutasi_menu->nama_menu = $menu->nama_menu;
            $mutasi_menu->kategori = $menu->kategori;
            $mutasi_menu->unit = $value['qty'];
            $mutasi_menu->harga = $menu->harga;
            $mutasi_menu->satuan = $menu->satuan;
            $mutasi_menu->foto = $menu->foto;

            $mutasi_menu->save();
        }

        $transaksi->save();

        $data = \TransaksiModel::whereKodeTransaksi(request()->kode_transaksi)
            ->with('karyawan')->with('menus')->first();

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
        //
    }
}
