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

    public function avatar()
    {
        return $this->morphOne(File::class, 'related')->where('relation_name', 'avatar');
    }

    public function backCover()
    {
        return $this->morphOne(File::class, 'related')->where('relation_name', 'back_cover');
    }
}
