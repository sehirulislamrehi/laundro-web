<?php

namespace App\Models\OrderModule;

use App\Models\ServiceModule\Service;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    public function order_service(){
        return $this->hasMany(OrderServices::class);
    }
}
