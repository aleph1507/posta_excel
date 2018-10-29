<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Spec;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

     // $table->string('name');
     // // $table->string('email')->unique();
     // $table->string('adresa');
     // $table->string('opstina');
     // $table->string('postenski_broj');
     // $table->string('kontact_lice_telefon');
     // // $table->timestamp('email_verified_at')->nullable();
     // $table->string('password');
     // $table->rememberToken();
     // $table->timestamps();

     protected $fillable = [
         'name', 'adresa', 'password',
         'opstina', 'postenski_broj', 'kontakt_lice_telefon'
     ];

    // protected $fillable = [
    //     'name', 'email', 'password',
    // ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function specs() {
      return $this->hasMany('App\Spec');
    }

    public function add_spec(Spec $s){
      $this->specs()->save($spec);
    }
}
