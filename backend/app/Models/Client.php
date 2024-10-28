<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "username",
        "email",
        "password",
    ];

    public function profile()
    {
        return $this->hasOne(ClientProfile::class);
    }

    public function projects()
    {
        return $this->hasMany(Project::class);
    }

    public function projectUsers()
    {
        return $this->hasMany(ProjectUser::class);
    }

    public function freelancerLikes()
    {
        return $this->hasMany(FreelancerLike::class);
    }

    public function avatar()
    {
        return $this->morphOne(File::class, 'related');
    }

    public function backCover()
    {
        return $this->morphOne(File::class, 'related');
    }


    public function receivedChats()
    {
        return $this->morphMany(UserChat::class, 'receiver');
    }

    public function sentChats()
    {
        return $this->morphMany(UserChat::class, 'sender');
    }
}
