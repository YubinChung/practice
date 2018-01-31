<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use User;

class Todo extends Model
{
    public function users(){
        return $this->belongs_to('\App\User');
    }
}
