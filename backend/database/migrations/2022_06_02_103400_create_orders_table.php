<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();

            $table->string("order_no")->unique();
            $table->unsignedBigInteger("customer_id");

            $table->string("name");
            $table->string("email");
            $table->string("phone");

            $table->string("postal_code");
            $table->string("location");
            $table->string("address_details");
            $table->string("address_type");
            $table->text("timing");

            $table->integer("total");
            $table->enum("order_status",["Pending","Confirmed","Assigned","OnProcess","Delivered","Cancelled"]);
            $table->enum("payment_status",["Pending","Success","Cancelled"]);
            $table->enum("payment_method",["Cash","Online"]);

            $table->foreign("customer_id")->references("id")->on("customers")->onDelete("cascade");

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
        Schema::dropIfExists('orders');
    }
}
