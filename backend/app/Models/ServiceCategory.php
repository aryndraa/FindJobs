<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceCategory extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function freelancerProfile()
    {
        return $this->hasMany(FreelancerProfile::class);
    }

    public function projectCategories()
    {
        return $this->hasMany(ProjectCategory::class);
    }
}
