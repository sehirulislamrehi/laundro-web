<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionSedder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::statement("DELETE FROM permissions");

        DB::table('permissions')->insert([
            [
                'id' => 1,
                'key' => 'user_module',
                'display_name' => 'User Module',
                'module_id' => 1,
            ],
            [
                'id' => 2,
                'key' => 'all_user',
                'display_name' => 'All User',
                'module_id' => 1,
            ],
            [
                'id' => 3,
                'key' => 'add_user',
                'display_name' => '-- Add User',
                'module_id' => 1,
            ],
            [
                'id' => 4,
                'key' => 'edit_user',
                'display_name' => '-- Edit User',
                'module_id' => 1,
            ],
            [
                'id' => 5,
                'key' => 'reset_password',
                'display_name' => '-- Reset Password',
                'module_id' => 1,
            ],
            [
                'id' => 6,
                'key' => 'settings',
                'display_name' => 'Setting Module',
                'module_id' => 2,
            ],
            [
                'id' => 7,
                'key' => 'app_info',
                'display_name' => '-- App Info',
                'module_id' => 2,
            ],
            [
                'id' => 9,
                'key' => 'location_module',
                'display_name' => 'Location Module',
                'module_id' => 3,
            ],
            [
                'id' => 10,
                'key' => 'emirates',
                'display_name' => 'Emirates',
                'module_id' => 3,
            ],
            [
                'id' => 11,
                'key' => 'add_emirates',
                'display_name' => '-- Add Emirates',
                'module_id' => 3,
            ],
            [
                'id' => 12,
                'key' => 'edit_emirates',
                'display_name' => '-- Edit Emirates',
                'module_id' => 3,
            ],
            [
                'id' => 13,
                'key' => 'view_emirates',
                'display_name' => '-- View Emirates',
                'module_id' => 3,
            ],
            [
                'id' => 14,
                'key' => 'areas',
                'display_name' => 'Areas',
                'module_id' => 3,
            ],
            [
                'id' => 15,
                'key' => 'add_areas',
                'display_name' => '-- Add Areas',
                'module_id' => 3,
            ],
            [
                'id' => 16,
                'key' => 'edit_areas',
                'display_name' => '-- Edit Areas',
                'module_id' => 3,
            ],
            [
                'id' => 17,
                'key' => 'view_areas',
                'display_name' => '-- View Areas',
                'module_id' => 3,
            ],
            [
                'id' => 18,
                'key' => 'zones',
                'display_name' => 'Zones',
                'module_id' => 3,
            ],
            [
                'id' => 19,
                'key' => 'add_zones',
                'display_name' => '-- Add Zones',
                'module_id' => 3,
            ],
            [
                'id' => 20,
                'key' => 'edit_zones',
                'display_name' => '-- Edit Zones',
                'module_id' => 3,
            ],
            [
                'id' => 21,
                'key' => 'view_zones',
                'display_name' => '-- View Zones',
                'module_id' => 3,
            ],
            [
                'id' => 22,
                'key' => 'zip_code',
                'display_name' => 'Zip Code',
                'module_id' => 3,
            ],
            [
                'id' => 23,
                'key' => 'add_zip_code',
                'display_name' => '-- Add Zip Code',
                'module_id' => 3,
            ],
            [
                'id' => 24,
                'key' => 'edit_zip_code',
                'display_name' => '-- Edit Zip Code',
                'module_id' => 3,
            ],
            [
                'id' => 25,
                'key' => 'view_zip_code',
                'display_name' => '-- View Zip Code',
                'module_id' => 3,
            ],
            [
                'id' => 26,
                'key' => 'service_module',
                'display_name' => 'Service Module',
                'module_id' => 4,
            ],
            [
                'id' => 27,
                'key' => 'duration',
                'display_name' => 'Duration',
                'module_id' => 4,
            ],
            [
                'id' => 28,
                'key' => 'add_duration',
                'display_name' => '-- Add Duration',
                'module_id' => 4,
            ],
            [
                'id' => 29,
                'key' => 'edit_duration',
                'display_name' => '-- Edit Duration',
                'module_id' => 4,
            ],
            [
                'id' => 30,
                'key' => 'view_duration',
                'display_name' => '-- View Duration',
                'module_id' => 4,
            ],
        ]);
    }
}