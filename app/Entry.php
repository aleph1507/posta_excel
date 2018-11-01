<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Adresnik;

class Entry extends Model
{

    public $timestamps = false;
    
    protected $fillable = ['spec_id', 'Сериски', 'Име на примач',
      'Адреса на примач', 'Место на примач', 'Телефон на примач', 'Тежина',
      'Повратен откуп', 'Повратен документ', 'Забелешка'];


    public function spec() {
      return $this->belongsTo('App\Spec');
    }
}
