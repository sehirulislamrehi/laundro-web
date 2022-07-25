<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement("DELETE FROM modules");
        DB::table('modules')->insert([
            [
                'id' => 1,
                'name' => 'User Module',
                'key' => 'user_module',
                'icon' => 'fas fa-users',
                'position' => 1,
                'route' => null
            ],
            [
                'id' => 2,
                'name' => 'Settings',
                'key' => 'settings',
                'icon' => 'fas fa-cog',
                'position' => 10,
                'route' => null,
            ],
            [
                'id' => 3,
                'name' => 'Locations',
                'key' => 'location_module',
                'icon' => 'fas fa-location-arrow',
                'position' => 2,
                'route' => null,
            ],
            [
                'id' => 4,
                'name' => 'Services',
                'key' => 'service_module',
                'icon' => 'fas fa-wrench',
                'position' => 3,
                'route' => null,
            ],
            [
                'id' => 5,
                'name' => 'Order Module',
                'key' => 'order_module',
                'icon' => 'fas fa-cart-arrow-down',
                'position' => 4,
                'route' => null,
            ],
            [
                'id' => 6,
                'name' => 'Customer Module',
                'key' => 'customer_module',
                'icon' => 'fas fa-users',
                'position' => 5,
                'route' => null,
            ],
        ]);
    }
}