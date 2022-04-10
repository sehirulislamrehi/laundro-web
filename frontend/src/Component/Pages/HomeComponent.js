import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//import pages
import DesktopMenu from "../Include/DesktopMenu";
import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";



const HomeComponent = () => {

     
     return(
          <div className="id">

               
               {/* desktop menu start */}
               <DesktopMenu></DesktopMenu>
               {/* desktop menu end */}


               {/* Mobile Menu */}
               <MobileMenu></MobileMenu>
               {/* Mobile Menu End */}


               {/* Hero Slider */}
               <div className="home2-hero-slider">
                    <p className="rs-p-wp-fix"></p>
                    
                    <div className="slider-banner" id="rev_slider_2_1_wrapper">
                         <OwlCarousel className='owl-theme banner-carousel' 
                              loop 
                              items="1"
                              nav="true"
                              dots="false"
                         >

                              {/* banner item start */}
                              <div className="item">
                                   <div className="col-md-12">
                                        <div className="banner_image_block">
                                             <img src="/images/bg-slider4.jpg" className="img-fluid banner-image" alt=""></img>
                                             <img src="/images/slider2-bg-bottom1.png" className="banner-bottom-image" alt="" />
                                        </div>
                                   </div>
                              </div>
                              {/* banner item end */}

                              {/* banner item start */}
                              <div className="item">
                                   <div className="col-md-12">
                                        <div className="banner_image_block">
                                             <img src="/images/bg-slider5.jpg" className="img-fluid banner-image" alt=""></img>
                                             <img src="/images/slider2-bg-bottom1.png" className="banner-bottom-image" alt="" />
                                        </div>
                                   </div>
                              </div>
                              {/* banner item end */}
                              
                         </OwlCarousel>
                    </div>
                    {/* END REVOLUTION SLIDER */}

                    <div className="container">
                         <div className="appoinment-form" data-background="images/form-bg.jpg">
                              <div className="appoinment-title">
                                   <span>24 / 7 Hours Service</span>
                                   <h4>Online Appoinment</h4>
                              </div>
                              <form action="#">
                                   <input type="text" placeholder="Your name*" />
                                   <input type="tel" placeholder="Mobile number*" />
                                   <input type="email" placeholder="Main Address" />
                                   <div className="select-field">
                                        <select>
                                             <option>House Cleaning</option>
                                             <option>House Office Cleaning</option>
                                             <option>House Plubming Cleaning</option>
                                        </select>
                                   </div>
                                   <textarea placeholder="Type message..." rows="8"></textarea>
                                   <button type="submit" className="bixol-primary-btn">
                                        Get a quote<span><i className="fab fa-telegram-plane"></i></span>
                                   </button>
                              </form>
                         </div>
                    </div>
               </div>
               {/* Hero Slider End */}

               {/* About Section */}
               <section className="home2-about-section pt-100 pb-100">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-6">
                                   <div className="about-left">
                                        <div className="img-wrapper">
                                             <img src="/images/ab-left.jpg" alt="" />
                                             <div className="es-year">
                                                  <div className="year-content">
                                                       <span className="icon-wrapper"><i className="flaticon-factory"></i></span>
                                                       <span className="subtitle">Establish</span>
                                                       <span className="title">2015</span>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="about-left-content">
                                             <div className="about-counterup">
                                                  <div className="icon-container">
                                                       <span><i className="flaticon flaticon-garment"></i></span>
                                                  </div>
                                                  <div className="counterup-content">
                                                       <div className="title">
                                                            <h4>
                                                                 <span className="odometer" data-value="2542">000</span><sup>+</sup>
                                                            </h4>
                                                       </div>
                                                       <div className="subtitle">
                                                            <span>Satisfied Clients</span>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="about-counterup">
                                                  <div className="icon-container">
                                                       <span><i className="flaticon flaticon-meeting"></i></span>
                                                  </div>
                                                  <div className="counterup-content">
                                                       <div className="title">
                                                            <h4>
                                                                 <span className="odometer" data-value="282">000</span><sup>+</sup>
                                                            </h4>
                                                       </div>
                                                       <div className="subtitle">
                                                            <span>Expert Team</span>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-6">
                                   <div className="about-right">
                                        <div className="bixol-title-area">
                                             <span className="bixol-subtitle">About Cleaning Agency</span>
                                             <h3>Why will you choose <span>our services?</span></h3>
                                             <p>
                                                  As a app web crawler expert, I help organizations adjust to
                                                  the expanding significance of internet promoting. or lipsum as
                                                  it is sometimes known, is dummy text used in laying out print,
                                                  grap or web designs.
                                             </p>
                                        </div>
                                        <div className="seperator">
                                             <hr />
                                        </div>
                                        <div className="about-content">
                                             <ul>
                                                  <li>
                                                       <i className="fas fa-check"></i>
                                                       <p>
                                                            The housekeepers we hired are professionals who take pride
                                                            in doing excellent work and in exceeding expectations.
                                                       </p>
                                                  </li>
                                                  <li>
                                                       <i className="fas fa-check"></i>
                                                       <p>
                                                            The housekeepers we hired are professionals who take pride
                                                            in doing excellent work and in exceeding expectations.
                                                       </p>
                                                  </li>
                                                  <li>
                                                       <i className="fas fa-check"></i>
                                                       <p>
                                                            The housekeepers we hired are professionals who take pride
                                                            in doing excellent work and in exceeding expectations.
                                                       </p>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className="about-btn">
                                             <a href="services.html" className="bixol-primary-btn">View Details<span><i
                                                            className="fas fa-plus"></i></span></a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* About Section End */}

               {/* Services Section */}
               <section className="home2-service-section pt-100 pb-70" data-background="images/service-bg.jpg">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-6 offset-lg-3">
                                   <div className="bixol-title-area text-center">
                                        <span className="bixol-subtitle">Featured services</span>
                                        <h3>We provide the best services <span>for your help!</span></h3>
                                        <p>
                                             As a app web crawler expert, I help organizations adjust to the
                                             expanding significance of internet promoting.
                                        </p>
                                   </div>
                              </div>
                         </div>
                         <div className="home2-service-slider">
                              <div className="service-single-item">
                                   <div className="img-wrapper">
                                        <img src="/images/icon-1.png" alt="" />
                                   </div>
                                   <div className="srv2-service-content">
                                        <a href="service-details.html">
                                             <h5>House Cleaning</h5>
                                        </a>
                                        <p>
                                             As a app web crawler expert, I help organizations adjust to
                                             expand significant of internet.
                                        </p>
                                   </div>
                                   <div className="srv2-hover-item" data-background="images/01.jpg">
                                        <div className="img-wrapper">
                                             <img src="/images/icon-1.png" alt="" />
                                        </div>
                                        <div className="srv2-service-content">
                                             <a href="service-details.html">
                                                  <h5>House Cleaning</h5>
                                             </a>
                                             <p>
                                                  As a app web crawler expert, I help organizations adjust to
                                                  expand sigficant of internet.
                                             </p>
                                             <a href="service-details.html" className="srv2-readmore-btn">Read More <i
                                                       className="fas fa-angle-right"></i></a>
                                        </div>
                                   </div>
                              </div>
                              <div className="service-single-item">
                                   <div className="img-wrapper">
                                        <img src="/images/icon-2.png" alt="" />
                                   </div>
                                   <div className="srv2-service-content">
                                        <a href="service-details.html">
                                             <h5>Indoor Cleaning</h5>
                                        </a>
                                        <p>
                                             As a app web crawler expert, I help organizations adjust to
                                             expand significant of internet.
                                        </p>
                                   </div>
                                   <div className="srv2-hover-item" data-background="images/01.jpg">
                                        <div className="img-wrapper">
                                             <img src="/images/icon-2.png" alt="" />
                                        </div>
                                        <div className="srv2-service-content">
                                             <a href="service-details.html">
                                                  <h5>Indoor Cleaning</h5>
                                             </a>
                                             <p>
                                                  As a app web crawler expert, I help organizations adjust to
                                                  expand sigficant of internet.
                                             </p>
                                             <a href="service-details.html" className="srv2-readmore-btn">Read More <i
                                                       className="fas fa-angle-right"></i></a>
                                        </div>
                                   </div>
                              </div>
                              <div className="service-single-item">
                                   <div className="img-wrapper">
                                        <img src="/images/icon-3.png" alt="" />
                                   </div>
                                   <div className="srv2-service-content">
                                        <a href="#">
                                             <h5>Plumbing Services</h5>
                                        </a>
                                        <p>
                                             As a app web crawler expert, I help organizations adjust to
                                             expand significant of internet.
                                        </p>
                                   </div>
                                   <div className="srv2-hover-item" data-background="images/01.jpg">
                                        <div className="img-wrapper">
                                             <img src="/images/icon-3.png" alt="" />
                                        </div>
                                        <div className="srv2-service-content">
                                             <a href="service-details.html">
                                                  <h5>Plumbing Service</h5>
                                             </a>
                                             <p>
                                                  As a app web crawler expert, I help organizations adjust to
                                                  expand sigficant of internet.
                                             </p>
                                             <a href="service-details.html" className="srv2-readmore-btn">Read More <i
                                                       className="fas fa-angle-right"></i></a>
                                        </div>
                                   </div>
                              </div>
                              <div className="service-single-item">
                                   <div className="img-wrapper">
                                        <img src="/images/icon-5.png" alt="" />
                                   </div>
                                   <div className="srv2-service-content">
                                        <a href="service-details.html">
                                             <h5>Bathroom Cleaning</h5>
                                        </a>
                                        <p>
                                             As a app web crawler expert, I help organizations adjust to
                                             expand significant of internet.
                                        </p>
                                   </div>
                                   <div className="srv2-hover-item" data-background="images/01.jpg">
                                        <div className="img-wrapper">
                                             <img src="/images/icon-5.png" alt="" />
                                        </div>
                                        <div className="srv2-service-content">
                                             <a href="service-details.html">
                                                  <h5>Bathroom Cleaning</h5>
                                             </a>
                                             <p>
                                                  As a app web crawler expert, I help organizations adjust to
                                                  expand sigficant of internet.
                                             </p>
                                             <a href="service-details.html" className="srv2-readmore-btn">Read More <i
                                                       className="fas fa-angle-right"></i></a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* Service Section End */}

               {/* PMV Section */}
               <section className="home2-pmv-section pt-100">
                    <div className="container">
                         <div className="pmv-top">
                              <div className="row align-items-center">
                                   <div className="col-lg-6">
                                        <div className="bixol-title-area">
                                             <span className="bixol-subtitle">Why Choose us?</span>
                                             <h3>We have some features <span>so you choose.</span></h3>
                                        </div>
                                   </div>
                                   <div className="col-lg-6">
                                        <div className="bf-desc">
                                             <p>
                                                  As a app web crawler expert, I help organizations adjust to
                                                  the expanding significance of internet promoting.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="pmv-bottom">
                              <div className="pmv-nav">
                                   <ul className="nav">
                                        <li>
                                             <a href="#philosophy" data-bs-toggle="tab" className="active">Our Philosophy</a>
                                        </li>
                                        <li>
                                             <a href="#mission" data-bs-toggle="tab">Company Mission</a>
                                        </li>
                                        <li><a href="#vission" data-bs-toggle="tab">Our Vission</a></li>
                                   </ul>
                              </div>
                              <div className="tab-content">
                                   <div className="tab-pane fade active show" id="philosophy">
                                        <div className="row align-items-center">
                                             <div className="col-lg-6 order-2 order-lg-1">
                                                  <div className="pmv-content">
                                                       <h4>Our Two-Part satisfaction guarantee!</h4>
                                                       <p>
                                                            We know that if you love our service you’re going to
                                                            recommend us to your family and friends, so your
                                                            satisfaction is our number one priority. If you’re unhappy
                                                            with our service in any way.
                                                       </p>
                                                       <a href="#" className="bixol-primary-btn">View terms of services</a>
                                                  </div>
                                             </div>
                                             <div className="col-lg-6 order-1 order-lg-2">
                                                  <div className="img-wrapper">
                                                       <img src="/images/tab-1.jpg" alt="" />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="tab-pane fade" id="mission">
                                        <div className="row align-items-center">
                                             <div className="col-lg-6 order-2 order-lg-1">
                                                  <div className="pmv-content">
                                                       <h4>Our Two-Part satisfaction guarantee!</h4>
                                                       <p>
                                                            We know that if you love our service you’re going to
                                                            recommend us to your family and friends, so your
                                                            satisfaction is our number one priority. If you’re unhappy
                                                            with our service in any way.
                                                       </p>
                                                       <a href="#" className="bixol-primary-btn">View terms of services</a>
                                                  </div>
                                             </div>
                                             <div className="col-lg-6 order-1 order-lg-2">
                                                  <div className="img-wrapper">
                                                       <img src="/images/tab-1.jpg" alt="" />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="tab-pane fade" id="vission">
                                        <div className="row align-items-center">
                                             <div className="col-lg-6 order-2 order-lg-1">
                                                  <div className="pmv-content">
                                                       <h4>Our Two-Part satisfaction guarantee!</h4>
                                                       <p>
                                                            We know that if you love our service you’re going to
                                                            recommend us to your family and friends, so your
                                                            satisfaction is our number one priority. If you’re unhappy
                                                            with our service in any way.
                                                       </p>
                                                       <a href="#" className="bixol-primary-btn">View terms of services</a>
                                                  </div>
                                             </div>
                                             <div className="col-lg-6 order-1 order-lg-2">
                                                  <div className="img-wrapper">
                                                       <img src="/images/tab-1.jpg" alt="" />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* PMV Section End */}

               {/* Skills Area */}
               <section className="home2-skills-area pt-100 pb-40">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                   <div className="home2-skills-column">
                                        <div className="skills-progress" data-percent="90">
                                             <span className="skills-value">90%</span>
                                             <span className="pie-value"><img src="/images/home-cleaning.png"
                                                       alt="" /></span>
                                        </div>
                                        <div className="skills-content">
                                             <a href="service-details.html">
                                                  <h5>Home Cleaning</h5>
                                             </a>
                                             <p>As a app web crawler expert, I help organizations.</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                   <div className="home2-skills-column">
                                        <div className="skills-progress" data-percent="75">
                                             <span className="skills-value">75%</span>
                                             <span className="pie-value"><img src="/images/office-cleaning.png"
                                                       alt="" /></span>
                                        </div>
                                        <div className="skills-content">
                                             <a href="service-details.html">
                                                  <h5>Office Cleaning</h5>
                                             </a>
                                             <p>As a app web crawler expert, I help organizations.</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                   <div className="home2-skills-column">
                                        <div className="skills-progress" data-percent="50">
                                             <span className="skills-value">50%</span>
                                             <span className="pie-value"><img src="/images/plumbing-service.png"
                                                       alt="" /></span>
                                        </div>
                                        <div className="skills-content">
                                             <a href="#">
                                                  <h5>Plumbing Cleaning</h5>
                                             </a>
                                             <p>As a app web crawler expert, I help organizations.</p>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-3 col-md-4 col-sm-6">
                                   <div className="home2-skills-column">
                                        <div className="skills-progress" data-percent="65">
                                             <span className="skills-value">90%</span>
                                             <span className="pie-value"><img src="/images/window.png" alt="" /></span>
                                        </div>
                                        <div className="skills-content">
                                             <a href="#">
                                                  <h5>Window Cleaning</h5>
                                             </a>
                                             <p>As a app web crawler expert, I help organizations.</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* Skills area End */}

               {/* Portfolio Area */}
               <section className="portfolio-area pb-70">
                    <div className="container">
                         <div className="pf-top">
                              <div className="row align-items-center">
                                   <div className="col-lg-6">
                                        <div className="bixol-title-area">
                                             <span className="bixol-subtitle">Our Portfolio</span>
                                             <h3>Some work from our <span>memorable gallery</span></h3>
                                        </div>
                                   </div>
                                   <div className="col-lg-6">
                                        <div className="bf-desc">
                                             <p>
                                                  As a app web crawler expert, I help organizations adjust to
                                                  the expanding significance of internet promoting.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="portfolio-filter">
                              <div className="controls">
                                   <ul className="filter-button-group">
                                        <li className="active" data-filter="*">All</li>
                                        <li data-filter=".window">Plumbing</li>
                                        <li data-filter=".office">Window cleaning</li>
                                        <li data-filter=".office, .window">Office cleaning</li>
                                   </ul>
                              </div>
                              <div className="filter-items">
                                   <div className="row grid">
                                        <div className="col-lg-4 col-sm-6 grid-item plumbing">
                                             <div className="filter-item">
                                                  <div className="img-wrapper">
                                                       <img src="/images/001.jpg" alt="" />
                                                  </div>
                                                  <div className="pf-item-content">
                                                       <a href="portfolio-details.html" className="plus-icon"><i
                                                                 className="fas fa-plus"></i></a>
                                                       <a href="portfolio-details.html">
                                                            <h6>Furniture Cleaning</h6>
                                                       </a>
                                                       <span className="devider"></span>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 grid-item window">
                                             <div className="filter-item">
                                                  <div className="img-wrapper">
                                                       <img src="/images/02.jpg" alt="" />
                                                  </div>
                                                  <div className="pf-item-content">
                                                       <a href="portfolio-details.html" className="plus-icon"><i
                                                                 className="fas fa-plus"></i></a>
                                                       <a href="portfolio-details.html">
                                                            <h6>Furniture Cleaning</h6>
                                                       </a>
                                                       <span className="devider"></span>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 grid-item office">
                                             <div className="filter-item">
                                                  <div className="img-wrapper">
                                                       <img src="/images/03.jpg" alt="" />
                                                  </div>
                                                  <div className="pf-item-content">
                                                       <a href="portfolio-details.html" className="plus-icon"><i
                                                                 className="fas fa-plus"></i></a>
                                                       <a href="portfolio-details.html">
                                                            <h6>Furniture Cleaning</h6>
                                                       </a>
                                                       <span className="devider"></span>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 grid-item plumbing">
                                             <div className="filter-item">
                                                  <div className="img-wrapper">
                                                       <img src="/images/04.jpg" alt="" />
                                                  </div>
                                                  <div className="pf-item-content">
                                                       <a href="portfolio-details.html" className="plus-icon"><i
                                                                 className="fas fa-plus"></i></a>
                                                       <a href="portfolio-details.html">
                                                            <h6>Furniture Cleaning</h6>
                                                       </a>
                                                       <span className="devider"></span>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-lg-4 col-sm-6 grid-item home">
                                             <div className="filter-item">
                                                  <div className="img-wrapper">
                                                       <img src="/images/05.jpg" alt="" />
                                                  </div>
                                                  <div className="pf-item-content">
                                                       <a href="portfolio-details.html" className="plus-icon"><i
                                                                 className="fas fa-plus"></i></a>
                                                       <a href="portfolio-details.html">
                                                            <h6>Furniture Cleaning</h6>
                                                       </a>
                                                       <span className="devider"></span>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* Portfolio Area End */}

               {/* Steps Area */}
               <section className="home2-steps-area pb-100">
                    <div className="container">
                         <div className="steps-top">
                              <div className="row align-items-center">
                                   <div className="col-lg-6">
                                        <div className="bixol-title-area">
                                             <span className="bixol-subtitle">Steps to reach here</span>
                                             <h3>Some easy stesps to <span>clean your asset.</span></h3>
                                        </div>
                                   </div>
                                   <div className="col-lg-6">
                                        <div className="bf-desc">
                                             <p>
                                                  As a app web crawler expert, I help organizations adjust to
                                                  the expanding significance of internet promoting.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="steps-bottom">
                              <div className="row">
                                   <div className="col-lg-4 col-md-6">
                                        <div className="steps-column">
                                             <div className="icon-wrapper">
                                                  <span><i className="fas fa-home"></i></span>
                                             </div>
                                             <div className="title">
                                                  <h6>Find our agent</h6>
                                             </div>
                                             <div className="desc">
                                                  <p>
                                                       As a app web crawler expert, I help organizations adjust to
                                                       the expanding significance of internet.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <div className="steps-column cl-2">
                                             <div className="icon-wrapper">
                                                  <span><i className="fas fa-money-bill"></i></span>
                                             </div>
                                             <div className="title">
                                                  <h6>Estimate budget</h6>
                                             </div>
                                             <div className="desc">
                                                  <p>
                                                       As a app web crawler expert, I help organizations adjust to
                                                       the expanding significance of internet.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-4 col-md-6">
                                        <div className="steps-column cl-3">
                                             <div className="icon-wrapper">
                                                  <span><i className="fas fa-truck-pickup"></i></span>
                                             </div>
                                             <div className="title">
                                                  <h6>Hire our agent!</h6>
                                             </div>
                                             <div className="desc">
                                                  <p>
                                                       As a app web crawler expert, I help organizations adjust to
                                                       the expanding significance of internet.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="steps-btn">
                                   <a href="about.html" className="bixol-primary-btn">Read more to rech us</a>
                              </div>
                         </div>
                    </div>
               </section>
               {/* Steps Area End */}

               {/* Faq Section */}
               <section className="home2-faq-area pt-100 pb-100" data-background="images/accordion-bg.jpg">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-6 offset-lg-6">
                                   <div className="faq-content">
                                        <div className="bixol-title-area">
                                             <span className="bixol-subtitle">FAQ</span>
                                             <h3>You will learn more from <span>our FAQ.</span></h3>
                                             <p>
                                                  As a app web crawler expert, I help organizations adjust to
                                                  the expanding significance of internet promoting.
                                             </p>
                                        </div>
                                        <div className="faq-wrapper">
                                             <div className="accordion" id="faq-accordion">
                                                  <div className="accordion-item">
                                                       <div className="accordion-header">
                                                            <a href="#collapseOne" data-bs-toggle="collapse">What should I include
                                                                 in my personal statement?</a>
                                                       </div>
                                                       <div id="collapseOne" className="collapse show"
                                                            data-bs-parent="#faq-accordion">
                                                            <div className="accordion-body">
                                                                 <p>
                                                                      Lorem ipsum dolor sit amet consecte tur adipiscing
                                                                      elit sed do eiusmod tempor incididunt ut labore.
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="accordion-item">
                                                       <div className="accordion-header">
                                                            <a href="#collapseTwo" data-bs-toggle="collapse">What will happer when
                                                                 I've sent my application?</a>
                                                       </div>
                                                       <div id="collapseTwo" className="collapse" data-bs-parent="#faq-accordion">
                                                            <div className="accordion-body">
                                                                 <p>
                                                                      Lorem ipsum dolor sit amet consecte tur adipiscing
                                                                      elit sed do eiusmod tempor incididunt ut labore.
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="accordion-item">
                                                       <div className="accordion-header">
                                                            <a href="#collapseThree" data-bs-toggle="collapse">How can I make a
                                                                 change to my application?</a>
                                                       </div>
                                                       <div id="collapseThree" className="collapse" data-bs-parent="#faq-accordion">
                                                            <div className="accordion-body">
                                                                 <p>
                                                                      Lorem ipsum dolor sit amet consecte tur adipiscing
                                                                      elit sed do eiusmod tempor incididunt ut labore.
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="accordion-item">
                                                       <div className="accordion-header">
                                                            <a href="#collapsefour" data-bs-toggle="collapse">How can I consult
                                                                 with the cleaning team?</a>
                                                       </div>
                                                       <div id="collapsefour" className="collapse" data-bs-parent="#faq-accordion">
                                                            <div className="accordion-body">
                                                                 <p>
                                                                      Lorem ipsum dolor sit amet consecte tur adipiscing
                                                                      elit sed do eiusmod tempor incididunt ut labore.
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* FAQ Area End */}

               {/* Feedback Area */}
               <section className="srv2-feedback-area pt-100 pb-100" data-background="images/feedback-bg.jpg">
                    <div className="container">
                         <div className="srv2-feedback-top">
                              <div className="row align-items-center">
                                   <div className="col-lg-6">
                                        <div className="bixol-title-area">
                                             <span className="bixol-subtitle">Clients Testimonial</span>
                                             <h3>We are very glad to get <span>good reviews</span></h3>
                                        </div>
                                   </div>
                                   <div className="col-lg-6">
                                        <div className="bf-desc">
                                             <p>
                                                  As a app web crawler edxpert, I help organizations adjust to
                                                  the expanding significance of internet promoting.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="srv2-feedback-wrapper srv2-feedback-slider">
                              <div className="feedback-single">
                                   <p>
                                        Testimonials are written or recorded statements that support your
                                        credibility and level of expertise. They also streng then your
                                        reputation.
                                   </p>
                                   <div className="srv2-clients-info">
                                        <div className="clients-thumb">
                                             <span><img src="/images/client-1.jpg" alt="" /></span>
                                        </div>
                                        <div className="clients-info">
                                             <h5>Jeff Adams</h5>
                                             <span>Director</span>
                                        </div>
                                   </div>
                              </div>
                              <div className="feedback-single">
                                   <p>
                                        Testimonials are written or recorded statements that support your
                                        credibility and level of expertise. They also streng then your
                                        reputation.
                                   </p>
                                   <div className="srv2-clients-info">
                                        <div className="clients-thumb">
                                             <span><img src="/images/client-2.jpg" alt="" /></span>
                                        </div>
                                        <div className="clients-info">
                                             <h5>Laito french</h5>
                                             <span>Director</span>
                                        </div>
                                   </div>
                              </div>
                              <div className="feedback-single">
                                   <p>
                                        Testimonials are written or recorded statements that support your
                                        credibility and level of expertise. They also streng then your
                                        reputation.
                                   </p>
                                   <div className="srv2-clients-info">
                                        <div className="clients-thumb">
                                             <span><img src="/images/client-3.jpg" alt="" /></span>
                                        </div>
                                        <div className="clients-info">
                                             <h5>Fiona Titir</h5>
                                             <span>Director</span>
                                        </div>
                                   </div>
                              </div>
                              <div className="feedback-single">
                                   <p>
                                        Testimonials are written or recorded statements that support your
                                        credibility and level of expertise. They also streng then your
                                        reputation.
                                   </p>
                                   <div className="srv2-clients-info">
                                        <div className="clients-thumb">
                                             <span><img src="/images/client-4.jpg" alt="" /></span>
                                        </div>
                                        <div className="clients-info">
                                             <h5>Amy Herzog</h5>
                                             <span>Director</span>
                                        </div>
                                   </div>
                              </div>
                              <div className="feedback-single">
                                   <p>
                                        Testimonials are written or recorded statements that support your
                                        credibility and level of expertise. They also streng then your
                                        reputation.
                                   </p>
                                   <div className="srv2-clients-info">
                                        <div className="clients-thumb">
                                             <span><img src="/images/client-1.jpg" alt="" /></span>
                                        </div>
                                        <div className="clients-info">
                                             <h5>Lima Vinchy</h5>
                                             <span>Director</span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* Feedback Area End */}

               {/* Brand Area */}
               <div className="home2-brand-area pt-60 pb-60">
                    <div className="container">
                         <div className="brand-wrapper">
                              <div className="row home2-brand-slider">
                                   <div className="brand-single">
                                        <div className="img-wrapper">
                                             <img src="/images/brand-1.png" alt="" />
                                             <img src="/images/brand-1.png" alt="" />
                                        </div>
                                   </div>
                                   <div className="brand-single">
                                        <div className="img-wrapper">
                                             <img src="/images/brand-2.png" alt="" />
                                             <img src="/images/brand-2.png" alt="" />
                                        </div>
                                   </div>
                                   <div className="brand-single">
                                        <div className="img-wrapper">
                                             <img src="/images/brand-3.png" alt="" />
                                             <img src="/images/brand-3.png" alt="" />
                                        </div>
                                   </div>
                                   <div className="brand-single">
                                        <div className="img-wrapper">
                                             <img src="/images/brand-4.png" alt="" />
                                             <img src="/images/brand-4.png" alt="" />
                                        </div>
                                   </div>
                                   <div className="brand-single">
                                        <div className="img-wrapper">
                                             <img src="/images/brand-4.png" alt="" />
                                             <img src="/images/brand-4.png" alt="" />
                                        </div>
                                   </div>
                              </div>
                              <div className="seperator">
                                   <hr />
                              </div>
                         </div>
                    </div>
               </div>
               {/* Brand Area End */}

               {/* Blog Area */}
               <section className="home2-blog-area pb-100">
                    <div className="container">
                         <div className="blog-top-title">
                              <div className="row align-items-center">
                                   <div className="col-lg-6">
                                        <div className="bixol-title-area">
                                             <span className="bixol-subtitle">Featured Blog</span>
                                             <h3>Learn aobut our latest <span>news from blog.</span></h3>
                                        </div>
                                   </div>
                                   <div className="col-lg-6">
                                        <div className="bf-desc">
                                             <p>
                                                  As a app web crawler expert, I help organizations adjust to
                                                  the expanding significance of internet promoting.
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="home2-blog-slider">
                              <div className="blog-single-item">
                                   <div className="thumb-wrapper">
                                        <a href="blog-details.html"><img src="/images/blog-1.jpg" alt="" /></a>
                                   </div>
                                   <div className="blog-content">
                                        <div className="blog-meta">
                                             <span><i className="fas fa-calendar-alt"></i>September 12,2020</span>
                                             <span><i className="fas fa-user"></i>Admin</span>
                                        </div>
                                        <div className="blog-title">
                                             <a href="blog-details.html">
                                                  <h5>Regional Managers & tiem management.</h5>
                                             </a>
                                        </div>
                                        <div className="readmore-btn">
                                             <a href="blog-details.html">Read more <i className="fas fa-angle-double-right"></i></a>
                                        </div>
                                   </div>
                              </div>
                              <div className="blog-single-item">
                                   <div className="thumb-wrapper">
                                        <a href="blog-details.html"><img src="/images/blog-2.jpg" alt="" /></a>
                                   </div>
                                   <div className="blog-content">
                                        <div className="blog-meta">
                                             <span><i className="fas fa-calendar-alt"></i>September 12,2020</span>
                                             <span><i className="fas fa-user"></i>Admin</span>
                                        </div>
                                        <div className="blog-title">
                                             <a href="blog-details.html">
                                                  <h5>Revitalising your people in a retail downturn.</h5>
                                             </a>
                                        </div>
                                        <div className="readmore-btn">
                                             <a href="blog-details.html">Read more <i className="fas fa-angle-double-right"></i></a>
                                        </div>
                                   </div>
                              </div>
                              <div className="blog-single-item">
                                   <div className="thumb-wrapper">
                                        <a href="blog-details.html"><img src="/images/blog-3.jpg" alt="" /></a>
                                   </div>
                                   <div className="blog-content">
                                        <div className="blog-meta">
                                             <span><i className="fas fa-calendar-alt"></i>September 12,2020</span>
                                             <span><i className="fas fa-user"></i>Admin</span>
                                        </div>
                                        <div className="blog-title">
                                             <a href="blog-details.html">
                                                  <h5>Organisational teams are just like families.</h5>
                                             </a>
                                        </div>
                                        <div className="readmore-btn">
                                             <a href="blog-details.html">Read more <i className="fas fa-angle-double-right"></i></a>
                                        </div>
                                   </div>
                              </div>
                              <div className="blog-single-item">
                                   <div className="thumb-wrapper">
                                        <a href="blog-details.html"><img src="/images/blog-1.jpg" alt="" /></a>
                                   </div>
                                   <div className="blog-content">
                                        <div className="blog-meta">
                                             <span><i className="fas fa-calendar-alt"></i>September 12,2020</span>
                                             <span><i className="fas fa-user"></i>Admin</span>
                                        </div>
                                        <div className="blog-title">
                                             <a href="blog-details.html">
                                                  <h5>Regional Managers & tiem management.</h5>
                                             </a>
                                        </div>
                                        <div className="readmore-btn">
                                             <a href="blog-details.html">Read more <i className="fas fa-angle-double-right"></i></a>
                                        </div>
                                   </div>
                              </div>
                              <div className="blog-single-item">
                                   <div className="thumb-wrapper">
                                        <a href="blog-details.html"><img src="/images/blog-2.jpg" alt="" /></a>
                                   </div>
                                   <div className="blog-content">
                                        <div className="blog-meta">
                                             <span><i className="fas fa-calendar-alt"></i>September 12,2020</span>
                                             <span><i className="fas fa-user"></i>Admin</span>
                                        </div>
                                        <div className="blog-title">
                                             <a href="blog-details.html">
                                                  <h5>Regional Managers & tiem management.</h5>
                                             </a>
                                        </div>
                                        <div className="readmore-btn">
                                             <a href="blog-details.html">Read more <i className="fas fa-angle-double-right"></i></a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* Blog Area End */}

               {/* Contact Area */}
               <section className="home2-contact-area">
                    <div className="container">
                         <div className="home2-git" data-background="images/contact-bg.jpg">
                              <div className="row">
                                   <div className="col-lg-7 order-2 order-lg-1">
                                        <div className="git-left">
                                             <div className="title">
                                                  <h3><span>Want to </span>Contact with us?</h3>
                                             </div>
                                             <div className="git-bottom">
                                                  <div className="phon-area">
                                                       <span className="git-title">Call us:</span>
                                                       <a href="tel:+8801858361812"><span><i
                                                                      className="fas fa-phone-alt"></i></span>+8801858361812</a>
                                                  </div>
                                                  <div className="git-txt">
                                                       or
                                                       <span></span>
                                                  </div>
                                                  <div className="mail-area">
                                                       <span className="git-title">Mail us:</span>
                                                       <a href="mailto:mdsehirulislamrehi@gmail.com"><span><i
                                                                      className="fas fa-envelope"></i></span>mdsehirulislamrehi@gmail.com</a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-lg-5 order-1 order-lg-2">
                                        <div className="git-right">
                                             <img src="/images/git-right.png" alt="" />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* Contact Area End */}

               {/* Footer */}
               <Footer></Footer>
               {/* Footer End */}

          </div>
     );
}

export default HomeComponent;