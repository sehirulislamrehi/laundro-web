<div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel">Edit Page</h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
     </button>
</div>

<div class="modal-body">
     <form class="ajax-form" method="post" action="{{ route('custom_page.edit', encrypt($custom_page->id)) }}">
          @csrf

          <div class="row">

               <!-- Position -->
               <div class="col-md-12 col-12 form-group">
                    <label>Position</label>
                    <input type="number" class="form-control" name="position" value="{{ $custom_page->position }}">
               </div>

               <!-- Status -->
               <div class="col-md-12 col-12 form-group">
                    <label>Status</label><span class="require-span">*</span>
                    <select name="is_active" class="form-control">
                         <option value="1" @if( $custom_page->is_active == true ) selected @endif >Active</option>
                         <option value="0" @if( $custom_page->is_active == false ) selected @endif >In active</option>
                    </select>
               </div>

               <!-- Name -->
               <div class="col-md-12 col-12 form-group">
                    <label>Name</label><span class="require-span">*</span>
                    <input type="text" class="form-control" name="name" value="{{ $custom_page->name }}">
               </div>

               <!-- content -->
               <div class="col-md-12 col-12 form-group">
                    <label>Content</label><span class="require-span">*</span>
                    <textarea name="content" class="div_editor1">{{ $custom_page->content }}</textarea>
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



<link rel="stylesheet" href="{{ asset('backend/css/rich_text_editor/rte_theme_default.css') }}">
<script src="{{ asset('backend/js/rich_text_editor/all_pluggins.js') }}"></script>
<script src="{{ asset('backend/js/rich_text_editor/rte.js') }}"></script>
<script>
    var editor1 = new RichTextEditor(".div_editor1");
</script>