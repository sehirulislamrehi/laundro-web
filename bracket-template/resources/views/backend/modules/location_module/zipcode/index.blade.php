@extends("backend.template.layout")

@section('per_page_css')
<link href="{{ asset('backend/css/datatable/jquery.dataTables.min.css') }}" rel="stylesheet">
<link href="{{ asset('backend/css/datatable/dataTables.bootstrap4.min.css') }}" rel="stylesheet">

@endsection

@section('body-content')
<div class="br-mainpanel">
     <div class="br-pageheader">
          <nav class="breadcrumb pd-0 mg-0 tx-12">
               <a class="breadcrumb-item" href="{{ route('dashboard') }}">Dashboard</a>
               <a class="breadcrumb-item active" href="#">All Zipcode</a>
          </nav>
     </div>

     <div class="br-pagebody">
          <div class="row">
               <div class="col-md-12">
                    <div class="card card-primary card-outline table-responsive">
                         <div class="card-header text-right">
                              @if( can('add_zip_code') )
                              <button type="button" data-content="{{ route('zip_code.add.modal') }}" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                                   Add
                              </button>
                              @endif
                         </div>

                         <div class="card-body">
                              <table class="table table-bordered table-striped dataTable dtr-inline yajra-datatable" id="datatable">
                                   <thead>
                                        <tr>
                                             <th>ID</th>
                                             <th>Code</th>
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
          $('.yajra-datatable').DataTable({
               processing: true,
               serverSide: true,
               ajax: "{{ route('zip_code.data') }}",
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
                         data: 'code',
                         name: 'code'
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
@endsection