<?php

trait SatuanAttribute
{
  public function getSatuanAttribute()
  {
    $satuan = $this->attributes['satuan'];
    switch ($satuan) {
      case 0:
        return 'piring';
        break;
      case 1:
        return 'mangkok';
        break;
      case 2:
        return 'gelas';
        break;
    }
  }
}
