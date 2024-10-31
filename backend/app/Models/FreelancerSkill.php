<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FreelancerSkill extends Model
{

    protected $fillable = [
        'category_id',
        'freelancer_profile_id'
    ];

    public function freelancer()
    {
        return $this->belongsTo(FreelancerProfile::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
