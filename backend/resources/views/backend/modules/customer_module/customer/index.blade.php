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
               <a class="breadcrumb-item active" href="#">All Customer</a>
          </nav>
     </div>

     <div class="br-pagebody">
          <div class="row">
               <div class="col-md-12">
                    <div class="card card-primary card-outline table-responsive">
                         <div class="card-header text-right">
                         <div class="row">
                                   <div class="col-md-12">
                                        <form action="{{ route('customer.all') }}" method="get">
                                             @csrf
                                             <div class="row">
                                                  <div class="form-group col-md-2 col-2">
                                                       <input type="search" class="form-control"  name="search" @if( isset($search) ) value="{{ $search }}" @else placeholder="Search customer." @endif>
                                                  </div>
                                                  <div class="form-group col-md-2 col-2 text-right">
                                                       <button type="submit" class="btn btn-success" name="button" value="search" >
                                                            <i class="fas fa-search"></i>
                                                       </button> 
                                                       <a href="{{ route('customer.all') }}" class="btn btn-danger">
                                                            <i class="fas fa-redo"></i>
                                                       </a>
                                                  </div>
                                             </div>
                                        </form>
                                   </div>
                              </div>
                         </div>

                         <div class="card-body">

                              <table class="table table-bordered table-striped dtr-inline">
                                   <thead>
                                        <tr>
                                             <th>SI.</th>
                                             <th>Name</th>
                                             <th>Email</th>
                                             <th>Phone</th>
                                             <th>Status</th>
                                             <th>Verified</th>
                                             <th>Action</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        @forelse( $customers as $key => $customer )
                                        <tr>
                                             <td>{{ $key + 1 }}</td>
                                             <td>{{ $customer->name }}</td>
                                             <td>{{ $customer->email ?? "N/A" }}</td>
                                             <td>{{ $customer->phone }}</td>
                                             <td>
                                                  @if( $customer->is_active == true )
                                                       <span class="badge badge-success">
                                                            Active
                                                       </span>
                                                  @else
                                                       <span class="badge badge-danger">
                                                            Inactive
                                                       </span>
                                                  @endif
                                             </td>
                                             <td>
                                                  @if( $customer->is_verified == true )
                                                       <span class="badge badge-success">
                                                            Verified
                                                       </span>
                                                  @else
                                                       <span class="badge badge-danger">
                                                            Not Verified
                                                       </span>
                                                  @endif
                                             </td>
                                             <td>
                                                  <div class="dropdown">
                                                       <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown-{{ $customer->id }}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Action
                                                       </button>
                                                       <div class="dropdown-menu" aria-labelledby="dropdown-{{ $customer->id }}">

                                                            @if( can("edit_customer") )
                                                            <a class="dropdown-item" href="#" data-content="{{ route('customer.edit.modal', encrypt($customer->id)) }}" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                                                                 <i class="fas fa-edit"></i>
                                                                 Edit
                                                            </a>
                                                            @endif

                                                            @if( can("all_customer") )
                                                            <a class="dropdown-item" href="#" data-content="{{ route('customer.view.modal', encrypt($customer->id)) }}" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
                                                                 <i class="fas fa-eye"></i>
                                                                 View
                                                            </a>
                                                            @endif

                                                       </div>
                                                  </div>
                                             </td>
                                        </tr>
                                        @empty
                                        <tr>
                                             <td colspan="8" class="text-center">No data found</td>
                                        </tr>
                                        @endforelse
                                   </tbody>
                                   <tfoot>
                                        {{ $customers->links() }}
                                   </tfoot>
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
<script src="{{  asset('backend/js/ajax_form_submit.js') }}"></script>
@endsection