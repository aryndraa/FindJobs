<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FreelancerProfile extends Model
{
    use HasFactory;


    protected $fillable = [
        'bio',
        'about',
        'phone',
        'country'
    ];

    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }
    public function avatar()
    {
        return $this->morphOne(File::class, 'related')->where('relation_name', 'avatar');
    }

    public function backCover()
    {
        return $this->morphOne(File::class, 'related')->where('relation_name', 'back_cover');
    }

    public function freelancerSkills()
    {
        return $this->hasMany(FreelancerSkill::class, 'freelancer_profile_id');
    }

}
