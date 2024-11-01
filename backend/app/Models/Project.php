<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'price_min',
        'price_max',
        'is_completed',
        'bid_status',
    ];

    public function projectBidders()
    {
        return $this->hasMany(ProjectBidder::class);
    }

    public function projectCategories()
    {
        return $this->hasMany(ProjectCategory::class);
    }

    public function projectsBidders()
    {
        return $this->hasMany(ProjectBidder::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }




}
