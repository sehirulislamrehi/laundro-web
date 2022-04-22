<div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Edit City : {{ $emirate->name }}</h5>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>

<div class="modal-body">
    <form class="ajax-form" method="post" action="{{ route('emirate.update', $emirate->id) }}">
        @csrf

        <div class="row">

            <!-- name -->
            <div class="col-md-6 col-12 form-group">
                <label for="name">Name</label><span class="require-span">*</span>
                <input type="text" class="form-control" name="name" value="{{ $emirate->name }}" >
            </div>

            <!-- select role -->
            <div class="col-md-6 col-12 form-group">
            <label>Select status</label><span class="require-span">*</span>
                <select name="is_active" class="form-control">
                    <option value="1" {{ $emirate->is_active == 1 ? 'selected' : '' }}>Active</option>
                    <option value="0" {{ $emirate->is_active == 0 ? 'selected' : '' }}>Inactive</option>
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
