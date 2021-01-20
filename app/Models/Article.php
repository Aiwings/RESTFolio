<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{

    protected $fillable = [
        "slug", "publication_date", "title", "content", "description", "author"
    ];

    public function author()
    {
        return $this->belongsTo('App\User');
    }
}
