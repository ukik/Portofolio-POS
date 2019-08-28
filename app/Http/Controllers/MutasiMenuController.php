<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MutasiMenuController extends Controller
{
    public function index()
    {
        $mutasi = \MutasiMenuModel::with('transaksi.karyawan')->first();
        return response()->json($mutasi)
            ->header('Content-Type', 'application/json')
            // ->header('Content-Type', 'application/x-www-form-urlencoded')
            ->setStatusCode(200);
    }
}
