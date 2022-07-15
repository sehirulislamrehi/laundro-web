<div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel">Add New Banner</h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
     </button>
</div>

<div class="modal-body">
     <form class="ajax-form" method="post" action="">
          @csrf

          <div class="row">

               <!-- Position -->
               <div class="col-md-12 col-12 form-group">
                    <label>Position</label><span class="require-span">*</span>
                    <input type="text" class="form-control" name="position">
               </div>

               <!-- image -->
               <div class="col-md-6 col-12 form-group">
                    <label for="image" class="text-capitalize">image</label><span class="require-span">*</span>
                    <input type="file" class="form-control-file" name="image">
               </div>

               <!-- Title -->
               <div class="col-md-12 col-12 form-group">
                    <label>Title</label>
                    <input type="text" class="form-control" name="title">
               </div>

               <!-- Short Description -->
               <div class="col-md-12 col-12 form-group">
                    <label>Short Description</label>
                    <input type="text" class="form-control" name="short_description">
               </div>

               <!-- Banner Text -->
               <div class="col-md-12 col-12 form-group">
                    <label>Banner Text</label>
                    <input type="text" class="form-control" name="button_text">
               </div>

               <!-- Banner Link -->
               <div class="col-md-12 col-12 form-group">
                    <label>Banner Link</label>
                    <input type="text" class="form-control" name="button_link">
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
