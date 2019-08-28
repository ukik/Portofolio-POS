<?php

use Illuminate\Database\Eloquent\Model;

class MenuModel extends Model
{
    use \FilterPaginateUtility;
    // use \KategoriAttribute;
    // use \SatuanAttribute;

    public $incrementing = false;    

    protected $primaryKey = 'kode_menu';

    protected $fillable = [
      'kode_menu',
      'nama_menu',
      'kategori',
      'harga',
      'satuan',
      'foto',
      'created_at',
    ];

    protected $table = 'menu';

    protected $filter = [
      'kode_menu',
      'nama_menu',
      'kategori',
      'harga',
      'satuan',
      'created_at',
    ];

    public static function initialize()
    {
      return [
        'kode_menu'   => '',
        'nama_menu'   => '',
        'kategori'    => '',
        'harga'       => '',
        'satuan'      => '',
        'created_at'  => '',
      ];
    }
    
}
