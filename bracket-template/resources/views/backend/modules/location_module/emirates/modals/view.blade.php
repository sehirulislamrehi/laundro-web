<div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel"> {{ $emirate->name }}</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>

<div class="modal-body">
     <div class="row">
          <div class="col-sm-12">
               <table class="table table-bordered table-sm">
                    <tbody>
                         <tr>
                              <td>Name</td>
                              <td>{{ $emirate->name }}</td>
                         </tr>
                         <tr>
                              <td>Status</td>
                              <td>
                                   @if( $emirate->is_active == true )
                                        <span class="badge badge-success">Active</span>
                                   @else
                                        <span class="badge badge-danger">Inactive</span>
                                   @endif
                              </td>
                         </tr>
                         <tr>
                              <td>Listing</td>
                              <td>
                                   <ul style="padding-left: 15px;">
                                    <li >
                                            @php
                                                $parent_location = parent_location($emirate->id)
                                            @endphp
                                            {{ $parent_location->name }}

                                            <ul style="padding-left: 15px;">
                                                @foreach( $parent_location->childrenLocations  as $childLocation )
                                                    @php
                                                        $string = "--";
                                                    @endphp
                                                    @include('backend.modules.location_module.recursive.view_child_location', [
                                                       'child_location' => $childLocation,
                                                       'id' => $emirate->id
                                                    ])
                                                @endforeach
                                            </ul>

                                        </li>
                                   </ul>
                              </td>
                         </tr>
                         <tr>
                              <td>Created Date & Time</td>
                              <td>{{ $emirate->created_at->toDayDateTimeString() }}</td>
                         </tr>
                         <tr>
                              <td>Last Update</td>
                              <td>{{ $emirate->updated_at->toDayDateTimeString() }}</td>
                         </tr>
                    </tbody>
               </table>
          </div>
     </div>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>
