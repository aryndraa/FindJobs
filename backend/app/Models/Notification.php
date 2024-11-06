<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;

    protected $fillable = [
      'notification_title',
      'message'
    ];

    public function user()
    {
        return $this->morphTo();
    }
}