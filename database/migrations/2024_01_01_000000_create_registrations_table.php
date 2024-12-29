<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('registrations', function (Blueprint $table) {
            $table->id();
            $table->string('parent_last_name');
            $table->string('parent_first_name');
            $table->string('email');
            $table->string('phone');
            $table->string('child_last_name');
            $table->string('child_first_name');
            $table->date('birth_date');
            $table->date('start_date');
            $table->text('comments')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('registrations');
    }
};