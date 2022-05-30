<div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel">{{ $coupon->code }}</h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
     </button>
</div>

<div class="modal-body">
     <form class="ajax-form" method="post" action="{{ route('coupon.edit',encrypt($coupon->id)) }}">
          @csrf

          <div class="row">

               <!-- Code -->
               <div class="col-md-12 col-12 form-group">
                    <label>Code</label><span class="require-span">*</span>
                    <input type="text" class="form-control" name="code" value="{{ $coupon->code }}">
               </div>

               <!-- Expiry Date -->
               <div class="col-md-12 col-12 form-group">
                    <label>Expiry Date</label><span class="require-span">*</span>
                    <input type="date" class="form-control" name="expiry_date" id="txtDate" value="{{ $coupon->expiry_date }}">
               </div>

               <!-- Type -->
               <div class="col-md-12 col-12 form-group">
                    <label>Type</label><span class="require-span">*</span>
                    <select name="type" class="form-control" id="type-onchange">
                         <option value="Cash" @if( $coupon->type == "Cash" ) selected @endif >Fixed Amount</option>
                         <option value="Percentage" @if( $coupon->type == "Percentage" ) selected @endif >Percentage</option>
                    </select>
               </div>

               <!-- Amount -->
               <div class="col-md-12 col-12 form-group">
                    <label id="change-label">
                         @if( $coupon->type == "Cash" )
                              Fixed Amount
                         @else
                              Percentage
                         @endif
                    </label><span class="require-span">*</span>
                    <input type="number" class="form-control" name="amount" value="{{ $coupon->amount }}">
               </div>

               <!-- Status -->
               <div class="col-md-12 col-12 form-group">
                    <label>Status</label><span class="require-span">*</span>
                    <select name="is_active" class="form-control">
                         <option value="1" @if( $coupon->is_active == true ) selected @endif >Active</option>
                         <option value="0" @if( $coupon->is_active == false ) selected @endif >Inactive</option>
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


<script>
     $(document).ready(function(){
          var dtToday = new Date();
    
          var month = dtToday.getMonth() + 1;
          var day = dtToday.getDate() + 1;
          var year = dtToday.getFullYear();
          if(month < 10)
               month = '0' + month.toString();
          if(day < 10)
               day = '0' + day.toString();
          
          var maxDate = year + '-' + month + '-' + day;

          // or instead:
          // var maxDate = dtToday.toISOString().substr(0, 10);

          $('#txtDate').attr('min', maxDate);
     })

     $(document).on('change','#type-onchange',function(){
          let $this = $(this)
          let value = $("#type-onchange option:selected").val()
          
          if( value == 'Percentage' ){
               $("#change-label").html('Percentage')
          }
          else{
               $("#change-label").html('Amount')
          }
     });
</script>