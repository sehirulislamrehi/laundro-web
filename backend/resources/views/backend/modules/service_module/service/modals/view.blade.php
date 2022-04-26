<div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel"> {{ $service->name }}</h5>
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
                              <td>Icon</td>
                              <td>
                                   <img src='{{ asset("images/service/".$service->icon) }}' width='50px' height='50px'>
                              </td>
                         </tr>
                         <tr>
                              <td>Name</td>
                              <td>
                                   {{ $service->name }}
                              </td>
                         </tr>
                         <tr>
                              <td>Material Price</td>
                              <td>
                                   {{ $service->material_price  ? ( $service->material_price . ' BDT' ) : 'N/A' }} 
                              </td>
                         </tr>
                         <tr>
                              <td>Status</td>
                              <td>
                                   @if( $service->is_active == true )
                                   <span class="badge badge-success">Active</span>
                                   @else
                                   <span class="badge badge-danger">Inactive</span>
                                   @endif
                              </td>
                         </tr>
                         <tr>
                              <td>Parent</td>
                              <td>
                                   @if( $service->parent )
                                   <span>{{ $service->parent->name }}</span>
                                   @else
                                   <span class="badge badge-info">Parent</span>
                                   @endif
                              </td>
                         </tr>
                         <tr>
                              <td>Duration</td>
                              <td>
                                   <ul>
                                        @forelse( $service->service_durations as $service_duration )
                                        <li>
                                             {{ $service_duration->duration->duration }} 
                                             {{ $service_duration->duration->type }} - {{ $service_duration->price }} AED
                                             ( {{ $service_duration->instructions ? $service_duration->instructions : 'N/A' }} )
                                        </li>
                                        @empty
                                        <li>No duration found</li>
                                        @endforelse
                                   </ul>
                              </td>
                         </tr>
                         <tr>
                              <td>Created Date & Time</td>
                              <td>{{ $service->created_at->toDayDateTimeString() }}</td>
                         </tr>
                         <tr>
                              <td>Last Update</td>
                              <td>{{ $service->updated_at->toDayDateTimeString() }}</td>
                         </tr>
                    </tbody>
               </table>
          </div>
     </div>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>
