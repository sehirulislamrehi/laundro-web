<div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel"> {{ $duration->duration }} {{ $duration->type }}</h5>
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
                              <td>Duration</td>
                              <td>{{ $duration->duration }}</td>
                         </tr>
                         <tr>
                              <td>Type</td>
                              <td>{{ $duration->type }}</td>
                         </tr>
                         <tr>
                              <td>Active Status</td>
                              <td>
                              @if($duration->is_active == 1)
                                   <span class="badge badge-success">Active</span>
                              @else
                                   <span class="badge badge-danger">Inactive</span>
                              @endif
                              </td>
                         </tr>

                         <tr>
                              <td>Created Date & Time</td>
                              <td>{{ $duration->created_at->toDayDateTimeString() }}</td>
                         </tr>

                         <tr>
                              <td>Last Update</td>
                              <td>{{ $duration->updated_at->toDayDateTimeString() }}</td>
                         </tr>
                    </tbody>
               </table>
          </div>
     </div>
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>
