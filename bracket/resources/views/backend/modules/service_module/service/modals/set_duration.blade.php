<style type="text/css">
	input[type='checkbox']{
		cursor: pointer;
	}
</style>

<div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Set Durations for {{ $service->name }}</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>

<div class="modal-body">
        @include('backend.modules.service_module.service.modals.includes.task_based')
</div>
<div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>


<link href="{{ asset('backend/css/select2/form-select2.min.css') }}" rel="stylesheet">
<link href="{{ asset('backend/css/select2/select2-materialize.css') }}" rel="stylesheet">
<link href="{{ asset('backend/css/select2/select2.min.css') }}" rel="stylesheet">
<script src="{{ asset('backend/js/select2/form-select2.min.js') }}"></script>
<script src="{{ asset('backend/js/select2/select2.full.min.js') }}"></script>
<script>
    $(document).ready(function domReady() {
        $(".select2").select2({
            dropdownAutoWidth: true,
            width: '100%',
            dropdownParent: $('#myModal')
        });
    });

    function enableInput(duration_id, is_checked){
    	let input = document.querySelector('#price_' + duration_id);

    	if (is_checked) {
    		input.removeAttribute("disabled");
    	}else{
    		input.setAttribute("disabled", "1");

    	}
    }


    //add variation
    $(document).on('click','#add-variation',function(){
        let $this = $(this)
        
        if( $this[0].checked == true ){
            $(".item-action").show()
            $(".task-name").show()
        }
        else{
            $(".item-action").hide()
            $(".item-card-append").remove()
            $(".task-name").hide()
        }
    })

    //add more row
    $(document).on('click','.add-more-varient',function(){
        let $this = $(this)
        $(".item-list").append(`
            <div class="col-md-12 item-card item-card-append">
               <div class="row">
                    <div class="col-md-4 task-name" style='display: block'>
                        <label>Task Name</label>
                        <input type="text" class="form-control" placeholder="Instruction" name="instructions[]">
                    </div>
                    <div class="col-md-3">
                        <label>Price</label>
                        <input type="number" class="form-control" placeholder="Price" min="1" name="prices[]" required>
                    </div>
                    <div class="col-md-3">
                        <label>Duration</label>
                         <select name="duration_ids[]" class="form-control">
                              @foreach ( $durations as $duration)
                              <option value="{{ $duration->id }}">{{ $duration->duration }} {{ $duration->type }}</option>
                              @endforeach
                         </select>
                    </div>
                    <div class="col-md-2 mt-4 item-action" style='display: block'>
                        <button type="button" class="btn btn-success btn-sm add-more-varient">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button type="button" class="btn btn-danger btn-sm remove-varient">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
               </div>
               <hr>
            </div>
        `).clone(row,false);
    })

    //remove row
    $(document).on('click','.remove-varient',function(){
        let $this = $(this)
        $this.closest(".item-card").remove()
    })
</script>
