<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Adresnik;

class CreateEntriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('entries', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('spec_id');
            // $table->string('seriski')->nullable();
            // $table->string('primac_ime');
            // $table->string('primac_adresa');
            // $table->string('primac_mesto');
            // $table->string('primac_telefon');
            // $table->string('tezina');
            // $table->string('povraten_otkup')->nullable();
            // $table->string('povraten_dokument')->nullable();
            // $table->string('zabeleska')->nullable();
            $table->string(Adresnik::$seriski)->nullable();
            $table->string(Adresnik::$ime);
            $table->string(Adresnik::$adresa);
            $table->string(Adresnik::$mesto);
            $table->string(Adresnik::$telefon);
            $table->string(Adresnik::$tezina);
            $table->string(Adresnik::$p_otkup)->nullable();
            $table->string(Adresnik::$p_dokument)->nullable();
            $table->string(Adresnik::$zabeleska)->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('entries');
    }
}
