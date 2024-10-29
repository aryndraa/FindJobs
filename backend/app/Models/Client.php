<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'username',
        'email',
        'password',
    ];

    public function servicevisitors()
    {
        return $this->hasMany(ServiceVisitor::class);
    }

    public function sentMessages()
    {
        return $this->morphMany(UserChat::class, 'sender');
    }

    public function receivedMessages()
    {
        return $this->morphMany(UserChat::class, 'receiver');
    }

}
