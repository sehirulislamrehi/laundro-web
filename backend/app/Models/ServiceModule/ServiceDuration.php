<?php

namespace App\Models\ServiceModule;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ServiceDuration extends Model
{
    use HasFactory;

    public function duration(){
        return $this->belongsTo(Duration::class);
    }

    public function service(){
        return $this->belongsTo(Service::class);
    }
}
