@extends("backend.template.layout")

@section('per_page_css')
<style>
    .small-box .inner h3{
        font-size: 18px;
    }
</style>
@endsection

@section('body-content')
<div class="content-wrapper" style="min-height: 147px;">

    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-left">
                        <li class="breadcrumb-item active">
                            @if( auth('web')->check() )
                            {{ auth('web')->user()->role->name }} Dashboard
                            @elseif( auth('super_admin')->check() )
                            Super Admin Dashboard
                            @endif
                        </li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">

            <!-- Small boxes (Stat box) -->
            <div class="row">

                <!-- ITEM START -->
                <div class="col-lg-3 col-6">
                    <div class="small-box" style="background: #ffd384;">
                        <div class="inner">
                            <h3>Zipcode</h3>
                            <p>{{ $zipcode }}</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-bag"></i>
                        </div>

                    </div>
                </div>
                <!-- ITEM END -->

                <!-- ITEM START -->
                <div class="col-lg-3 col-6">
                    <div class="small-box" style="background: #b6ff9e;">
                        <div class="inner">
                            <h3>City</h3>
                            <p>{{ $location->where("type",null)->count() }}</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-bag"></i>
                        </div>

                    </div>
                </div>
                <!-- ITEM END -->

                <!-- ITEM START -->
                <div class="col-lg-3 col-6">
                    <div class="small-box" style="background: #ff9292;">
                        <div class="inner">
                            <h3>Zone</h3>
                            <p>{{ $location->where("type","zone")->count() }}</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-bag"></i>
                        </div>

                    </div>
                </div>
                <!-- ITEM END -->

                <!-- ITEM START -->
                <div class="col-lg-3 col-6">
                    <div class="small-box" style="background: #d9a7ff;">
                        <div class="inner">
                            <h3>Area</h3>
                            <p>{{ $location->where("type","area")->count() }}</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-bag"></i>
                        </div>

                    </div>
                </div>
                <!-- ITEM END -->


            </div>
            <!-- /.row -->

            <div class="row charts" style="padding-right: 15px;">

                <div class="col-md-6 pr-2 mb-5" id="city-zone">
                    <p>Zones in Cities</p>
                </div>

                <div class="col-md-6 pr-2 mb-5" id="zone-area">
                    <p>Areas in Zone</p>
                </div>

                <div class="col-md-12 pr-2 mb-5" id="zipcode-area">
                    <p>Areas in zipcode</p>
                </div>

            </div>

        </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
</div>
@endsection

@section("per_page_js")
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>


    $.ajax({
        url: "{{ route('zipcode.area') }}",
        method: 'GET',
        data: {},
        success: function(data) {
            var code = Array();
            var area = Array();
            var zipcode_area = Array();
            $.each(data.data, (key, value) => {
                var obj = {
                    x : value.code,
                    y : value.area + " Area",
                }
                zipcode_area.push(obj)
            })


            var options = {
                series: [
                        {
                            data: zipcode_area
                        }
                ],
                legend: {
                    show: false
                },
                chart: {
                    height: 350,
                    type: 'treemap'
                },
            };

            var chart = new ApexCharts(document.querySelector("#zipcode-area"), options);
            chart.render();
        }
    })


    $.ajax({
        url: "{{ route('city.zone') }}",
        method: 'GET',
        data: {},
        success: function(data) {
            var city = Array();
            var zone = Array();
            $.each(data.data, (key, value) => {
                city.push(value.city)
                zone.push(value.zone)
            })

            var options = {
                fill: {
                    colors: ['#ff8989']
                },
                series: [
                    {
                        name: 'Zone',
                        data: zone,
                    },
                ],
                chart: {
                    height: 350,
                    type: 'bar',
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function(val) {
                        return val + "";
                    },
                    offsetY: -20,
                    style: {
                        fontSize: '11px',
                        colors: ["#0951a0"]
                    }
                },
                xaxis: {
                    categories: city,
                    position: 'top',
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        fill: {
                            type: 'gradient',
                            gradient: {
                                colorFrom: '#0951a0',
                                colorTo: '#0951a0',
                                stops: [0, 100],
                                opacityFrom: 0.4,
                                opacityTo: 0.5,
                            }
                        }
                    },
                    tooltip: {
                        enabled: true,
                    }
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        show: false,
                        formatter: function(val) {
                            return val + "";
                        }
                    }
                },
                title: {
                    text: '',
                    floating: true,
                    offsetY: 330,
                    align: 'center',
                    style: {
                        color: '#444'
                    }
                }
            };
            var chart = new ApexCharts(document.querySelector("#city-zone"), options);
            chart.render();
        }
    })

    $.ajax({
        url: "{{ route('zone.area') }}",
        method: 'GET',
        data: {},
        success: function(data) {
            var zone = Array();
            var area = Array();
            $.each(data.data, (key, value) => {
                zone.push(value.zone)
                area.push(value.area)
            })

            var options = {
                fill: {
                    colors: ['#b6ff9e']
                },
                series: [
                    {
                        name: 'Area',
                        data: area,
                    },
                ],
                chart: {
                    height: 350,
                    type: 'bar',
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            position: 'top', // top, center, bottom
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    formatter: function(val) {
                        return val + "";
                    },
                    offsetY: -20,
                    style: {
                        fontSize: '11px',
                        colors: ["#0951a0"]
                    }
                },
                xaxis: {
                    categories: zone,
                    position: 'top',
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                    crosshairs: {
                        fill: {
                            type: 'gradient',
                            gradient: {
                                colorFrom: '#0951a0',
                                colorTo: '#0951a0',
                                stops: [0, 100],
                                opacityFrom: 0.4,
                                opacityTo: 0.5,
                            }
                        }
                    },
                    tooltip: {
                        enabled: true,
                    }
                },
                yaxis: {
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false,
                    },
                    labels: {
                        show: false,
                        formatter: function(val) {
                            return val + "";
                        }
                    }
                },
                title: {
                    text: '',
                    floating: true,
                    offsetY: 330,
                    align: 'center',
                    style: {
                        color: '#444'
                    }
                }
            };
            var chart = new ApexCharts(document.querySelector("#zone-area"), options);
            chart.render();
        }
    })
    
      
</script>
@endsection