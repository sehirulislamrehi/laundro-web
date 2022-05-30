<div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel"> {{ $coupon->code }}</h5>
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
                              <td>Code</td>
                              <td>{{ $coupon->code }}</td>
                              <td>Expiry Date</td>
                              <td>{{ $coupon->expiry_date }}</td>
                         </tr>
                         <tr>
                              <td>Type</td>
                              <td>{{ $coupon->type }}</td>
                              <td>Amount</td>
                              <td>{{ $coupon->amount }} {{ ( $coupon->type == "Cash" ) ? 'AED' : '%' }} </td>
                         </tr>
                         <tr>
                              <td>Active Status</td>
                              <td>
                              @if($coupon->is_active == 1)
                                   <span class="badge badge-success">Active</span>
                              @else
                                   <span class="badge badge-danger">Inactive</span>
                              @endif
                              </td>
                         </tr>

                         <tr>
                              <td>Created Date & Time</td>
                              <td>{{ $coupon->created_at->toDayDateTimeString() }}</td>
                              <td>Last Update</td>
                              <td>{{ $coupon->updated_at->toDayDateTimeString() }}</td>
                         </tr>
                    </tbody>
               </table>
          </div>
     </div>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>
