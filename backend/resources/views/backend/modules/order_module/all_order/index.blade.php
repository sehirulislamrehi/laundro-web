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
               <a class="breadcrumb-item active" href="#">All Order</a>
          </nav>
     </div>

     <div class="br-pagebody">
          <div class="row">
               <div class="col-md-12">
                    <div class="card card-primary card-outline table-responsive">
                         <div class="card-header text-right">
                              <div class="row">
                                   <div class="col-md-12">
                                        <form action="{{ route('order.all') }}" method="get">
                                             @csrf
                                             <div class="row">
                                                  <div class="form-group col-md-2 col-10">
                                                       <input type="search" class="form-control"  name="search" @if( isset($search) ) value="{{ $search }}" @else placeholder="Search order no." @endif>
                                                  </div>
                                                  <div class="form-group col-md-2 col-10">
                                                       <select name="order_status" class="form-control">
                                                            <option selected disabled>Order Status</option>
                                                            <option value="All" @if( $order_status == "All" ) selected @endif >All</option>
                                                            <option value="Pending" @if( $order_status == "Pending" ) selected @endif >Pending</option>
                                                            <option value="Confirmed" @if( $order_status == "Confirmed" ) selected @endif >Confirmed</option>
                                                            <option value="Assigned" @if( $order_status == "Assigned" ) selected @endif >Assigned</option>
                                                            <option value="OnProcess" @if( $order_status == "OnProcess" ) selected @endif >OnProcess</option>
                                                            <option value="Delivered" @if( $order_status == "Delivered" ) selected @endif >Delivered</option>
                                                            <option value="Cancelled" @if( $order_status == "Cancelled" ) selected @endif >Cancelled</option>
                                                       </select>
                                                  </div>
                                                  <div class="form-group col-md-2 col-10">
                                                       <select name="payment_status" class="form-control">
                                                            <option selected disabled>Payment Status</option>
                                                            <option value="All" @if( $payment_status == "All" ) selected @endif>All</option>
                                                            <option value="Pending" @if( $payment_status == "Pending" ) selected @endif>Pending</option>
                                                            <option value="Success" @if( $payment_status == "Success" ) selected @endif>Success</option>
                                                            <option value="Cancelled" @if( $payment_status == "Cancelled" ) selected @endif>Cancelled</option>
                                                       </select>
                                                  </div>
                                                  <div class="form-group col-md-2 col-10">
                                                       <select name="payment_method" class="form-control">
                                                            <option selected disabled>Payment Method</option>
                                                            <option value="All" @if( $payment_method == "All" ) selected @endif>All</option>
                                                            <option value="Online" @if( $payment_method == "Online" ) selected @endif>Online</option>
                                                            <option value="Cash" @if( $payment_method == "Cash" ) selected @endif>Cash</option>
                                                       </select>
                                                  </div>
                                                  <div class="form-group col-md-1 col-2">
                                                       <button type="submit" class="btn btn-success">
                                                            <i class="fas fa-search"></i>
                                                       </button>
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
                                             <th>ID</th>
                                             <th>Order No</th>
                                             <th>Timing</th>
                                             <th>Order Status</th>
                                             <th>Payment Status</th>
                                             <th>Total</th>
                                             <th>Action</th>
                                        </tr>
                                   </thead>
                                   <tbody>
                                        @forelse( $orders as $key => $order )
                                        <tr>
                                             <td>{{ $key + 1 }}</td>
                                             <td>{{ $order->order_no }}</td>
                                             <td>
                                                  @php
                                                       $timing = json_decode($order->timing);
                                                  @endphp
                                                  <p>
                                                       <strong>Collection : </strong>
                                                       {{ $timing->day_for_collection }}, {{ $timing->time_for_collection }}
                                                  </p>
                                                  <p>
                                                       <strong>Delivery : </strong>
                                                       {{ $timing->day_for_delivery }}, {{ $timing->time_for_delivery }}
                                                  </p>
                                             </td>
                                             <td>
                                                  {{ $order->order_status }}
                                             </td>
                                             <td>
                                                  {{ $order->payment_status }}
                                             </td>
                                             <td>
                                                  {{ $order->total }} BDT
                                             </td>
                                             <td>
                                                  <div class="dropdown">
                                                       <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown-{{ $order->id }}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            Action
                                                       </button>
                                                       <div class="dropdown-menu" aria-labelledby="dropdown-{{ $order->id }}">

                                                            @if( can("edit_order") )
                                                            <a class="dropdown-item" href="#" data-content="{{ route('order.edit.modal', encrypt($order->id)) }}" data-target="#largeModal" class="btn btn-outline-dark" data-toggle="modal">
                                                                 <i class="fas fa-edit"></i>
                                                                 Edit
                                                            </a>
                                                            @endif

                                                            @if( can("view_order_details") )
                                                            <a class="dropdown-item" href="#" data-content="{{ route('order.view.modal', encrypt($order->id)) }}" data-target="#largeModal" class="btn btn-outline-dark" data-toggle="modal">
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
                                        {{ $orders->links() }}
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