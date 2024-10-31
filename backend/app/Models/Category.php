<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public function freelancerSkills()
    {
        return $this->hasMany(FreelancerSkill::class);
    }

    public function projectCategories()
    {
        return $this->hasMany(ProjectCategory::class);
    }

    public function servicesCategories()
    {
        return $this->hasMany(ServiceCategory::class);
    }
}
