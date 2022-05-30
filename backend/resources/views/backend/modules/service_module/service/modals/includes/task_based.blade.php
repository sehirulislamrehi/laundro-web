<form class="ajax-form" method="post" action="{{ route('service.store.duration', $service->id) }}">
     @csrf

     <div class="row item-list mb-3">

          @forelse( $service->service_durations as $key => $service_duration )
               <div class="col-md-12 item-card">
                    <div class="row">
                         <div class="col-md-4 task-name">
                              <label>Task Name</label>
                              <input type="text" class="form-control" placeholder="Instruction" name="instructions[]" value="{{ $service_duration->instructions }}" required>
                         </div>
                         <div class="col-md-3">
                              <label>Price</label>
                              <input type="number" class="form-control" placeholder="Price" name="prices[]" min="1" value="{{ $service_duration->price }}" required>
                         </div>
                         <div class="col-md-3">
                              <label>Duration</label>
                              <select name="duration_ids[]" class="form-control">
                                   @foreach ( $durations as $duration)
                                   <option value="{{ $duration->id }}" @if( $duration->id == $service_duration->duration_id ) selected @endif >{{ $duration->duration }} {{ $duration->type }}</option>
                                   @endforeach
                              </select>
                         </div>
                         <div class="col-md-2 mt-4 item-action" >
                              <button type="button" class="btn btn-success btn-sm add-more-varient" >
                                   <i class="fas fa-plus"></i>
                              </button>
                              @if( $key != 0 )
                              <button type="button" class="btn btn-danger btn-sm remove-varient">
                                   <i class="fas fa-trash"></i>
                              </button>
                              @endif
                         </div>
                    </div>
                    <hr>
               </div>
          @empty
          <div class="col-md-12 item-card">
               <div class="row">
                    <div class="col-md-4 task-name">
                         <label>Task Name</label>
                         <input type="text" class="form-control" placeholder="Instruction" name="instructions[]" required >
                    </div>
                    <div class="col-md-3">
                         <label>Price</label>
                         <input type="number" class="form-control" placeholder="Price" name="prices[]" min="1" required>
                    </div>
                    <div class="col-md-3">
                         <label>Duration</label>
                         <select name="duration_ids[]" class="form-control">
                              @foreach ( $durations as $duration)
                              <option value="{{ $duration->id }}">{{ $duration->duration }} {{ $duration->type }}</option>
                              @endforeach
                         </select>
                    </div>
                    <div class="col-md-2 mt-4 item-action">
                         <button type="button" class="btn btn-success btn-sm add-more-varient">
                              <i class="fas fa-plus"></i>
                         </button>
                    </div>
               </div>
               <hr>
          </div>
          @endforelse

     </div>


     <div class="row">
          <div class="col-md-12 form-group text-right">
               <button type="submit" class="btn btn-outline-dark">
                    Update
               </button>
          </div>
     </div>
</form>