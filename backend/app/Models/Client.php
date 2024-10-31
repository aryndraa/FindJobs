<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Client extends Authenticatable
{
    use HasFactory, HasApiTokens;

    protected $fillable = [
        'name',
        'username',
        'email',
        'password',
    ];

    public function clientProfile()
    {
        return $this->hasOne(ClientProfile::class);
    }

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
