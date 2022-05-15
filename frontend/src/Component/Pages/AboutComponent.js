
import { Link } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//import pages
import DesktopMenu from "../Include/DesktopMenu";
import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";


const AboutComponent = () => {

     {/* window scroll to top */}
     window.scrollTo(0, 0);

     const service_options = {
          margin: 0,
          nav: false,
          dots: true,
          responsive: {
               0: {
                    items: 1,
               },
               400: {
                    items: 1,
               },
               600: {
                    items: 1,
               },
               700: {
                    items: 3,
               },
               1000: {
                    items: 3,
               }
          },
     };

     const team_options = {
          margin: 0,
          nav: false,
          dots: true,
          responsive: {
               0: {
                    items: 1,
               },
               400: {
                    items: 1,
               },
               600: {
                    items: 1,
               },
               700: {
                    items: 3,
               },
               1000: {
                    items: 4,
               }
          },
     };

     return(
          <div className="id">

                         
               {/* desktop menu start */}
               <DesktopMenu></DesktopMenu>
               {/* desktop menu end */}

               {/* Mobile Menu */}
               <MobileMenu></MobileMenu>
               {/* Mobile Menu End */}

               {/* Breadcrumb Area */}
               <div className="laundro-breadcrumb" style={{ backgroundImage: `url('/images/breadcrumb.jpg')` }}>
                    <span className="breadcrumb-object"><img src="/images/slider-object.png" alt=""></img></span>
                    <div className="container">
                         <div className="breadcrumb-content">
                              <h1>About Us</h1>
                              <Link to="/">Home <i className="fas fa-angle-double-right"></i></Link>
                              <span>About Us</span>
                         </div>
                    </div>
               </div>
               {/* Breadcrumb End */}


               {/* About Section */}
               <section className="laundro-about-section pt-100 pb-100">
                    <div className="container">
                         <div className="row align-items-center">
                              <div className="col-lg-6">
                              <div className="laundro-ab-left">
                                   <div className="img-wrapper">
                                        <img src="/images/sr-middle.png" alt=""></img>
                                        <div className="banner-content">
                                             <span className="banner-svg-1"></span>
                                             <span className="banner-svg-2"></span>
                                             <h3>25+</h3>
                                             <p>Service <br></br>we provide</p>
                                        </div>
                                   </div>
                              </div>
                              </div>
                              <div className="col-lg-6">
                              <div className="laundro-about-right">
                                   <div className="laundro-title-area">
                                        <span className="laundro-subtitle">About Cleaning Agency</span>
                                        <h3>Why will you choose <span>our services?</span></h3>
                                        <p>As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting.  or lipsum as it is sometimes known, is dummy text used in laying out print, grap or web designs.</p>
                                   </div>
                                   <div className="devider"><hr></hr> </div>
                                   <div className="laundro-about-content">
                                        <div className="video-wrapper">
                                             <div className="video-thumb">
                                                  <img src="/images/video-thumb.jpg" alt=""></img>
                                                  <a href="https://www.youtube.com/watch?v=SF4aHwxHtZ0" className="video-popup"><i className="fas fa-play"></i></a>
                                             </div>
                                        </div>
                                        <div className="video-content">
                                             <Link href="/"><span className="title">Check how we clean</span></Link>
                                             <p>Reference site about Lorem ipsum. giving information on its origin.</p>
                                        </div>
                                   </div>
                              </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* About Section End */}


               {/* Service Slider */}
               <section className="ab-service-section" style={{
                    backgroundImage : `url("/images/service-bg.jpg")`
               }}>
                    <div className="container">
                         <div className="ab-service-top">
                              <div className="row align-items-center">
                              <div className="col-lg-6">
                                   <div className="laundro-title-area">
                                        <span className="laundro-subtitle">Featured Service</span>
                                        <h3>The best service we <span>have provided</span></h3>
                                   </div>
                              </div>
                              <div className="col-lg-6">
                                   <div className="bf-desc">
                                        <p>As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting.</p>
                                   </div>
                              </div>
                              </div>
                         </div>

                         <OwlCarousel className='owl-theme ab-service-slider' 
                              loop 
                              items="3"
                              nav="false"
                              dots="true"
                              {...service_options}
                              
                         >

                              <div className="item">
                                   <div className="laundro-service-item">
                                        <div className="laundro-icon-wrapper">
                                             <span><i className="fas fa-user"></i></span>
                                        </div>
                                        <div className="laundro-service-content">
                                             <Link to="/service-details/Wash"><h5>Wash</h5></Link>
                                             <p>As a app web crawler expert a significant of internet.</p>
                                        </div>
                                   </div>
                              </div>

                              <div className="item">
                                   <div className="laundro-service-item">
                                        <div className="laundro-icon-wrapper">
                                             <span><i className="fas fa-user"></i></span>
                                        </div>
                                        <div className="laundro-service-content">
                                             <Link to="/service-details/Wash & Iron"><h5>Wash & Iron</h5></Link>
                                             <p>As a app web crawler expert a significant of internet.</p>
                                        </div>
                                   </div>
                              </div>

                              <div className="item">
                                   <div className="laundro-service-item">
                                        <div className="laundro-icon-wrapper">
                                             <span><i className="fas fa-user"></i></span>
                                        </div>
                                        <div className="laundro-service-content">
                                             <Link to="/service-details/Kitchen Cleaning"><h5>Dry Cleaning</h5></Link>
                                             <p>As a app web crawler expert a significant of internet.</p>
                                        </div>
                                   </div>
                              </div>
                              
                              <div className="item">
                                   <div className="laundro-service-item">
                                        <div className="laundro-icon-wrapper">
                                             <span><i className="flaticon-towelfas fa-user"></i></span>
                                        </div>
                                        <div className="laundro-service-content">
                                             <Link to="/service-details/Ironing"><h5>Ironing</h5></Link>
                                             <p>As a app web crawler expert a significant of internet.</p>
                                        </div>
                                   </div>
                              </div>

                         </OwlCarousel>
                         
                    </div>
               </section>
               {/* Services Slider End */}


               {/* History */}
               <section className="ab-history-section pt-100 pb-100">
                    <span className="ab-history-left-img"><img src="/images/history-left.jpg" alt=""></img></span>
                    <div className="container">
                         <div className="ab-history-top">
                              <div className="row align-items-center">
                              <div className="col-lg-6">
                                   <div className="laundro-title-area">
                                        <span className="laundro-subtitle">History</span>
                                        <h3>You can check our <span>company timeline.</span></h3>
                                   </div>
                              </div>
                              <div className="col-lg-6">
                                   <div className="bf-desc">
                                        <p>As a app web crawler expert, I help organizations adjust to the expanding significance of internet promoting.</p>
                                   </div>
                              </div>
                              </div>
                         </div>
                         <div className="ab-history-tab">
                              <div className="tab-control">
                              <ul className="nav nav-pills">
                                   <li><a href="#seventeen" data-bs-toggle="pill" className="active">2017</a></li>
                                   <li><a href="#eightteen" data-bs-toggle="pill">2018</a></li>
                                   <li><a href="#nineteen" data-bs-toggle="pill">2019</a></li>
                                   <li><a href="#tweenty" data-bs-toggle="pill">2020</a></li>
                              </ul>
                              <div className="tab-devider"><hr></hr></div>
                              </div>
                              <div className="tab-content">
                              <div className="tab-pane fade show active" id="seventeen">
                                   <div className="history-content">
                                        <h4>Our Company starts first step <br></br>with our expert team!</h4>
                                        <p>We know that if you love our service you’re going to recommend us to your family and friends, so your satisfaction is our number one priority. If you’re unhappy with our service in any way.</p>
                                   </div>
                              </div>
                              <div className="tab-pane fade" id="eightteen">
                                   <div className="history-content">
                                        <h4>Our Company starts first step <br></br>with our expert team!</h4>
                                        <p>We know that if you love our service you’re going to recommend us to your family and friends, so your satisfaction is our number one priority. If you’re unhappy with our service in any way.</p>
                                   </div>
                              </div>
                              <div className="tab-pane fade" id="nineteen">
                                   <div className="history-content">
                                        <h4>Our Company starts first step <br></br>with our expert team!</h4>
                                        <p>We know that if you love our service you’re going to recommend us to your family and friends, so your satisfaction is our number one priority. If you’re unhappy with our service in any way.</p>
                                   </div>
                              </div>
                              <div className="tab-pane fade" id="tweenty">
                                   <div className="history-content">
                                        <h4>Our Company starts first step <br></br>with our expert team!</h4>
                                        <p>We know that if you love our service you’re going to recommend us to your family and friends, so your satisfaction is our number one priority. If you’re unhappy with our service in any way.</p>
                                   </div>
                              </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* History Section End */}


              {/* Team Area */}
               <section className="laundro-team-area pt-100 pb-100">
                    <div className="container">
                         <div className="row align-items-center">
                              <div className="col-lg-8">
                              <div className="laundro-title-area">
                                   <span className="laundro-subtitle">Team Members</span>
                                   <h3>We have an expert team <span>to serve you.</span></h3>
                              </div>
                              </div>
                         </div>

                         <OwlCarousel className='owl-theme laundro-team-container laundro-team-slider' 
                              loop 
                              items="4"
                              nav="false"
                              dots="true"
                              {...team_options}
                              
                         >

                              <div className="item">
                                   <div className="laundro-team-single">
                                        <div className="laundro-img-wrapper">
                                             <img src="/images/team-1.jpg" alt=""></img>
                                        </div>
                                        <div className="laundro-team-content">
                                             <a><h5>Laito French</h5></a>
                                             <span>Head in Plumbing</span>
                                             <span className="team-social-link"><i className="fas fa-share-alt"></i></span>
                                             <div className="laundro-team-social-items">                                
                                                  <a href="#"><i className="fab fa-behance"></i></a>
                                                  <a href="#"><i className="fas fa-basketball-ball"></i></a>
                                                  <a href="#"><i className="fab fa-twitter"></i></a>
                                                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="item">
                                   <div className="laundro-team-single">
                                        <div className="laundro-img-wrapper">
                                             <img src="/images/team-2.jpg" alt=""></img>
                                        </div>
                                        <div className="laundro-team-content">
                                             <a><h5>Laito French</h5></a>
                                             <span>Head in Plumbing</span>
                                             <span className="team-social-link"><i className="fas fa-share-alt"></i></span>
                                             <div className="laundro-team-social-items">                                
                                                  <a href="#"><i className="fab fa-behance"></i></a>
                                                  <a href="#"><i className="fas fa-basketball-ball"></i></a>
                                                  <a href="#"><i className="fab fa-twitter"></i></a>
                                                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="item">
                                   <div className="laundro-team-single">
                                        <div className="laundro-img-wrapper">
                                             <img src="/images/team-3.jpg" alt=""></img>
                                        </div>
                                        <div className="laundro-team-content">
                                             <a><h5>Laito French</h5></a>
                                             <span>Head in Plumbing</span>
                                             <span className="team-social-link"><i className="fas fa-share-alt"></i></span>
                                             <div className="laundro-team-social-items">                                
                                                  <a href="#"><i className="fab fa-behance"></i></a>
                                                  <a href="#"><i className="fas fa-basketball-ball"></i></a>
                                                  <a href="#"><i className="fab fa-twitter"></i></a>
                                                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="item">
                                   <div className="laundro-team-single">
                                        <div className="laundro-img-wrapper">
                                             <img src="/images/team-4.jpg" alt=""></img>
                                        </div>
                                        <div className="laundro-team-content">
                                             <a><h5>Laito French</h5></a>
                                             <span>Head in Plumbing</span>
                                             <span className="team-social-link"><i className="fas fa-share-alt"></i></span>
                                             <div className="laundro-team-social-items">                                
                                                  <a href="#"><i className="fab fa-behance"></i></a>
                                                  <a href="#"><i className="fas fa-basketball-ball"></i></a>
                                                  <a href="#"><i className="fab fa-twitter"></i></a>
                                                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="item">
                                   <div className="laundro-team-single">
                                        <div className="laundro-img-wrapper">
                                             <img src="/images/team-2.jpg" alt=""></img>
                                        </div>
                                        <div className="laundro-team-content">
                                             <a><h5>Laito French</h5></a>
                                             <span>Head in Plumbing</span>
                                             <span className="team-social-link"><i className="fas fa-share-alt"></i></span>
                                             <div className="laundro-team-social-items">                                
                                                  <a href="#"><i className="fab fa-behance"></i></a>
                                                  <a href="#"><i className="fas fa-basketball-ball"></i></a>
                                                  <a href="#"><i className="fab fa-twitter"></i></a>
                                                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                                             </div>
                                        </div>
                                   </div>
                              </div>


                         </OwlCarousel>

                    </div>
               </section>
              {/* Team Area End */}


              {/* Counterup Section */}
               <section className="laundro-ct-section pt-100 pb-120">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-3 col-md-4 col-6">
                              <div className="laundro-counter-column bx-col-line">
                                   <div className="laundro-icon-wrapper">
                                        <span><i className="flaticon flaticon-garment"></i></span>
                                   </div>
                                   <div className="laundro-ct-content">
                                        <h3><span className="odometer" data-value="2542">000</span><sup>+</sup></h3>
                                        <span className="subtitle">Satisfied Clients</span>
                                   </div>
                              </div>
                              </div>
                              <div className="col-lg-3 col-md-4 col-6">
                              <div className="laundro-counter-column bx-col-line">
                                   <div className="laundro-icon-wrapper">
                                        <span><i className="flaticon flaticon-meeting"></i></span>
                                   </div>
                                   <div className="laundro-ct-content">
                                        <h3><span className="odometer" data-value="282">000</span><sup>+</sup></h3>
                                        <span className="subtitle">Expert Team</span>
                                   </div>
                              </div>
                              </div>
                              <div className="col-lg-3 col-md-4 col-6">
                              <div className="laundro-counter-column bx-col-line">
                                   <div className="laundro-icon-wrapper">
                                        <span><i className="flaticon flaticon-screen"></i></span>
                                   </div>
                                   <div className="laundro-ct-content">
                                        <h3><span className="odometer" data-value="285">000</span><sup>+</sup></h3>
                                        <span className="subtitle">Active Project</span>
                                   </div>
                              </div>
                              </div>
                              <div className="col-lg-3 col-md-4 col-6">
                              <div className="laundro-counter-column">
                                   <div className="laundro-icon-wrapper">
                                        <span><i className="flaticon flaticon-trophy"></i></span>
                                   </div>
                                   <div className="laundro-ct-content">
                                        <h3><span className="odometer" data-value="27">00</span><sup>+</sup></h3>
                                        <span className="subtitle">Award winning</span>
                                   </div>
                              </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* Counterup End */}



               {/* Footer */}
               <Footer></Footer>
               {/* Footer End */}

          </div>
     );
}

export default AboutComponent;