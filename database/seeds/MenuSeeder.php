<?php

use Illuminate\Database\Seeder;

# php artisan db:seed --class=MenuSeeder

class MenuSeeder extends Seeder {

    public
    function run() {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('menu')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $faker = Faker\Factory::create();

        $faker->addProvider(new \FakerRestaurant\Provider\en_US\Restaurant($faker));
        // Generator
        $faker->foodName();      // A random Food Name
        $faker->beverageName();  // A random Beverage Name
        $faker->dairyName();  // A random Dairy Name
        $faker->vegetableName();  // A random Vegetable Name
        $faker->fruitName();  // A random Fruit Name
        $faker->meatName();  // A random Meat Name
        $faker->sauceName();  // A random Sauce Name

        $limit = 25;

        static $password;

        for ($i = 0; $i < $limit; $i++) {
 
            $startDate = new Carbon\Carbon('first day of October'); //date("Y-m-d 00:00:00");
            $endDate = new Carbon\Carbon("today");
            $randomDate = Carbon\Carbon::createFromTimestamp(rand($endDate->timestamp, $startDate->timestamp))->format('Y-m-d h:i:s');

            $generated =  [
                // 'kode_menu'     => $faker->uuid,
                'nama_menu'     => $faker->foodName(),
                'kategori'      => array_values(['makanan','minuman','camilan'])[mt_rand(0, 2)],
                'harga'         => rand(10, 39)*500,
                'satuan'        => array_values(['piring','mangkuk','gelas'])[mt_rand(0, 2)],
                'foto'          => './images/no-menu-1.png',
                'created_at'    => $randomDate,
            ];

            var_dump($generated);

            DB::table('menu')->insert($generated);
        }
    }
}
