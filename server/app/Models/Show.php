<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Show extends Model {

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'shows';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id', 'name', 'year'];
}
