<div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel">{{ $duration->duration }} {{ $duration->type }}</h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
     </button>
</div>

<div class="modal-body">
     <form class="ajax-form" method="post" action="{{ route('duration.edit',encrypt($duration->id)) }}">
          @csrf

          <div class="row">

               <!-- Duration -->
               <div class="col-md-12 col-12 form-group">
                    <label>Duration</label><span class="require-span">*</span>
                    <input type="number" step=".1" class="form-control" name="duration"  value="{{ $duration->duration }}">
               </div>

               <!-- Type -->
               <div class="col-md-12 col-12 form-group">
                    <label>Type</label><span class="require-span">*</span>
                    <select name="type" class="form-control">
                         <option value="Hour">Hour</option>
                    </select>
               </div>

               <!-- Status -->
               <div class="col-md-12 col-12 form-group">
                    <label>Status</label><span class="require-span">*</span>
                    <select name="is_active" class="form-control">
                         <option value="1" @if( $duration->is_active == true ) selected @endif >Active</option>
                         <option value="0" @if( $duration->is_active == false ) selected @endif >Inactive</option>
                    </select>
               </div>

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