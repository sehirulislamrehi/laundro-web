<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('locations', function (Blueprint $table) {            
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('location_id')->nullable();
            $table->unsignedBigInteger('zipcode_id')->nullable();
            $table->enum('type', ['area', 'zone'])->nullable();
            $table->boolean('is_active')->unsigned()->default(0);

            $table->foreign("location_id")->references("id")->on("locations")->onDelete("cascade");
            $table->foreign("zipcode_id")->references("id")->on("zipcodes")->onDelete("cascade");

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
        Schema::dropIfExists('locations');
    }
}
