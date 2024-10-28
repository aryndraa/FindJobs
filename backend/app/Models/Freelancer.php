<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Freelancer extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\FreelancerFactory> */
    use HasFactory, Notifiable;

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

    public function FreelancerProfile()
    {
        return $this->hasOne(FreelancerProfile::class);
    }

    public function avatar()
    {
        return $this->morphOne(File::class, 'related');
    }

    public function views()
    {
        return $this->hasMany(FreelancerView::class , 'freelancer_id');
    }

    public function likes()
    {
        return $this->hasMany(FreelancerLike::class, 'freelancer_id');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class, 'freelancer_id');
    }

    public function projectUser()
    {
        return $this->hasOne(ProjectUser::class, 'freelancer_id');
    }

    public function projectBid()
    {
        return $this->hasOne(ProjectBid::class, 'freelancer_id');
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
