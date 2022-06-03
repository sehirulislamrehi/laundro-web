<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::statement("DELETE FROM sub_modules");

        DB::table('sub_modules')->insert([


            //module id 1 start
            [
                'id' => 1,
                'name' => 'All User',
                'key' => 'all_user',
                'position' => 1,
                'route' => 'user.all',
                'module_id' => 1,
            ],
            [
                'id' => 2,
                'name' => 'Roles',
                'key' => 'roles',
                'position' => 2,
                'route' => 'role.all',
                'module_id' => 1,
            ],
            //module id 1 end

            //module id 2 start
            [
                'id' => 3,
                'name' => 'App Info',
                'key' => 'app_info',
                'position' => 1,
                'route' => 'app.info.all',
                'module_id' => 2,
            ],
            //module id 2 end


            //module id 3 start
            [
                'id' => 4,
                'name' => 'Cities',
                'key' => 'emirates',
                'position' => 2,
                'route' => 'emirate.all',
                'module_id' => 3,
            ],
            [
                'id' => 5,
                'name' => 'Areas',
                'key' => 'areas',
                'position' => 4,
                'route' => 'area.all',
                'module_id' => 3,
            ],
            [
                'id' => 6,
                'name' => 'Zones',
                'key' => 'zones',
                'position' => 3,
                'route' => 'zone.all',
                'module_id' => 3,
            ],
            [
                'id' => 7,
                'name' => 'Zip Code',
                'key' => 'zip_code',
                'position' => 1,
                'route' => 'zip_code.all',
                'module_id' => 3,
            ],
            //module id 3 end


            //module id 4 start
            [
                'id' => 8,
                'name' => 'Duration',
                'key' => 'duration',
                'position' => 2,
                'route' => 'duration.all',
                'module_id' => 4,
            ],
            [
                'id' => 9,
                'name' => 'Coupon',
                'key' => 'coupon',
                'position' => 1,
                'route' => 'coupon.all',
                'module_id' => 4,
            ],
            [
                'id' => 10,
                'name' => 'Service',
                'key' => 'service',
                'position' => 3,
                'route' => 'service.all',
                'module_id' => 4,
            ],
            //module id 4 end

            //module id 5 start
            [
                'id' => 11,
                'name' => 'All Order',
                'key' => 'all_order',
                'position' => 1,
                'route' => 'order.all',
                'module_id' => 5,
            ]
            //module id 5 end

        
        ]);

        //last id 11
    }
}