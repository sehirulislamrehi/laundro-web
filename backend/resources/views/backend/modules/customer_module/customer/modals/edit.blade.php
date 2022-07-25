<div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel">{{ $customer->name }}</h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
     </button>
</div>

<div class="modal-body">
     <form action="{{ route('customer.edit', encrypt($customer->id)) }}" method="post" class="ajax-form"> 
          @csrf
          <div class="row">


               <!-- Status start -->
               <div class="col-md-12 form-group">
                    <label>Status</label>
                    <select name="is_active" class="form-control">
                         <option value="1" @if( $customer->is_active == "1" ) selected @endif>Active</option>
                         <option value="0" @if( $customer->is_active == "0" ) selected @endif>Inactive</option>
                    </select>
               </div>
               <!-- Status end -->

               <!-- Verified Status start -->
               <div class="col-md-12 form-group">
                    <label>Verified Status</label>
                    <select name="is_verified" class="form-control">
                         <option value="1" @if( $customer->is_verified == "1" ) selected @endif>Verified</option>
                         <option value="0" @if( $customer->is_verified == "0" ) selected @endif>Not Verified</option>
                    </select>
               </div>
               <!-- Verified Status end -->

               <div class="col-md-12 form-group text-right">
                    <button type="submit" class="btn btn-outline-dark">
                         Update
                    </button>
               </div>

          </div>
     </form>
</div>
<div class="modal-footer">
     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>