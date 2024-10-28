<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserChat extends Model
{
    use HasFactory;

    protected $fillable = [
      "message"
    ];

    public function receiver()
    {
        return $this->morphTo();
    }

    public function sender()
    {
        return $this->morphTo();
    }

}
