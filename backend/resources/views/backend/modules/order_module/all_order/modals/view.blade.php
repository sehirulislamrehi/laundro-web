<div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel"> {{ $order->order_no }}</h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
     </button>
</div>

<div class="modal-body">
     <div class="row">
          <div class="col-md-12">
               <table className="table table-bordered" style="width: 100%;">
                    <tbody>
                         <tr>
                              <th colspan="4" class="text-center">Order information</th>
                         </tr>
                         <tr>
                              <th>Order No</th>
                              <td>{{ $order->order_no }}</td>
                              <th>Order Status</th>
                              <td>{{ $order->order_status }}</td>
                         </tr>
                         <tr>
                              <th>Payment Status</th>
                              <td>{{ $order->payment_status }}</td>
                              <th>Payment Method</th>
                              <td>{{ $order->payment_method }}</td>
                         </tr>
                         @php
                              $timing = json_decode($order->timing);
                         @endphp
                         <tr>
                              <th>Day for collection</th>
                              <td>{{ $timing->day_for_collection }}</td>
                              <th>Time for collection</th>
                              <td>{{ $timing->time_for_collection}}</td>
                         </tr>
                         <tr>
                              <th colspan="2">Instruction for collection</th>
                              <td colspan="2">{{ $timing->instructions_for_collection }}</td>
                         </tr>
                         <tr>
                              <th>Day for Delivery</th>
                              <td>{{ $timing->day_for_delivery }}</td>
                              <th>Time for Delivery</th>
                              <td>{{ $timing->time_for_delivery}}</td>
                         </tr>
                         <tr>
                              <th colspan="2">Instruction for Delivery</th>
                              <td colspan="2">{{ $timing->instructions_for_delivery }}</td>
                         </tr>
                         <tr>
                              <th colspan="2">Other Instructions</th>
                              <td colspan="2">{{ $timing->others_instruction }}</td>
                         </tr>
                         <tr>
                              <th rowspan="{{ count($order_services) }}" style="vertical-align:middle; text-align:center">Services</th>
                              
                              @foreach( $order_services as $key => $order_service )
                                   @if( $key == 0 )
                                   <td colspan="3">
                                        <strong style="margin-right: 5px;">{{ $order_service->service->name }}</strong>
                                        ( {{ $order_service->instruction ? $order_service->instruction : 'No instructions' }} )
                                        ( {{ $order_service->price }} BDT )
                                   </td> 
                                   @endif
                              @endforeach
                         </tr>
                         @foreach( $order_services as $key => $order_service )
                              @if( $key != 0 )
                              <td colspan="3">
                                   <strong style="margin-right: 5px;">{{ $order_service->service->name }}</strong>
                                   ( {{ $order_service->instruction ? $order_service->instruction : 'No instructions' }} )
                                   ( {{ $order_service->price }} BDT )
                              </td> 
                              @endif
                         @endforeach
                         <tr>
                              <th colspan="2">Order Total</th>
                              <td colspan="2">{{ $order->total }} BDT</td>
                         </tr>


                         <!-- customer information -->
                         <tr>
                              <th colspan="4"  class="text-center">Customer information</th>
                         </tr>
                         <tr>
                              <th>Name</th>
                              <td>{{ $order->name}}</td>
                              <th>Email</th>
                              <td>{{$order->email}}</td>
                         </tr>
                         <tr>
                              <th>Phone</th>
                              <td>{{$order->phone}}</td>
                              <th>Postal Code</th>
                              <td>{{$order->postal_code}}</td>
                         </tr>
                         <tr>
                              <th>Area</th>
                              <td>{{$order->location}}</td>
                              <th>Address Type</th>
                              <td>{{$order->address_type}}</td>
                         </tr>
                         <tr>
                              <th colspan="2">Address Details</th>
                              <td colspan="2">{{$order->address_details}}</td>
                         </tr>

                    </tbody>
               </table>
          </div>
     </div>
</div>
<div class="modal-footer">
     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
</div>