<div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel">Add New FAQ</h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
     </button>
</div>

<div class="modal-body">
     <form class="ajax-form" method="post" action="{{ route('faq.add') }}">
          @csrf

          <div class="row">

               <!-- Position -->
               <div class="col-md-12 col-12 form-group">
                    <label>Position</label>
                    <input type="number" class="form-control" name="position">
               </div>

               <!-- Question -->
               <div class="col-md-12 col-12 form-group">
                    <label>Question</label><span class="require-span">*</span>
                    <input type="text" class="form-control" name="question">
               </div>

               <!-- Answer -->
               <div class="col-md-12 col-12 form-group">
                    <label>Answer</label><span class="require-span">*</span>
                    <textarea name="answer" rows="3" class="form-control"></textarea>
               </div>

               <!-- Status -->
               <div class="col-md-12 col-12 form-group">
                    <label>Status</label><span class="require-span">*</span>
                    <select name="is_active" class="form-control">
                         <option value="1">Active</option>
                         <option value="0">In active</option>
                    </select>
               </div>

               <div class="col-md-12 form-group text-right">
                    <button type="submit" class="btn btn-outline-dark">
                         Add
                    </button>
               </div>

          </div>
     </form>
</div>
<div class="modal-footer">
     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>
