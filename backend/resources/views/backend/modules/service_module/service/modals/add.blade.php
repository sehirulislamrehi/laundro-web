<div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Add New Service</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>

<div class="modal-body">
    <form class="ajax-form" method="post" action="{{ route('service.add') }}">
        @csrf

        <div class="row">

            <!-- name -->
            <div class="col-md-12 col-12 form-group">
                <label for="name">Name</label><span class="require-span">*</span>
                <input type="text" class="form-control" name="name">
            </div>


            <!-- icon -->
            <div class="col-md-6 col-12 form-group">
                <label for="icon" class="text-capitalize">icon</label><span class="require-span">*</span>
                <input type="file" class="form-control-file" name="icon">
            </div>

            <!-- image -->
            <div class="col-md-6 col-12 form-group">
                <label for="image" class="text-capitalize">image</label><span class="require-span">*</span>
                <input type="file" class="form-control-file" name="image">
            </div>

            <!-- select parent -->
            <div class="col-md-12 col-12 form-group" style="none">
                <label class="text-capitalize">select parent</label>
                <select name="service_id" class="form-control" id="service-onchange">
                    <option selected value="null">No parent service</option>
                    {{-- @foreach ( $services as $service)
                    <option value="{{ $service->id }}">{{ $service->name }}</option>
                    @endforeach --}}
                </select>
            </div>

            <!-- price -->
            <div class="col-md-12 col-12 form-group">
                <div class="row">
                    <div class="form-check col-md-12">
                        <input type="checkbox" class="form-check-input" id="addPrice" name="price_check" value="1">
                        <label class="form-check-label" for="addPrice">Add Price</label>
                    </div>
                </div>

                <div class="row material-price">
                    <div class="col-md-12">
                        <label for="price" class="text-capitalize">Price</label>
                        <input type="number" class="form-control" name="price">
                    </div>
                </div>
            </div>



            <!-- select status -->
            <div class="col-md-12 col-12 form-group">
                <label>Select status</label><span class="require-span">*</span>
                <select name="is_active" class="form-control">
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                </select>
            </div>

            <!-- short description -->
            <div class="col-md-12 form-group">
                <label>Short Description</label>
                <textarea name="short_description" class="form-control" rows="3"></textarea>
            </div>

            <!-- Overview -->
            <div class="col-md-12 form-group">
                <label>Overview</label>
                <textarea name="service_overview" class="div_editor-1" ></textarea>
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