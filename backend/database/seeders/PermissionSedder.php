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
            [
                'id' => 31,
                'key' => 'coupon',
                'display_name' => 'Coupon',
                'module_id' => 4,
            ],
            [
                'id' => 32,
                'key' => 'add_coupon',
                'display_name' => '-- Add Coupon',
                'module_id' => 4,
            ],
            [
                'id' => 33,
                'key' => 'edit_coupon',
                'display_name' => '-- Edit Coupon',
                'module_id' => 4,
            ],
            [
                'id' => 34,
                'key' => 'view_coupon',
                'display_name' => '-- View Coupon',
                'module_id' => 4,
            ],
            [
                'id' => 35,
                'key' => 'services',
                'display_name' => 'Services',
                'module_id' => 4,
            ],
            [
                'id' => 36,
                'key' => 'add_services',
                'display_name' => '-- Add Services',
                'module_id' => 4,
            ],
            [
                'id' => 37,
                'key' => 'edit_services',
                'display_name' => '-- Edit Services',
                'module_id' => 4,
            ],
            [
                'id' => 38,
                'key' => 'view_services',
                'display_name' => '-- View Services',
                'module_id' => 4,
            ],
            [
                'id' => 39,
                'key' => 'order_module',
                'display_name' => 'Order Module',
                'module_id' => 5,
            ],
            [
                'id' => 40,
                'key' => 'all_order',
                'display_name' => 'All Order',
                'module_id' => 5,
            ],
            [
                'id' => 41,
                'key' => 'view_order_details',
                'display_name' => '-- View Order Details',
                'module_id' => 5,
            ],
            [
                'id' => 42,
                'key' => 'edit_order',
                'display_name' => '-- Edit Order',
                'module_id' => 5,
            ],
            [
                'id' => 43,
                'key' => 'banners',
                'display_name' => 'Banners',
                'module_id' => 2,
            ],
            [
                'id' => 44,
                'key' => 'add_banners',
                'display_name' => '-- Add Banners',
                'module_id' => 2,
            ],
            [
                'id' => 45,
                'key' => 'edit_banners',
                'display_name' => '-- Edit Banners',
                'module_id' => 2,
            ],
            [
                'id' => 46,
                'key' => 'delete_banners',
                'display_name' => '-- Delete Banners',
                'module_id' => 2,
            ],
            [
                'id' => 47,
                'key' => 'faq',
                'display_name' => 'FAQ',
                'module_id' => 2,
            ],
            [
                'id' => 48,
                'key' => 'add_faq',
                'display_name' => '-- Add Faq',
                'module_id' => 2,
            ],
            [
                'id' => 49,
                'key' => 'edit_faq',
                'display_name' => '-- Edit Faq',
                'module_id' => 2,
            ],
            [
                'id' => 50,
                'key' => 'delete_faq',
                'display_name' => '-- Delete Faq',
                'module_id' => 2,
            ],
        ]);
    }
}