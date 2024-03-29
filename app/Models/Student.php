<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Student extends AuthModel
{
    use SoftDeletes;

    protected $hidden = [
        'password', 'school_id', 'deleted_at', 'pivot', 'line_id'
    ];

    protected $casts = [
        'school_id' => 'int',
    ];

    public function school(): BelongsTo
    {
        return $this->belongsTo(School::class);
    }

    /**
     * 关注的老师
     *
     * @return BelongsToMany
     */
    public function followers(): BelongsToMany
    {
        return $this->belongsToMany(Teacher::class, 'follows')->withTimestamps();
    }
}
