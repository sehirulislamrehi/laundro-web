@extends("backend.template.layout")

@section('per_page_css')
<link href="{{ asset('backend/css/datatable/jquery.dataTables.min.css') }}" rel="stylesheet">
<link href="{{ asset('backend/css/datatable/dataTables.bootstrap4.min.css') }}" rel="stylesheet">
<link href="{{ asset('backend/css/chosen/choosen.min.css') }}" rel="stylesheet">
@endsection

@section('body-content')
<div class="br-mainpanel">
    <div class="br-pageheader">
        <nav class="breadcrumb pd-0 mg-0 tx-12">
            <a class="breadcrumb-item" href="{{ route('dashboard') }}">Dashboard</a>
            <a class="breadcrumb-item active" href="#">All Area</a>
        </nav>
    </div>

    <div class="br-pagebody">
        <div class="row">
            <div class="col-md-12">
                <div class="card card-primary card-outline table-responsive">
                    <div class="card-header text-right">
                        <div class="row">
                            <div class="col-md-4">
                                <form action="{{ route('area.all') }}" method="get" style="display: flex; width: 100%">
                                    <div class="form-group" style='width:50%'>
                                        <select name="zone_id" class="form-control chosen">
                                            <option value="All" @if( $zone_id=='All' ) selected @endif>All Zone</option>
                                            @foreach( $zones as $zone )
                                            <option value="{{ $zone->id }}" @if( $zone_id==$zone->id ) selected @endif>{{ $zone->name }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="form-group" style='width:10%'>
                                        <button class="btn btn-success"><i class="fas fa-search"></i></button>
                                    </div>
                                </form>
                            </div>
                            <div class="col-md-8">
                                @if( can('add_areas') )
                                <button type="button" data-content="{{ route('area.add.modal') }}" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                                    Add
                                </button>
                                @endif
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <table class="table table-bordered table-striped dataTable dtr-inline area-datatable" id="datatable">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Zone</th>
                                    <th>Zipcode</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
@endsection

@section('per_page_js')
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="{{ asset('backend/js/custom-script.min.js') }}"></script>

<script src="{{ asset('backend/js/datatable/jquery.validate.js') }}"></script>
<script src="{{ asset('backend/js/datatable/jquery.dataTables.min.js') }}"></script>
<script src="{{ asset('backend/js/datatable/dataTables.bootstrap4.min.js') }}"></script>

<script src="{{  asset('backend/js/ajax_form_submit.js') }}"></script>

<script>
    $(function() {
        $('.area-datatable').DataTable({
            processing: true,
            serverSide: true,
            ajax: "{{ route('area.data',$zone_id) }}",
            order: [
                [0, 'Desc']
            ],
            columns: [{
                    data: 'DT_RowIndex',
                    name: 'DT_RowIndex',
                    orderable: false,
                    searchable: false
                },
                {
                    data: 'name',
                    name: 'name'
                },
                {
                    data: 'parent',
                    name: 'parent'
                },
                {
                    data: 'zipcode',
                    name: 'zipcode'
                },
                {
                    data: 'is_active',
                    name: 'is_active'
                },
                {
                    data: 'action',
                    name: 'action',
                    orderable: false,
                },
            ]
        });
    });
</script>

<script src="{{ asset('backend/js/chosen/choosen.min.js') }}"></script>
<script>
    $(document).ready(function domReady() {
        $(".chosen").chosen();
    });
</script>
@endsection