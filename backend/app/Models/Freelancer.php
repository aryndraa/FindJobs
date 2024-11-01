<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Freelancer extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\FreelancerFactory> */
    use HasFactory, Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'username',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function freelancerProfile()
    {
        return $this->hasOne(FreelancerProfile::class);
    }

    public function projects()
    {
        return $this->morphMany(Project::class, 'user');
    }

    public function projectBidders()
    {
        return $this->hasMany(ProjectBidder::class);
    }

    public function services()
    {
        return $this->hasMany(Service::class);
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
