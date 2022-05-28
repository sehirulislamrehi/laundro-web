<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();

            $table->string("name");
            $table->string("phone")->unique();
            $table->string("email")->nullable();
            $table->string("password");
            $table->string("address")->nullable();
            $table->integer("point")->nullable();
            $table->string("image")->nullable();
            $table->boolean("is_active")->default(false);
            $table->boolean("is_verified")->default(false);

            $table->integer("month")->comment("current month");
            $table->integer("year")->comment("current year");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}
