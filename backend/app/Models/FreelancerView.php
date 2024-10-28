<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FreelancerView extends Model
{
    use HasFactory;

    public function freelancer()
    {
        return $this->belongsTo(Freelancer::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
