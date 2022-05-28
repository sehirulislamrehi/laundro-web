<?php

namespace App\Models\LocationModule;

use App\Models\LocationModule\Location;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    use HasFactory;

    public function parent(){
    	return $this->belongsTo(Location::class, 'location_id', 'id');
    }

    public function zipcode(){
    	return $this->belongsTo(Zipcode::class, 'zipcode_id', 'id');
    }

    //children
    public function locations(){
        return $this->hasMany(Location::class,"location_id","id");
    }
    public function childrenLocations(){
        return $this->locations()->with('childrenLocations');
    }
}
