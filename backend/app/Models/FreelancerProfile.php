<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FreelancerProfile extends Model
{
    use HasFactory;
    protected $fillable = [
        "bio",
        "about",
        "phone",
        "country"
    ];

    public function freelance()
    {
        return $this->belongsTo(Freelancer::class);
    }

    public function serviceCategory()
    {
        return $this->belongsTo(ServiceCategory::class);
    }
}
