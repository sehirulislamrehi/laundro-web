<div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel">Edit Order No : {{ $order->order_no }}</h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
     </button>
</div>

<div class="modal-body">
     <form action="{{ route('order.edit', encrypt($order->id)) }}" method="post" class="ajax-form"> 
          @csrf
          <div class="row">
               <!-- Order Status start -->
               <div class="col-md-4 form-group">
                    <label>Order Status</label>
                    <select name="order_status" class="form-control">
                         <option value="Pending" @if( $order->order_status == "Pending" ) selected @endif >Pending</option>
                         <option value="Confirmed" @if( $order->order_status == "Confirmed" ) selected @endif >Confirmed</option>
                         <option value="Assigned" @if( $order->order_status == "Assigned" ) selected @endif >Assigned</option>
                         <option value="OnProcess" @if( $order->order_status == "OnProcess" ) selected @endif >OnProcess</option>
                         <option value="Delivered" @if( $order->order_status == "Delivered" ) selected @endif >Delivered</option>
                         <option value="Cancelled" @if( $order->order_status == "Cancelled" ) selected @endif >Cancelled</option>
                    </select>
               </div>
               <!-- Order Status end -->

               <!-- Payment Method start -->
               <div class="col-md-4 form-group">
                    <label>Payment Method</label>
                    <select name="payment_method" class="form-control">
                         <option value="Online" @if( $order->payment_method == "Online" ) selected @endif >Online</option>
                         <option value="Cash" @if( $order->payment_method == "Cash" ) selected @endif >Cash</option>
                    </select>
               </div>
               <!-- Payment Method end -->

               <!-- Payment Status start -->
               <div class="col-md-4 form-group">
                    <label>Payment Status</label>
                    <select name="payment_status" class="form-control">
                         <option value="Pending" @if( $order->payment_status == "Pending" ) selected @endif>Pending</option>
                         <option value="Success" @if( $order->payment_status == "Success" ) selected @endif>Success</option>
                         <option value="Cancelled" @if( $order->payment_status == "Cancelled" ) selected @endif>Cancelled</option>
                    </select>
               </div>
               <!-- Payment Status end -->

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