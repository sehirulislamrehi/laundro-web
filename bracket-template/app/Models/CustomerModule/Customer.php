<?php

namespace App\Models\CustomerModule;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\LocationModule\Location;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Customer extends Authenticatable implements JWTSubject
{
    use HasFactory;

    protected $fillable = [
        'name','email', 'phone',
        'password',
        'address',
        'is_active',
        'is_verified',
        'month',
        'year',
    ];

    // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function emirates(){
        return $this->belongsTo(Location::class,"emirate_id","id");
    }
}

