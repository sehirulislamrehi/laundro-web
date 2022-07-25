<div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel"> {{ $customer->name }}</h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
     </button>
</div>

<div class="modal-body">
     <div class="row">
          <div class="col-md-12">
               <table className="table table-bordered" style="width: 100%;">
                    <tbody>
                         <tr>
                              <th>Image</th>
                              <td>
                                   <img src="{{ asset('images/customer/'. $customer->image) }}" width="32px" alt="">
                              </td>
                         </tr>
                         <tr>
                              <th>Name</th>
                              <td>{{ $customer->name }}</td>
                         </tr>
                         <tr>
                              <th>Email</th>
                              <td>{{ $customer->email ?? 'N/A' }}</td>
                         </tr>
                         <tr>
                              <th>Phone</th>
                              <td>{{ $customer->phone }}</td>
                         </tr>
                         <tr>
                              <th>Address</th>
                              <td>{{ $customer->address ?? 'N/A' }}</td>
                         </tr>
                         <tr>
                              <th>Point</th>
                              <td>{{ $customer->point ?? 'N/A' }}</td>
                         </tr>
                         <tr>
                              <th>Status</th>
                              <td>
                                   @if( $customer->is_active == true )
                                   <span class="badge badge-success">
                                        Active
                                   </span>
                                   @else
                                   <span class="badge badge-danger">
                                        Inactive
                                   </span>
                                   @endif
                              </td>
                         </tr>
                         <tr>
                              <th>Verified Status</th>
                              <td>
                                   @if( $customer->is_verified == true )
                                   <span class="badge badge-success">
                                        Verified
                                   </span>
                                   @else
                                   <span class="badge badge-danger">
                                        Not Verified
                                   </span>
                                   @endif
                              </td>
                         </tr>
                         <tr>
                              <th>Created Time</th>
                              <td>{{ $customer->created_at->toDayDateTimeString() }}</td>
                         </tr>
                         <tr>
                              <th>Updated Time</th>
                              <td>{{ $customer->updated_at->toDayDateTimeString() }}</td>
                         </tr>

                    </tbody>
               </table>
          </div>
     </div>
</div>
<div class="modal-footer">
     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>