<div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel">Add New Banner</h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
     </button>
</div>

<div class="modal-body">
     <form class="ajax-form" method="post" action="{{ route('banner.add') }}">
          @csrf

          <div class="row">

               <!-- Position -->
               <div class="col-md-12 col-12 form-group">
                    <label>Position</label>
                    <input type="number" class="form-control" name="position">
               </div>

               <!-- image -->
               <div class="col-md-6 col-12 form-group">
                    <label for="image" class="text-capitalize">image ( 1290x800 px )</label><span class="require-span">*</span>
                    <img src="" class="mt-2 mb-2" width="100px">
                    <input type="file" class="form-control-file" onchange="filePreview(this)" name="image">
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

               <!-- Button Text -->
               <div class="col-md-12 col-12 form-group">
                    <label>Button Text</label>
                    <input type="text" class="form-control" name="button_text">
               </div>

               <!-- Button Link -->
               <div class="col-md-12 col-12 form-group">
                    <label>Button Link</label>
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


<script>
     const filePreview = (e) => {
          const file = e.files[0]
          e.previousElementSibling.src = URL.createObjectURL(file)
     }
</script>