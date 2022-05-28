

<li 

@if( $id == $child_location->id )
     style="color : red" 
@endif


>{{ $child_location->name }}</li>
@if ($child_location->locations)
    <ul style="margin-left: 15px; padding-left: 15px;">
        @foreach ($child_location->locations as $childLocation)
          @include('backend.modules.location_module.recursive.view_child_location', [
               'child_location' => $childLocation,
               'id' => $id
          ])
        @endforeach
    </ul>
@endif