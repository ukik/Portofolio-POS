<?php

trait JenisKelaminAttribute
{
    public function getJenisKelaminAttribute()
    {
        $kelamin = $this->attributes['jenis_kelamin'];
        switch($kelamin){
          case 0:
            return 'laki-laki';
            break;
          case 1:
            return 'perempuan';
            break;
        }
    }    
}
