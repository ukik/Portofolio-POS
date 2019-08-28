<?php

trait KategoriAttribute
{
  public function getKategoriAttribute()
  {
    $kategori = $this->attributes['kategori'];
    switch($kategori){
      case 0:
        return 'makanan';
        break;
      case 1:
        return 'minuman';
        break;
      case 2:
        return 'camilan';
        break;
    }      
  } 
}
