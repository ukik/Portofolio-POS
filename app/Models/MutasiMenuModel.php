<?php

use Illuminate\Database\Eloquent\Model;

class MutasiMenuModel extends Model
{
    use \FilterPaginateUtility;
    // use \KategoriAttribute;
    // use \SatuanAttribute;

    public $incrementing = false;    

    protected $primaryKey = 'kode_mutasi';

    protected $fillable = [
      'kode_mutasi',
      'kode_transaksi',
      'nama_menu',
      'kategori',
      'unit',
      'harga',
      'satuan',
      'foto',
      'created_at',
    ];

    protected $table = 'mutasi_menu';

    protected $filter = [
      'kode_mutasi',
      'kode_transaksi',
      'nama_menu',
      'unit',
      'kategori',
      'harga',
      'satuan',
      'created_at',

    ];

    public static function initialize()
    {
      return [
        'kode_mutasi'     => '',
        'kode_transaksi'  => '',
        'nama_menu'       => '',
        'unit'       => '',
        'kategori'        => '',
        'harga'           => '',
        'satuan'          => '',
        'created_at'      => '',
      ];
    }

    public function transaksi(){
      return $this->belongsTo(\TransaksiModel::class, 'kode_transaksi');
    }

    // public function karyawan(){
    //   return $this->hasOneThrough(\TransaksiModel::class, \KaryawanModel::class, 'nik', 'nik');
    // }
}
