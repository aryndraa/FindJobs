<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "description",
        "price_min",
        "price_max",
        "is_completed",
        "bid_status"
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function projectCategories()
    {
        return $this->hasMany(ProjectCategory::class);
    }

    public function projectUser()
    {
        return $this->hasOne(ProjectUser::class);
    }

    public function projectBid()
    {
        return $this->hasMany(ProjectBid::class);
    }

    public function comment()
    {
        return $this->hasMany(Comment::class);
    }
}
