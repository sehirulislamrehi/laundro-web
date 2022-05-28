<div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Add New Area</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
      </button>
 </div>

<div class="modal-body">
    <form class="ajax-form" method="post" action="{{ route('area.add') }}">
        @csrf

        <div class="row">

            <!-- name -->
            <div class="col-md-6 col-12 form-group">
                <label for="name">Name</label><span class="require-span">*</span>
                <input type="text" class="form-control" name="name" >
            </div>

            <!-- select parent -->
            <div class="col-md-6 col-12 form-group">
            <label>Select Zone</label><span class="require-span">*</span>
                <select name="location_id" class="form-control chosen">
                    @foreach (App\Models\LocationModule\Location::where('type','zone')->where('is_active', true)->orderBy('name', 'asc')->get() as $zone)                        
                        <option value="{{ $zone->id }}">{{ $zone->name }}</option>
                    @endforeach
                </select>
            </div>

            <!-- select Zipcode -->
            <div class="col-md-6 col-12 form-group">
            <label>Select Zipcode</label><span class="require-span">*</span>
                <select name="zipcode_id" class="form-control chosen">
                    @foreach ($zipcodes as $zipcode)                        
                        <option value="{{ $zipcode->id }}">{{ $zipcode->code }}</option>
                    @endforeach
                </select>
            </div>

            <!-- select status -->
            <div class="col-md-6 col-12 form-group">
            <label>Select status</label><span class="require-span">*</span>
                <select name="is_active" class="form-control">
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
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



<link href="{{ asset('backend/css/chosen/choosen.min.css') }}" rel="stylesheet">
<script src="{{ asset('backend/js/chosen/choosen.min.js') }}"></script>

<script>
    $(document).ready(function domReady() {
        $(".chosen").chosen();
    });
</script>


