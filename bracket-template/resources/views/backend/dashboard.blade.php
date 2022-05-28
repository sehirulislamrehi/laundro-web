@extends("backend.template.layout")

@section('per_page_css')
<style>
    .small-box .inner h3 {
        font-size: 18px;
    }
</style>
@endsection

@section('body-content')
<div class="br-mainpanel">
    <div class="br-pagetitle">
    </div>

    <div class="br-pagebody">
        <div class="row row-sm">

            <!-- item card start -->
            <div class="col-sm-6 col-xl-3">
                <div class="rounded overflow-hidden" style="background: #127383">
                    <div class="pd-x-20 pd-t-20 d-flex align-items-center">
                        <div class="mg-l-20">
                            <p class="tx-24 tx-white tx-lato tx-bold mg-b-0 lh-1">{{ $zipcode }}</p>
                            <span class="tx-11 tx-roboto tx-white-8">Zipcode</span>
                        </div>
                    </div>
                    <div id="ch1" class="ht-50 tr-y-1"></div>
                </div>
            </div>
            <!-- item card end -->

            <!-- item card start -->
            <div class="col-sm-6 col-xl-3">
                <div class="rounded overflow-hidden" style="background: #6c6c6c">
                    <div class="pd-x-20 pd-t-20 d-flex align-items-center">
                        <div class="mg-l-20">
                            <p class="tx-24 tx-white tx-lato tx-bold mg-b-0 lh-1">{{ $location->where("type",null)->count() }}</p>
                            <span class="tx-11 tx-roboto tx-white-8">City</span>
                        </div>
                    </div>
                    <div id="ch2" class="ht-50 tr-y-1"></div>
                </div>
            </div>
            <!-- item card end -->

            <!-- item card start -->
            <div class="col-sm-6 col-xl-3">
                <div class="rounded overflow-hidden" style="background: #703146">
                    <div class="pd-x-20 pd-t-20 d-flex align-items-center">
                        <div class="mg-l-20">
                            <p class="tx-24 tx-white tx-lato tx-bold mg-b-0 lh-1">{{ $location->where("type","zone")->count() }}</p>
                            <span class="tx-11 tx-roboto tx-white-8">Zone</span>
                        </div>
                    </div>
                    <div id="ch3" class="ht-50 tr-y-1"></div>
                </div>
            </div>
            <!-- item card end -->

            <!-- item card start -->
            <div class="col-sm-6 col-xl-3">
                <div class="rounded overflow-hidden" style="background: #4f52a7">
                    <div class="pd-x-20 pd-t-20 d-flex align-items-center">
                        <div class="mg-l-20">
                            <p class="tx-24 tx-white tx-lato tx-bold mg-b-0 lh-1">{{ $location->where("type","area")->count() }}</p>
                            <span class="tx-11 tx-roboto tx-white-8">Area</span>
                        </div>
                    </div>
                    <div id="ch4" class="ht-50 tr-y-1"></div>
                </div>
            </div>
            <!-- item card end -->
            
        </div>

        <div class="row row-sm charts mt-5">

            <div class="col-md-6 pr-2 mb-2">
                <div class="card">
                    <div class="card-header">
                    Zones in Cities
                    </div>
                    <div class="card-body" id="city-zone">
                        
                    </div>
                </div>
            </div>

            <div class="col-md-6 pr-2 mb-2">
                <div class="card">
                    <div class="card-header">
                        Areas in Zone
                    </div>
                    <div class="card-body" id="zone-area">
                        
                    </div>
                </div>
            </div>

            <div class="col-md-12 pr-2 mb-5">
                <div class="card">
                    <div class="card-header">
                        Areas in zipcode
                    </div>
                    <div class="card-body" id="zipcode-area">
                        
                    </div>
                </div>
            </div>

        </div>
    </div>
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
                    x: value.code,
                    y: value.area + " Area",
                }
                zipcode_area.push(obj)
            })


            var options = {
                series: [{
                    data: zipcode_area
                }],
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
                series: [{
                    name: 'Zone',
                    data: zone,
                }, ],
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
                series: [{
                    name: 'Area',
                    data: area,
                }, ],
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