<div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Edit Service</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>

<div class="modal-body">
    <form class="ajax-form" method="post" action="{{ route('service.update', $service->id) }}">
        @csrf


        <div class="row">

            <!-- name -->
            <div class="col-md-6 col-12 form-group">
                <label for="name">Name</label><span class="require-span">*</span>
                <input type="text" class="form-control" name="name" value="{{ $service->name }}" >
            </div>


            <!-- icon -->
            <div class="col-md-6 col-12 form-group">
                <label for="icon" class="text-capitalize">icon</label><span class="require-span">*</span>
                <input type="file" class="form-control-file" name="icon" >
            </div>

            <!-- select parent -->
            <div class="col-md-12 col-12 form-group" style="none">
                <label class="text-capitalize">select parent</label>
                <select name="service_id" class="form-control" id="service-onchange">
                    <option value="null">No parent service</option>
                    {{-- @foreach ( $services as $all_service )
                    <option value="{{ $all_service->id }}" {{ $service->service_id == $all_service->id ? 'selected' : '' }}>{{ $all_service->name }}</option>
                    @endforeach --}}
                </select>
            </div>

            <!-- price -->
            <div class="col-md-12 col-12 form-group" @if( $service->service_id ) style='display: block' @endif >
                <div class="row">
                    <div class="form-check col-md-12">
                        <input type="checkbox" class="form-check-input" id="addPrice" name="price_check" value="1" @if( $service->price ) checked @endif >
                        <label class="form-check-label" for="addPrice">Add Price</label>
                    </div>
                </div>

                <div class="row material-price" @if( $service->price ) style='display: block' @endif>
                    <div class="col-md-12">
                        <label for="price" class="text-capitalize">Price</label>
                        <input type="number" class="form-control" name="price" value="{{ $service->price }}">
                    </div>
                </div>
            </div>
            

            <!-- select status -->
            <div class="col-md-12 col-12 form-group">
            <label>Select status</label><span class="require-span">*</span>
                <select name="is_active" value="{{ $service->is_active }}" class="form-control">
                    <option value="0" {{ $service->is_active == 0 ? 'selected' : '' }}>Inactive</option>
                    <option value="1" {{ $service->is_active == 1 ? 'selected' : '' }}>Active</option>
                </select>
            </div>

            <!-- short description -->
            <div class="col-md-12 form-group">
                <label>Short Description</label>
                <textarea name="short_description" class="form-control" rows="3">{{ $service->short_description }}</textarea>
            </div>

            <!-- Overview -->
            <div class="col-md-12 form-group">
                <label>Overview</label>
                <textarea name="service_overview" class="div_editor-1" >{{ $service->service_overview }}</textarea>
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

    $(document).on('change', '#service-onchange', function() {
        let value = $("#service-onchange option:selected").val()

        if (value == 'null') {
            $(".parent-exists").hide()
        } else {
            $(".parent-exists").show()
        }
    })

    $(document).on('click','#addPrice',function(){
        let $this = $(this)

        if( $this[0].checked == true ){
            $(".material-price").show()
        }
        else{
            $(".material-price").hide()
        }
    })
</script>



<link rel="stylesheet" href="{{ asset('backend/css/rich_text_editor/rte_theme_default.css') }}">
<script src="{{ asset('backend/js/rich_text_editor/all_pluggins.js') }}"></script>
<script src="{{ asset('backend/js/rich_text_editor/rte.js') }}"></script>
<script>
    new RichTextEditor(`.div_editor-1`);
</script>