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
               <a class="breadcrumb-item active" href="#">All Subscriber</a>
          </nav>
     </div>

     <div class="br-pagebody">
          <div class="row">
               <div class="col-md-12">
                    <div class="card card-primary card-outline table-responsive">
                         <div class="card-header text-right">

                              <div class="card-body">
                                   <form action="{{ route('subscribers.delete') }}" method="get">
                                        @csrf
                                        <table class="table table-bordered table-striped dtr-inline text-left">
                                             <thead>
                                                  <tr>
                                                       @if( can("delete_subscribers") )
                                                       <th>
                                                            <input type="checkbox" name="checkall" onclick="checkAll(this)">
                                                       </th>
                                                       @endif

                                                       <th>Email</th>
                                                       <th>Time</th>
                                                  </tr>
                                             </thead>
                                             <tbody>
                                                  @forelse( $subscribers as $key => $subscriber )
                                                  <tr>
                                                       @if( can("delete_subscribers") )
                                                       <td>
                                                            <input type="checkbox" class="subscriber_ids" value="{{ $subscriber->id }}" name="subscriber_ids[]">
                                                       </td>
                                                       @endif
                                                       
                                                       <td>{{ $subscriber->email }}</td>
                                                       <td>{{ $subscriber->created_at->toDayDateTimeString() }}</td>
                                                  </tr>
                                                  @empty
                                                  <tr>
                                                       <td colspan="8" class="text-center">No data found</td>
                                                  </tr>
                                                  @endforelse
                                             </tbody>
                                             <tfoot>
                                                  {{ $subscribers->links() }}
                                             </tfoot>
                                        </table>

                                        @if( can("delete_subscribers") )
                                        <button type="submit" class="btn btn-success btn-sm text-left d-flex">
                                             Delete Selected
                                        </button>
                                        @endif

                                   </form>

                                   @if( can("delete_subscribers") )
                                   <form action="{{ route('subscribers.delete.all') }}" method="get">
                                        <button type="submit" class="btn btn-danger">
                                             Delete All
                                        </button>
                                   </form>
                                   @endif

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
     <script>
          function checkAll(e){

               let subscriber_ids = document.getElementsByClassName("subscriber_ids")
               
               if( e.checked == true ){
                    for( let i = 0 ; i < subscriber_ids.length ; i++ ){
                         subscriber_ids[i].checked = true;
                    }
               }
               else{
                    for( let i = 0 ; i < subscriber_ids.length ; i++ ){
                         subscriber_ids[i].checked = false;
                    }
               }

          }
     </script>
     @endsection