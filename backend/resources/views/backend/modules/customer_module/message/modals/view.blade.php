<div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel"> {{ $contact_form->subject }}</h5>
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
                              <th>Name</th>
                              <td>{{ $contact_form->name }}</td>
                         </tr>
                         <tr>
                              <th>Email</th>
                              <td>{{ $contact_form->email ?? 'N/A' }}</td>
                         </tr>
                         <tr>
                              <th>Phone</th>
                              <td>{{ $contact_form->phone }}</td>
                         </tr>
                         <tr>
                              <th>Message</th>
                              <td>{{ $contact_form->message }}</td>
                         </tr>
                         <tr>
                              <th>Created Time</th>
                              <td>{{ $contact_form->created_at->toDayDateTimeString() }}</td>
                         </tr>
                         <tr>
                              <th>Updated Time</th>
                              <td>{{ $contact_form->updated_at->toDayDateTimeString() }}</td>
                         </tr>

                    </tbody>
               </table>
          </div>
     </div>
</div>
<div class="modal-footer">
     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>