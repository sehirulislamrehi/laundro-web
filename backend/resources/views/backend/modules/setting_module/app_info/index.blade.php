@extends("backend.template.layout")

@section('per_page_css')
<link rel="stylesheet" href="{{ asset('backend/css/dropify.min.css') }}">
@endsection

@section('body-content')
<div class="br-mainpanel">
    <div class="br-pageheader">
        <nav class="breadcrumb pd-0 mg-0 tx-12">
            <a class="breadcrumb-item" href="{{ route('dashboard') }}">Dashboard</a>
            <a class="breadcrumb-item active" href="#">Company Information</a>
        </nav>
    </div>

    <div class="br-pagebody">
        <div class="row">
            <div class="col-md-12">
                <div class="card card-primary card-outline">
                    <div class="card-header">
                        <h6 class="card-title">
                            <i class="fas fa-edit"></i>
                            Update Company Information
                        </h6>
                    </div>
                    <div class="card-body">
                        <form action="{{ route('app.info.update', $app_info->id) }}" method="post" class="ajax-form" enctype="multipart/form-data">
                            @csrf
                            <div class="row">
                                <div class="col-5 col-sm-3">
                                    <div class="nav flex-column nav-tabs h-100" id="vert-tabs-tab" role="tablist" aria-orientation="vertical">

                                        <a class="nav-link active" id="vert-tabs-home-tab" data-toggle="pill" href="#tab-one" role="tab" aria-controls="vert-tabs-home" aria-selected="true">
                                            Logo & Fav
                                        </a>

                                        <a class="nav-link" id="vert-tabs-home-tab" data-toggle="pill" href="#tab-two" role="tab" aria-controls="vert-tabs-home" aria-selected="true">
                                            Company Information
                                        </a>

                                        <a class="nav-link" id="vert-tabs-home-tab" data-toggle="pill" href="#tab-three" role="tab" aria-controls="vert-tabs-home" aria-selected="true">
                                            About Us Information
                                        </a>

                                        <a class="nav-link" id="vert-tabs-home-tab" data-toggle="pill" href="#tab-four" role="tab" aria-controls="vert-tabs-home" aria-selected="true">
                                            Counting section
                                        </a>

                                    </div>
                                </div>
                                <div class="col-7 col-sm-9">

                                    <div class="tab-content" id="vert-tabs-tabContent">

                                        <!-- ITEM START -->
                                        <div class="tab-pane text-left fade active show" id="tab-one" role="tabpanel" aria-labelledby="vert-tabs-home-tab">
                                            <div class="row">

                                                <!-- logo -->
                                                <div class="col-md-6 form-group">
                                                    <div class="dropify-wrapper">
                                                        <div class="dropify-message"><span class="file-icon"></span>
                                                            <p>
                                                                Logo ( 175x85 )
                                                            </p>
                                                            <p class="dropify-error">Ooops,
                                                                something wrong appended.</p>
                                                        </div>
                                                        <div class="dropify-loader" style="display: none;"></div>
                                                        <div class="dropify-errors-container">
                                                            <ul></ul>
                                                        </div>
                                                        <input type="file" id="input-file-now" class="dropify" name="logo" data-default-file="">
                                                        <img src="{{ asset('images/info/'. $app_info->logo) }}" style="width: 100px; margin-top: 10px" alt="">
                                                        <button type="button" class="dropify-clear">Remove</button>
                                                        <div class="dropify-preview" style="display: none;"><span class="dropify-render"></span>
                                                            <div class="dropify-infos">
                                                                <div class="dropify-infos-inner">
                                                                    <p class="dropify-filename">
                                                                        <span class="file-icon"></span>
                                                                        <span class="dropify-filename-inner">1618054231jLxKfola9cDg.jpg</span>
                                                                    </p>
                                                                    <p class="dropify-infos-message">
                                                                        Drag and drop or click to
                                                                        replace</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <!-- Fav -->
                                                <div class="col-md-6 form-group">
                                                    <div class="dropify-wrapper">
                                                        <div class="dropify-message"><span class="file-icon"></span>
                                                            <p>
                                                                Fav Icon ( 32x32 )
                                                            </p>
                                                            <p class="dropify-error">Ooops,
                                                                something wrong appended.</p>
                                                        </div>
                                                        <div class="dropify-loader" style="display: none;"></div>
                                                        <div class="dropify-errors-container">
                                                            <ul></ul>
                                                        </div>
                                                        <input type="file" id="input-file-now" class="dropify" name="fav" data-default-file="">
                                                        <img src="{{ asset('images/info/'. $app_info->fav) }}" style="width: 32px; margin-top: 10px" alt="">
                                                        <button type="button" class="dropify-clear">Remove</button>
                                                        <div class="dropify-preview" style="display: none;"><span class="dropify-render"></span>
                                                            <div class="dropify-infos">
                                                                <div class="dropify-infos-inner">
                                                                    <p class="dropify-filename">
                                                                        <span class="file-icon"></span>
                                                                        <span class="dropify-filename-inner">1618054231jLxKfola9cDg.jpg</span>
                                                                    </p>
                                                                    <p class="dropify-infos-message">
                                                                        Drag and drop or click to
                                                                        replace</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <!-- ITEM END -->

                                        <!-- ITEM START -->
                                        <div class="tab-pane text-left fade" id="tab-two" role="tabpanel" aria-labelledby="vert-tabs-home-tab">
                                            <div class="row">

                                                <!-- mail from address -->
                                                <div class="col-md-4 form-group">
                                                    <label>Mail from address</label>
                                                    <input type="email" class="form-control" name="mail_from_address" value="{{ $app_info->mail_from_address }}">
                                                </div>

                                                <!-- Email -->
                                                <div class="col-md-4 form-group">
                                                    <label>Email</label>
                                                    <input type="email" class="form-control" name="email" value="{{ $app_info->email }}">
                                                </div>

                                                <!-- Phone -->
                                                <div class="col-md-4 form-group">
                                                    <label>Phone</label>
                                                    <input type="text" class="form-control" name="phone" value="{{ $app_info->phone }}">
                                                </div>

                                                <!-- Address -->
                                                <div class="col-md-4 form-group">
                                                    <label>Address</label>
                                                    <input type="text" class="form-control" name="address" value="{{ $app_info->address }}">
                                                </div>

                                                <!-- City -->
                                                <div class="col-md-4 form-group">
                                                    <label>City</label>
                                                    <input type="text" class="form-control" name="city" value="{{ $app_info->city }}">
                                                </div>

                                                <!-- country -->
                                                <div class="col-md-4 form-group">
                                                    <label>Country</label>
                                                    <input type="text" class="form-control" name="country" value="{{ $app_info->country }}">
                                                </div>

                                                <!-- day -->
                                                <div class="col-md-4 form-group">
                                                    <label>Day</label>
                                                    <input type="text" class="form-control" name="day" value="{{ $app_info->day }}">
                                                </div>

                                                <!-- timing -->
                                                <div class="col-md-4 form-group">
                                                    <label>Timing</label>
                                                    <input type="text" class="form-control" name="timing" value="{{ $app_info->timing }}">
                                                </div>

                                                <!-- facebook_link -->
                                                <div class="col-md-4 form-group">
                                                    <label>Facebook link</label>
                                                    <input type="text" class="form-control" name="facebook_link" value="{{ $app_info->facebook_link }}">
                                                </div>

                                                <!-- youtube_link -->
                                                <div class="col-md-4 form-group">
                                                    <label>Youtube link</label>
                                                    <input type="text" class="form-control" name="youtube_link" value="{{ $app_info->youtube_link }}">
                                                </div>

                                                <!-- twitter_link -->
                                                <div class="col-md-4 form-group">
                                                    <label>Twitter link</label>
                                                    <input type="text" class="form-control" name="twitter_link" value="{{ $app_info->twitter_link }}">
                                                </div>

                                                <!-- linkedin_link -->
                                                <div class="col-md-4 form-group">
                                                    <label>Linkedin link</label>
                                                    <input type="text" class="form-control" name="linkedin_link" value="{{ $app_info->linkedin_link }}">
                                                </div>

                                            </div>
                                        </div>
                                        <!-- ITEM END -->

                                        <!-- ITEM START -->
                                        <div class="tab-pane text-left fade" id="tab-three" role="tabpanel" aria-labelledby="vert-tabs-home-tab">
                                            <div class="row">

                                                <!-- about_large_image -->
                                                <div class="col-md-4 col-12 form-group">
                                                    <label for="image" class="text-capitalize">About large image ( 455x670 px )</label><span class="require-span">*</span>
                                                    <img src="{{ asset('images/info/'. $app_info->about_large_image) }}" class="mt-2 mb-2" width="100px">
                                                    <input type="file" class="form-control-file" onchange="filePreview(this)" name="about_large_image">
                                                </div>

                                                <!-- about_left_image -->
                                                <div class="col-md-4 col-12 form-group">
                                                    <label for="image" class="text-capitalize">About left image ( 194x194 px )</label><span class="require-span">*</span>
                                                    <img src="{{ asset('images/info/'. $app_info->about_left_image) }}" class="mt-2 mb-2" width="100px">
                                                    <input type="file" class="form-control-file" onchange="filePreview(this)" name="about_left_image">
                                                </div>

                                                <!-- about_right_image -->
                                                <div class="col-md-4 col-12 form-group">
                                                    <label for="image" class="text-capitalize">About right image ( 194x194 px )</label><span class="require-span">*</span>
                                                    <img src="{{ asset('images/info/'. $app_info->about_right_image) }}" class="mt-2 mb-2" width="100px">
                                                    <input type="file" class="form-control-file" onchange="filePreview(this)" name="about_right_image">
                                                </div>

                                                <!-- about_title_one -->
                                                <div class="col-md-4 col-12 form-group">
                                                    <label class="text-capitalize">About title one</label><span class="require-span">*</span>
                                                    <input type="text" class="form-control"  name="about_title_one" value="{{ $app_info->about_title_one }}">
                                                </div>

                                                <!-- about_title_two -->
                                                <div class="col-md-4 col-12 form-group">
                                                    <label class="text-capitalize">About title two</label><span class="require-span">*</span>
                                                    <input type="text" class="form-control"  name="about_title_two" value="{{ $app_info->about_title_two }}">
                                                </div>

                                                <!-- about_title_three -->
                                                <div class="col-md-4 col-12 form-group">
                                                    <label class="text-capitalize">About title three</label><span class="require-span">*</span>
                                                    <input type="text" class="form-control"  name="about_title_three" value="{{ $app_info->about_title_three }}">
                                                </div>

                                                <!-- about_point_one -->
                                                <div class="col-md-4 col-12 form-group">
                                                    <label class="text-capitalize">About point one</label><span class="require-span">*</span>
                                                    <input type="text" class="form-control"  name="about_point_one" value="{{ $app_info->about_point_one }}">
                                                </div>

                                                <!-- about_point_two -->
                                                <div class="col-md-4 col-12 form-group">
                                                    <label class="text-capitalize">About point two</label><span class="require-span">*</span>
                                                    <input type="text" class="form-control"  name="about_point_two" value="{{ $app_info->about_point_two }}">
                                                </div>

                                                <!-- about_point_three -->
                                                <div class="col-md-4 col-12 form-group">
                                                    <label class="text-capitalize">About point three</label><span class="require-span">*</span>
                                                    <input type="text" class="form-control"  name="about_point_three" value="{{ $app_info->about_point_three }}">
                                                </div>

                                                <!-- about_point_four -->
                                                <div class="col-md-4 col-12 form-group">
                                                    <label class="text-capitalize">About point four</label><span class="require-span">*</span>
                                                    <input type="text" class="form-control"  name="about_point_four" value="{{ $app_info->about_point_four }}">
                                                </div>

                                            </div>
                                        </div>
                                        <!-- ITEM END -->

                                        <!-- ITEM START -->
                                        <div class="tab-pane text-left fade" id="tab-four" role="tabpanel" aria-labelledby="vert-tabs-home-tab">
                                            <div class="row">

                                                <!-- count_one -->
                                                <div class="col-md-4 col-12 form-group">
                                                    <label class="text-capitalize">Count One</label><span class="require-span">*</span>
                                                    <input type="text" class="form-control"  name="count_one" value="{{ $app_info->count_one }}">
                                                </div>

                                                <!-- count_two -->
                                                <div class="col-md-4 col-12 form-group">
                                                    <label class="text-capitalize">Count two</label><span class="require-span">*</span>
                                                    <input type="text" class="form-control"  name="count_two" value="{{ $app_info->count_two }}">
                                                </div>

                                                <!-- count_three -->
                                                <div class="col-md-4 col-12 form-group">
                                                    <label class="text-capitalize">Count three</label><span class="require-span">*</span>
                                                    <input type="text" class="form-control"  name="count_three" value="{{ $app_info->count_three }}">
                                                </div>

                                                <!-- count_four -->
                                                <div class="col-md-4 col-12 form-group">
                                                    <label class="text-capitalize">Count one</label><span class="require-span">*</span>
                                                    <input type="text" class="form-control"  name="count_four" value="{{ $app_info->count_four }}">
                                                </div>

                                            </div>
                                        </div>
                                        <!-- ITEM END -->

                                    </div>

                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 form-group text-right">
                                    <button type="submit" class="btn btn-outline-dark">
                                        Update Information
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- /.card -->
                </div>
            </div>
        </div>
    </div>
</div>

@endsection

@section('per_page_js')
<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

<script src="{{ asset('backend/js/dropify.min.js') }}"></script>
<script src="{{ asset('backend/js/form-file-uploads.min.js') }}"></script>
<script src="{{  asset('backend/js/ajax_form_submit.js') }}"></script>
<script>
     const filePreview = (e) => {
          const file = e.files[0]
          e.previousElementSibling.src = URL.createObjectURL(file)
     }
</script>
@endsection