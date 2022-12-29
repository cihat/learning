<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function question()
    {
        return $this->belongsTo(Question::class);
    }
}
// 4:03 on the  https://www.youtube.com/watch?v=_SyG3HMv48k&list=PLpzy7FIRqpGC8Jk6gyWdSVdxCVXZAsenQ&index=18
// e18: Final Project Part 2 (Questionnaire/Survey App)
