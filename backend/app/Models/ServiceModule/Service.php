<?php

namespace App\Models\ServiceModule;

use App\Models\ServiceModule\ServiceDuration;
use App\Models\ServiceModule\Type;
use App\Models\ServiceProviderModule\ServiceProvider;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    public function parent(){
    	return $this->belongsTo(Service::class, 'service_id', 'id');
    }
    public function duration(){
    	return $this->belongsTo(Duration::class, 'duration_id', 'id');
    }
    public function type(){
    	return $this->belongsTo(Type::class, 'type_id', 'id');
    }
    public function service_durations(){
    	return $this->hasMany(ServiceDuration::class);
    }


    public function service_providers(){
        return $this->belongsToMany(ServiceProvider::class, 'service_provider_services', 'service_id', 'service_provider_id');
    }
}
