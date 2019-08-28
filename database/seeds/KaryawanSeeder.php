<?php

use Illuminate\Database\Seeder;

# php artisan db:seed --class=KaryawanSeeder

class KaryawanSeeder extends Seeder {

    public
    function run() {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('karyawan')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        $faker = Faker\ Factory::create();

        $limit = 5;

        static $password;

        for ($i = 0; $i < $limit; $i++) {

            $startDate = new Carbon\Carbon('first day of October'); //date("Y-m-d 00:00:00");
            $endDate = new Carbon\Carbon("today");
            $randomDate = Carbon\Carbon::createFromTimestamp(rand($endDate->timestamp, $startDate->timestamp))->format('Y-m-d h:i:s');
    
            $generated =  [
                'nik'                   => rand(1000000000000000, 9999999999999999),
                'nama_depan'            => $faker->firstNameMale,
                'nama_belakang'         => $faker->firstNameFemale,
                'alamat'                => $faker->realText($maxNbChars = 50, $indexSize = 2),
                'telpon'                => $faker->phoneNumber,
                'email'                 => $faker->unique()->safeEmail,
                'jabatan'               => array_values(['manager','staff'])[mt_rand(0, 1)],
                'password'              => bcrypt('secret'),
                'tempat_lahir'          => array_values(['samarinda','balikpapan','bontang'])[mt_rand(0, 2)],
                'tanggal_lahir'         => $faker->date($format = 'Y-m-d', $max = 'now'),
                'jenis_kelamin'         => array_values(['laki-laki','perempuan'])[mt_rand(0, 1)],
                'status'                => array_values(['menikah','lajang'])[mt_rand(0, 1)],
                'pendidikan_terakhir'   => array_values(['SD', 'SMP', 'SMA', 'SMK', 'MA', 'D3', 'S1', 'S2', 'S3', 'PROF'])[mt_rand(0, 9)],
                'gaji'                  => rand(1, 9)*1000000,
                'foto'                  => './images/no-menu-1.png',
                'created_at'            => $randomDate,
            ];

            var_dump($generated);

            DB::table('karyawan')->insert($generated);
        }
    }
}
