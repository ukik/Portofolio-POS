<?php

trait StatusAttribute
{
  public function getStatusAttribute()
  {
    $status = $this->attributes['status'];
    switch($status){
      case 0:
        return 'lajang';
        break;
      case 1:
        return 'menikah';
        break;
    }
  }
}
