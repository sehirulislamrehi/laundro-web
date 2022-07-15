<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAppInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('app_infos', function (Blueprint $table) {
            $table->id();

            $table->string("logo")->nullable();
            $table->string("fav")->nullable();
            $table->string("mail_from_address")->nullable();
            $table->string("email")->nullable();
            $table->string("phone")->nullable();
            $table->string("address")->nullable();
            $table->string("city")->nullable();
            $table->string("country")->nullable();
            $table->string("day")->nullable();
            $table->string("timing")->nullable();
            $table->string("facebook_link")->nullable();
            $table->string("youtube_link")->nullable();
            $table->string("twitter_link")->nullable();
            $table->string("linkedin_link")->nullable();

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
        Schema::dropIfExists('app_infos');
    }
}
