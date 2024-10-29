<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ClientProfile extends Model
{
    use HasFactory;

    protected $fillable = [
      'bio',
      'about',
      'phone',
      'country'
    ];

    public function client():BelongsTo
    {
        return $this->belongsTo(Client::class);
    }
}
