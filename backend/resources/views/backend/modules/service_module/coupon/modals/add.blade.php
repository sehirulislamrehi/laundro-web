<div class="modal-header">
     <h5 class="modal-title" id="exampleModalLabel">Add New Coupon</h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
     </button>
</div>

<div class="modal-body">
     <form class="ajax-form" method="post" action="{{ route('coupon.add') }}">
          @csrf

          <div class="row">

               <!-- Code -->
               <div class="col-md-12 col-12 form-group">
                    <label>Code</label><span class="require-span">*</span>
                    <input type="text" class="form-control" name="code">
               </div>

               <!-- Expiry Date -->
               <div class="col-md-12 col-12 form-group">
                    <label>Expiry Date</label><span class="require-span">*</span>
                    <input type="date" class="form-control" name="expiry_date" id="txtDate">
               </div>

               <!-- Type -->
               <div class="col-md-12 col-12 form-group">
                    <label>Type</label><span class="require-span">*</span>
                    <select name="type" class="form-control" id="type-onchange">
                         <option value="Cash">Fixed Amount</option>
                         <option value="Percentage">Percentage</option>
                    </select>
               </div>

               <!-- Amount -->
               <div class="col-md-12 col-12 form-group">
                    <label id="change-label">Amount</label><span class="require-span">*</span>
                    <input type="number" class="form-control" name="amount">
               </div>

               <div class="col-md-12 form-group text-right">
                    <button type="submit" class="btn btn-outline-dark">
                         Add
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