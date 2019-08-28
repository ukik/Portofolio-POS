<?php

use Illuminate\Database\Seeder;

# php artisan db:seed --class=MutasiMenuSeeder

class MutasiMenuSeeder extends Seeder {

    public
    function run() {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('mutasi_menu')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $faker = Faker\ Factory::create();

        $faker->addProvider(new \FakerRestaurant\Provider\en_US\Restaurant($faker));
        // Generator
        $faker->foodName();      // A random Food Name
        $faker->beverageName();  // A random Beverage Name
        $faker->dairyName();  // A random Dairy Name
        $faker->vegetableName();  // A random Vegetable Name
        $faker->fruitName();  // A random Fruit Name
        $faker->meatName();  // A random Meat Name
        $faker->sauceName();  // A random Sauce Name

        $code_transaksi = DB::table('transaksi')->get();
        $menus = DB::table('menu')->get();

        foreach ($code_transaksi as $key => $transaksi) {

            for ($i = 0; $i < rand(1,15); $i++) {

                $startDate = new Carbon\Carbon('first day of October'); //date("Y-m-d 00:00:00");
                $endDate = new Carbon\Carbon("today");
                $randomDate = Carbon\Carbon::createFromTimestamp(rand($endDate->timestamp, $startDate->timestamp))->format('Y-m-d h:i:s');
        
                $menu = ($menus[rand(0, count($menus)-1)]);

                $generated =  [
                    // 'kode_mutasi'       => $faker->uuid,
                    'kode_transaksi'    => $transaksi->kode_transaksi,
                    'nama_menu'         => $faker->foodName(),
                    'unit'              => rand(1, 99),
                    'kategori'          => $menu->kategori,
                    'harga'             => $menu->harga,
                    'satuan'            => $menu->satuan,
                    'foto'              => './images/no-menu-1.png',
                    'created_at'        => $randomDate,
                ];

                var_dump($generated);
    
                DB::table('mutasi_menu')->insert($generated);
    
            }
        }
    }
}
