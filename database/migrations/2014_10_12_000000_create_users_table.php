<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            // $table->string('email')->unique();
            $table->string('adresa');
            $table->string('opstina');
            $table->string('postenski_broj');
            $table->string('kontakt_lice_telefon');
            // $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->text('postarina')->default('[
                    120,
                    {
                        "od": 2,
                        "do": 5,
                        "postarina": 140
                    },
                    {
                        "od": 5,
                        "do": 10,
                        "postarina": 160
                    },
                    {
                        "od": 10,
                        "do": 20,
                        "postarina": 200
                    },
                    {
                        "od": 20,
                        "do": 30,
                        "postarina": 265
                    },
                    {
                        "od": 30,
                        "do": 40,
                        "postarina": 270
                    },
                    {
                        "od": 40,
                        "do": 50,
                        "postarina": 320
                    },
                    {
                        "od": 50,
                        "postarina": 500
                    }
            ]');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
