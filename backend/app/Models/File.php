<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;

class File extends Model
{
    use HasFactory;

    protected $fillable = [
        'file_name',
        'file_path',
        'file_type',
        'relation_name'
    ];

    public static function uploadFile(UploadedFile $file, Model $model, $relation, $directory, $relation_name)
    {
        $filePath = $file->store($directory, 'public');
        $fileName = $file->getClientOriginalName();
        $fileType = $file->getMimeType();

        $model->$relation()->create([
            'file_name' => $fileName,
            'file_path' => $filePath,
            'file_type' => $fileType,
            'relation_name' => $relation_name
        ]);
    }

    public function getFileUrlAttribute()
    {
        if ($this->file_path) {
            return asset('storage/' . $this->file_path);
        }

        return secure_asset(null);
    }

    public function related()
    {
        return $this->morphTo();
    }
}
