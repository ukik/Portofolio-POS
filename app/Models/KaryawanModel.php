<?php

// namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class KaryawanModel extends Authenticatable
{
    use \FilterPaginateUtility;
    // use \StatusAttribute;
    // use \JenisKelaminAttribute;

    public $incrementing = false;    

    protected $primaryKey = 'nik';

    protected $fillable = [
        'nik',
        'nama_depan',
        'nama_belakang',
        'jabatan',
        'alamat',
        'telpon',
        'email',
        'password',
        'tempat_lahir',
        'tanggal_lahir',
        'jenis_kelamin',
        'status',
        'pendidikan_terakhir',
        'gaji',
        'foto',        
        'created_at',
    ];

    protected $hidden = [
        'password',
    ];

    protected $table = 'karyawan';

    protected $filter = [
        'nik',
        'nama_depan',
        'nama_belakang',
        'jabatan',
        'alamat',
        'telpon',
        'email',
        // 'password',
        'tempat_lahir',
        'tanggal_lahir',
        'jenis_kelamin',
        'status',
        'pendidikan_terakhir',
        'gaji',
        'created_at',     

        'transaksis.nama_customer',
        'transaksis.nomor_meja',
        'transaksis.uang_dibayarkan',        
        'transaksis.created_at',        
    ];

    public static function initialize()
    {
      return [
        'nik'                   => '',
        'nama_depan'            => '',
        'nama_belakang'         => '',
        'alamat'                => '',
        'telpon'                => '',
        'email'                 => '',
        // 'password'              => '',
        'tempat_lahir'          => '',
        'tanggal_lahir'         => '',
        'jenis_kelamin'         => '',
        'status'                => '',
        'pendidikan_terakhir'   => '',
        'gaji'                  => '',
        'created_at'            => '',     

        'transaksis.nama_customer'         => '',    
        'transaksis.nomor_meja'            => '',    
        'transaksis.uang_dibayarkan'       => '',    
        'transaksis.created_at'            => '',    
      ];
    }

    public function transaksis(){
      return $this->hasMany(\TransaksiModel::class, 'nik');
    }    
}
