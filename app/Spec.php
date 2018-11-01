<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Entry;

class Spec extends Model
{
    public function entries() {
      return $this->hasMany('App\Entry');
    }

    public function user() {
      return $this->belongsTo('App\User');
    }
}
