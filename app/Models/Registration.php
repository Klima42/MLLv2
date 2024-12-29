<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    protected $fillable = [
        'parent_last_name',
        'parent_first_name',
        'email',
        'phone',
        'child_last_name',
        'child_first_name',
        'birth_date',
        'start_date',
        'comments'
    ];

    protected $casts = [
        'birth_date' => 'date',
        'start_date' => 'date',
    ];
}