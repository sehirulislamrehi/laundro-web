<?php

namespace App\Models\OrderModule;

use App\Models\ServiceModule\Service;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderServices extends Model
{
    use HasFactory;

    public function service(){
        return $this->belongsTo(Service::class);
    }
}
