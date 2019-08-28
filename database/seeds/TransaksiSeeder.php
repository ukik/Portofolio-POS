<?php

use Illuminate\Database\Seeder;

# php artisan db:seed --class=TransaksiSeeder

class TransaksiSeeder extends Seeder {

    public
    function run() {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('transaksi')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $faker = Faker\ Factory::create();

        $code_user = DB::table('karyawan')->select('nik')->get();
        
        $limit = 50;

        static $password;

        //var_dump($code_user);

        for ($i = 0; $i < $limit; $i++) {

            $startDate = new Carbon\Carbon('first day of October'); //date("Y-m-d 00:00:00");
            $endDate = new Carbon\Carbon("today");
            $randomDate = Carbon\Carbon::createFromTimestamp(rand($endDate->timestamp, $startDate->timestamp))->format('Y-m-d h:i:s');
    
            foreach ($code_user as $key => $code) {

                $generated =  [
                    // 'kode_transaksi'    => $faker->uuid,
                    'nik'               => $code->nik,
                    'nama_customer'     => $faker->name,
                    'nomor_meja'        => rand(1, 10),
                    'uang_dibayarkan'   => rand(5, 20)*25000,
                    'created_at'        => $randomDate,
                ];


                DB::table('transaksi')->insert($generated);
            }

            // var_dump($generated);
        }
    }
}
