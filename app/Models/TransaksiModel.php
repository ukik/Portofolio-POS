<?php

use Illuminate\Database\Eloquent\Model;

class TransaksiModel extends Model
{
    use \FilterPaginateUtility;
    use \TotalHargaAttribute;

    public $incrementing = false;    

    protected $primaryKey = 'kode_transaksi';

    protected $fillable = [
      'kode_transaksi',
      'nik',
      'nama_customer',
      'nomor_meja',
      'uang_dibayarkan',
      'created_at',
    ];

    protected $table = 'transaksi';

    protected $filter = [
      'kode_transaksi',
      'nik',
      'nama_customer',
      'nomor_meja',
      'uang_dibayarkan',
      'created_at',

      'menus.nama_menu',
      'menus.kategori',
      'menus.harga',
      'menus.unit',
      'menus.satuan',      
      'menus.created_at',      
    ];

    public static function initialize()
    {
      return [
        'kode_transaksi'  => '',
        'nik'             => '',
        'nama_customer'   => '',
        'nomor_meja'      => '',
        'uang_dibayarkan' => '',
        'created_at'      => '',

        'menus.nama_menu' => '',
        'menus.kategori'  => '',
        'menus.harga'     => '',
        'menus.unit'     => '',
        'menus.satuan'    => '',             
        'menus.created_at'    => '',             
      ];
    }

    protected $appends = [
      'total_harga'
    ];

    public function karyawan(){
      return $this->belongsTo(\KaryawanModel::class, 'nik');
    }

    public function menus(){
      return $this->hasMany(\MutasiMenuModel::class, 'kode_transaksi');
    }

}
