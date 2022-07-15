<div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel">Are you sure want to delete this page ?</h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
     </button>
</div>

<div class="modal-footer">
     <form class="ajax-form" method="post" action="{{ route('custom_page.delete', encrypt($custom_page->id)) }}">
          @csrf
          <button type="submit" class="btn btn-danger">Delete</button>
     </form>
     <button type="button" class="btn btn-success" data-dismiss="modal">No</button>
</div>
