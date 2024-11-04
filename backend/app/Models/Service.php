<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'currency'
    ];

    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }

    public function image()
    {
        return $this->morphOne(File::class, 'related');
    }

    public function serviceCategories()
    {
        return $this->hasMany(ServiceCategory::class);
    }

    public function serviceVisitors()
    {
        return $this->hasMany(ServiceVisitor::class);
    }

    public function serviceLikes()
    {
        return $this->hasMany(ServiceLike::class);
    }
}
