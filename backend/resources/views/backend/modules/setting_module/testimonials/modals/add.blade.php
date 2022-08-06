<div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel">Add New Testimonial</h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
     </button>
</div>

<div class="modal-body">
     <form class="ajax-form" method="post" action="{{ route('testimonial.add') }}">
          @csrf

          <div class="row">

               <!-- Position -->
               <div class="col-md-12 col-12 form-group">
                    <label>Position</label>
                    <input type="number" class="form-control" name="position">
               </div>

               <!-- Name -->
               <div class="col-md-12 col-12 form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" name="name">
               </div>

               <!-- Designation -->
               <div class="col-md-12 col-12 form-group">
                    <label>Designation</label>
                    <input type="text" class="form-control" name="designation">
               </div>

               <!-- image -->
               <div class="col-md-6 col-12 form-group">
                    <label for="image" class="text-capitalize">image ( 100x100 px )</label><span class="require-span">*</span>
                    <img src="" class="mt-2 mb-2" width="100px">
                    <input type="file" class="form-control-file" onchange="filePreview(this)" name="image">
               </div>

               <!-- Comments -->
               <div class="col-md-12 col-12 form-group">
                    <label>Comments</label>
                    <textarea name="comments" rows="3" class="form-control"></textarea>
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


<script>
     const filePreview = (e) => {
          const file = e.files[0]
          e.previousElementSibling.src = URL.createObjectURL(file)
     }
</script>