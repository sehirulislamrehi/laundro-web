<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_services', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger("order_id");
            $table->unsignedBigInteger("service_id");
            $table->unsignedBigInteger("service_duration_id")->nullable();
            $table->integer("price");
            $table->string("instruction")->nullable();

            $table->foreign("order_id")->references("id")->on("orders")->onDelete("cascade");
            $table->foreign("service_id")->references("id")->on("services")->onDelete("cascade");
            $table->foreign("service_duration_id")->references("id")->on("service_durations")->onDelete("cascade");

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
        Schema::dropIfExists('order_services');
    }
}
