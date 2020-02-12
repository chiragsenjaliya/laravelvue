<?php

use App\Admin;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin = Admin::where('email', 'admin@admin.com')->first();
        if (empty($admin)) {
            $admin = Admin::create([
                'name' => 'Admin Boi',
                'email' => 'admin@admin.com',
                'password' => Hash::make('admin123'),
            ]);
        }

        $role = Role::firstOrCreate(['guard_name' => 'admin-api', 'name' => 'Super Admin']);

        $admin->syncRoles('Admin');
    }
}
