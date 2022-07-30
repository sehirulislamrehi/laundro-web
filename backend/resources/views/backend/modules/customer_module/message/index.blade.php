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
               <a class="breadcrumb-item active" href="#">All Message</a>
          </nav>
     </div>

     <div class="br-pagebody">
          <div class="row">
               <div class="col-md-12">
                    <div class="card card-primary card-outline table-responsive">
                         <div class="card-header text-right">

                              <div class="card-body">
                                   <form action="{{ route('message.delete') }}" method="get">
                                        @csrf
                                        <table class="table table-bordered table-striped dtr-inline text-left">
                                             <thead>
                                                  <tr>
                                                       @if( can("delete_message") )
                                                       <th>
                                                            <input type="checkbox" name="checkall" onclick="checkAll(this)">
                                                       </th>
                                                       @endif

                                                       <th>Name</th>
                                                       <th>Email</th>
                                                       <th>Phone</th>
                                                       <th>Subject</th>
                                                       <th>Action</th>
                                                  </tr>
                                             </thead>
                                             <tbody>
                                                  @forelse( $contact_forms as $key => $contact_form )
                                                  <tr>
                                                       @if( can("delete_message") )
                                                       <td>
                                                            <input type="checkbox" class="contact_form_ids" value="{{ $contact_form->id }}" name="contact_form_ids[]">
                                                       </td>
                                                       @endif
                                                       
                                                       <td>{{ $contact_form->name }}</td>
                                                       <td>{{ $contact_form->email }}</td>
                                                       <td>{{ $contact_form->phone }}</td>
                                                       <td>{{ Str::limit($contact_form->subject,20) }}</td>
                                                       <td>
                                                            <div class="dropdown">
                                                                 <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown-{{ $contact_form->id }}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                      Action
                                                                 </button>
                                                                 <div class="dropdown-menu" aria-labelledby="dropdown-{{ $contact_form->id }}">

                                                                      @if( can("all_message") )
                                                                      <a class="dropdown-item" href="#" data-content="{{ route('message.view.modal', encrypt($contact_form->id)) }}" data-target="#myModal" class="btn btn-outline-dark" data-toggle="modal">
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
                                                  {{ $contact_forms->links() }}
                                             </tfoot>
                                        </table>

                                        @if( can("delete_message") )
                                        <button type="submit" class="btn btn-success btn-sm text-left d-flex">
                                             Delete Selected
                                        </button>
                                        @endif

                                   </form>

                                   @if( can("delete_message") )
                                   <form action="{{ route('message.delete.all') }}" method="get">
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

               let contact_form_ids = document.getElementsByClassName("contact_form_ids")
               
               if( e.checked == true ){
                    for( let i = 0 ; i < contact_form_ids.length ; i++ ){
                         contact_form_ids[i].checked = true;
                    }
               }
               else{
                    for( let i = 0 ; i < contact_form_ids.length ; i++ ){
                         contact_form_ids[i].checked = false;
                    }
               }

          }
     </script>
     @endsection