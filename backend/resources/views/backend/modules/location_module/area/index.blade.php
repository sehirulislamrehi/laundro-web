@extends("backend.template.layout")

@section('per_page_css')
<link href="{{ asset('backend/css/datatable/jquery.dataTables.min.css') }}" rel="stylesheet">
<link href="{{ asset('backend/css/datatable/dataTables.bootstrap4.min.css') }}" rel="stylesheet">
<link href="{{ asset('backend/css/chosen/choosen.min.css') }}" rel="stylesheet">
@endsection

@section('body-content')
<div class="content-wrapper" style="min-height: 147px;">

    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-left">
                        <li class="breadcrumb-item">
                            <a href="{{ route('dashboard') }}">
                                Dashboard
                            </a>
                        </li>
                        <li class="breadcrumb-item active">
                            <a href="{{ route('area.all') }}">
                                All Areas
                            </a>
                        </li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <section class="content">
        <div class="container-fluid">

            <div class="row">
                <div class="col-md-12">
                    <div class="card card-primary card-outline table-responsive">
                        <div class="card-header text-right">
                            <div class="row">
                                <div class="col-md-4">
                                    <form action="{{ route('area.all') }}" method="get" style="display: flex; width: 100%">
                                        <div class="form-group" style='width:50%'>
                                            <select name="zone_id" class="form-control chosen">
                                                <option value="All" @if( $zone_id == 'All' ) selected @endif >All Zone</option>
                                                @foreach( $zones as $zone )
                                                <option value="{{ $zone->id }}" @if( $zone_id == $zone->id ) selected @endif>{{ $zone->name }}</option>
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
                                    {{--<tbody>
                                    @forelse( $areas as $key => $area )
                                    <tr>
                                        <td>{{ $key + 1 }}</td>
                                        <td>{{ $area->name }}</td>
                                        <td>
                                            @if( $area->is_active == true )
                                            <span class="badge badge-success">Active</span>
                                            @else
                                            <span class="badge badge-danger">Inactive</span>
                                            @endif
                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                    @empty
                                    <tr>
                                        <td colspan="4" class="text-center">No data found</td>
                                    </tr>
                                    @endforelse
                                </tbody> --}}
                            </table>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </section>

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
    $(function () {
        $('.area-datatable').DataTable({
            processing: true,
            serverSide: true,
            ajax: "{{ route('area.data',$zone_id) }}",
            order: [
                [0, 'Desc']
            ],
            columns: [
                { 
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