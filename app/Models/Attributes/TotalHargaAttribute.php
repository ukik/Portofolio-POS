<?php

trait TotalHargaAttribute
{
    public function getTotalHargaAttribute()
    {
        $total_harga = 0;
        foreach ($this->menus as $key => $menu) {
            $total_harga += $menu->harga;
        }
        return $total_harga;
    }    
}
