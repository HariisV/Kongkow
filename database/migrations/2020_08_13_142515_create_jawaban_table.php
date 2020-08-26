<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJawabanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jawaban', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('isi');
            $table->timestamps();

            $table->unsignedBigInteger('profil_id')->nullable();
            $table->unsignedBigInteger('pertanyaan_id')->nullable();

            $table->foreign('profil_id')->references('id')->on('profil');
            $table->foreign('pertanyaan_id')->references('id')->on('pertanyaan');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('jawaban', function (Blueprint $table) {
            $table->dropForeign(['profil_id']);
            $table->dropForeign(['pertanyaan_id']);
            $table->dropColumn(['profil_id']);
            $table->dropColumn(['pertanyaan_id']);
            $table->dropColumn(['id']);
            $table->dropColumn(['isi']);
        });
    }
}
