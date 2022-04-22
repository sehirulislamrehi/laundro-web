<div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Edit Area : {{ $area->name }}</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>

<div class="modal-body">
    <form class="ajax-form" method="post" action="{{ route('area.update', $area->id) }}">
        @csrf

        <div class="row">

            <!-- name -->
            <div class="col-md-6 col-12 form-group">
                <label for="name">Name</label><span class="require-span">*</span>
                <input type="text" class="form-control" name="name" value="{{ $area->name }}" >
            </div>

            <!-- select parent -->
            <div class="col-md-6 col-12 form-group">
            <label>Select Zone</label><span class="require-span">*</span>
                <select name="location_id" class="form-control chosen">
                    @foreach (App\Models\LocationModule\Location::where('type','zone')->where('is_active', true)->orderBy('name', 'asc')->get() as $zone)                        
                        <option value="{{ $zone->id }}" {{ $area->location_id == $zone->id ? 'selected' : '' }}>{{ $zone->name }}</option>
                    @endforeach
                </select>
            </div>

            <!-- select Zipcode -->
            <div class="col-md-6 col-12 form-group">
            <label>Select Zipcode</label><span class="require-span">*</span>
                <select name="zipcode_id" class="form-control chosen">
                    @foreach ($zipcodes as $zipcode)                        
                        <option value="{{ $zipcode->id }}" @if( $zipcode->id == $zone->zipcode_id ) selected @endif >{{ $zipcode->code }}</option>
                    @endforeach
                </select>
            </div>

            <!-- select role -->
            <div class="col-md-6 col-12 form-group">
            <label>Select status</label><span class="require-span">*</span>
                <select name="is_active" class="form-control ">
                    <option value="1" {{ $area->is_active == 1 ? 'selected' : '' }}>Active</option>
                    <option value="0" {{ $area->is_active == 0 ? 'selected' : '' }}>Inactive</option>
                </select>
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


<link href="{{ asset('backend/css/chosen/choosen.min.css') }}" rel="stylesheet">
<script src="{{ asset('backend/js/chosen/choosen.min.js') }}"></script>

<script>
    $(document).ready(function domReady() {
        $(".chosen").chosen();
    });
</script>
