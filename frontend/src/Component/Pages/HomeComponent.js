
import { Link } from "react-router-dom";



import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


//import pages
import DesktopMenu from "../Include/DesktopMenu";
import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllServices } from "../../action";




const HomeComponent = () => {

     {/* window scroll to top */}
     window.scrollTo(0, 0);

     //INITIALIZATION
    const dispatch = useDispatch();

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

     const brand_options = {
          loop: true,
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
          
     useEffect(() => {

          //get services
          const get_services_url = `${window.url}/get-all-services`;

          fetch(get_services_url,{
               method : "GET"
          })
          .then( response => response.json() )
          .then( response => {
               dispatch(getAllServices(response.data))
          })
          .catch( response => {
               
          })

     },[]);
     
     const get_all_services = useSelector( state => state.getAllServices )

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
                                             <img src="/images/banner/banner-1.jpg" className="img-fluid banner-image" alt=""></img>
                                             <img src="/images/slider2-bg-bottom1.png" className="banner-bottom-image" alt="" />
                                        </div>
                                   </div>
                              </div>
                              {/* banner item end */}

                              {/* banner item start */}
                              <div className="item">
                                   <div className="col-md-12">
                                        <div className="banner_image_block">
                                             <img src="/images/banner/banner-2.jpg" className="img-fluid banner-image" alt=""></img>
                                             <img src="/images/slider2-bg-bottom1.png" className="banner-bottom-image" alt="" />
                                        </div>
                                   </div>
                              </div>
                              {/* banner item end */}
                              
                         </OwlCarousel>
                    </div>
                    {/* END REVOLUTION SLIDER */}

                    <div className="container">
                         <div className="appoinment-form" style={{ backgroundImage : `url('images/form-bg.jpg')` }}>
                              <div className="appoinment-title">
                                   <h4>Online Booking</h4>
                              </div>
                              <form action="#">
                                   <input type="text" placeholder="Your name*" />
                                   <input type="tel" placeholder="Mobile number*" />
                                   <input type="email" placeholder="Main Address" />
                                   <div className="select-field">
                                        <select>
                                             <option>Wash</option>
                                             <option>Wash & Iron</option>
                                             <option>Dry Cleaning</option>
                                             <option>Ironing</option>
                                             <option>Duvets & Bulky Items</option>
                                             <option>Deals</option>
                                        </select>
                                   </div>
                                   <textarea placeholder="Type message..." rows="8"></textarea>
                                   <button type="submit" className="laundro-primary-btn">
                                        Proceed<span><i className="fab fa-telegram-plane"></i></span>
                                   </button>
                              </form>
                         </div>
                    </div>
               </div>
               {/* Hero Slider End */}


               {/* Book Service Section start */}
               <section className="book-service">
                    <div className="container">
                         <div className="row book-service-row">

                              {/* section title */}
                              <div className="col-md-12 section-title">
                                   <h4>Fill All Information Details to Consult With Us To Get Sevices From Us</h4>
                              </div>

                              {/* form part */}
                              <div className="col-md-12 section-form">
                                   <form action="">
                                        <div className="row">

                                             {/* name */}
                                             <div className="col-md-5 col-12 form-group">
                                                  <input style={{
                                                           height: "55px",
                                                           marginTop: "0px"
                                                  }} type="text" name="" className="form-control" placeholder="Enter your name" />                                                 
                                             </div>

                                             {/* service */}
                                             <div className="col-md-5 col-12 form-group">
                                                  <select name="" className="form-control">
                                                       <option>Select Service</option>
                                                       <option>Wash</option>
                                                       <option>Wash & Iron</option>
                                                       <option>Dry Cleaning</option>
                                                       <option>Ironing</option>
                                                       <option>Duvets & Bulky Items</option>
                                                       <option>Deals</option>
                                                  </select>                                               
                                             </div>

                                             {/* button */}
                                             <div className="col-md-2 col-12 form-group">
                                                  <button className="book-now" type="submit">
                                                       Book Now
                                                  </button>                                              
                                             </div>


                                        </div>
                                   </form>
                              </div>

                         </div>
                    </div>
               </section>
               {/* Book Service Section end */}


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
                                        <div className="laundro-title-area">
                                             <span className="laundro-subtitle">About Cleaning Agency</span>
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
                                             <Link to="/about" className="laundro-primary-btn">View Details<span><i
                                                            className="fas fa-plus"></i></span></Link>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* About Section End */}

               {/* Services Section */}
               <section className="home2-service-section pt-100 pb-70" style={{ backgroundImage : `url('images/service-bg.jpg')` }}>
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-6 offset-lg-3">
                                   <div className="laundro-title-area text-center">
                                        <span className="laundro-subtitle">Featured services</span>
                                        <h3>We provide the best services <span>for your help!</span></h3>
                                        <p>
                                             As a app web crawler expert, I help organizations adjust to the
                                             expanding significance of internet promoting.
                                        </p>
                                   </div>
                              </div>
                         </div>
                         
                        
                         {
                              get_all_services && 
                              <OwlCarousel className='owl-theme home2-service-slider' 
                                   loop 
                                   items="3"
                                   nav="false"
                                   dots="true"
                                   {...service_options}
                                   
                              >
                                   {
                                        get_all_services.map( item => (
                                             <div className="item" key={item.id} >
                                                  <div className="service-single-item item">
                                                       <div className="img-wrapper">
                                                            <img src={`${window.image_path}/images/service/${item.icon}`} alt="" />
                                                       </div>
                                                       <div className="srv2-service-content">
                                                       <Link to={`/service-details/${item.slug}`}>
                                                                 <h5>{item.name}</h5>
                                                            </Link>
                                                            <p>
                                                                 {item.short_description.substring(0, 100)}...
                                                            </p>
                                                       </div>
                                                       <div className="srv2-hover-item" style={{ backgroundImage : `url('images/01.jpg')` }}>
                                                            <div className="img-wrapper">
                                                                 <img src={`${window.image_path}/images/service/${item.icon}`} alt="" />
                                                            </div>
                                                            <div className="srv2-service-content">
                                                                 <Link to={`/service-details/${item.slug}`}>
                                                                      <h5>{item.name}</h5>
                                                                 </Link>
                                                                 <p>
                                                                      {item.short_description.substring(0, 100)}...
                                                                 </p>
                                                                 <Link to={`/service-details/${item.slug}`} className="srv2-readmore-btn">
                                                                      Read More 
                                                                      <i className="fas fa-angle-right"></i>
                                                                 </Link>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        )) 
                                   }

                              </OwlCarousel>
                         }
                         

                         
                    </div>
               </section>
               {/* Service Section End */}



               {/* Skills Area */}
               <section className="home2-skills-area pb-50">
                    <div className="container">
                         <div className="row">

                              {
                                   get_all_services && get_all_services.slice(0,4).map( (item, key) => (
                                        
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                             <div className="home2-skills-column">
                                                  <div className="circle-wrap">
                                                       <div className="circle">
                                                            <div className="mask full">
                                                                 <div className="fill" style={{ transform: "rotate(100deg)" }} >
                                                                      
                                                                 </div>
                                                            </div>
                                                            <div className="mask half">
                                                                 <div className="fill" style={{ transform: "rotate(100deg)" }} ></div>
                                                            </div>
                                                            <div className="inside-circle">
                                                                 <img src={`${window.image_path}/images/service/${item.icon}`}  alt="" />   
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="skills-content">
                                                  <Link to="/service-details/Wash">
                                                            <h5>{item.name}</h5>
                                                       </Link>
                                                       <p>As a app web crawler expert, I help organizations.</p>
                                                  </div>
                                             </div>
                                        </div>
                                        
                                   ))
                              }
                              

                         </div>
                    </div>
               </section>
               {/* Skills area End */}

               {/* Steps Area */}
               <section className="home2-steps-area pb-100">
                    <div className="container">
                         <div className="steps-top">
                              <div className="row align-items-center">
                                   <div className="col-lg-6">
                                        <div className="laundro-title-area">
                                             <span className="laundro-subtitle">Steps to reach here</span>
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
                                   <Link to="/about" className="laundro-primary-btn">Read more to rech us</Link>
                              </div>
                         </div>
                    </div>
               </section>
               {/* Steps Area End */}

               {/* Faq Section */}
               <section className="home2-faq-area pt-100 pb-100" style={{ backgroundImage : `url('images/banner/banner-3.jpg')` }}>
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-6 offset-lg-6">
                                   <div className="faq-content">
                                        <div className="laundro-title-area">
                                             <span className="laundro-subtitle">FAQ</span>
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
               <section className="srv2-feedback-area pt-100 pb-100" style={{ backgroundImage : `url('images/feedback-bg.jpg')` }} >
                    <div className="container">
                         <div className="srv2-feedback-top">
                              <div className="row align-items-center">
                                   <div className="col-lg-6">
                                        <div className="laundro-title-area">
                                             <span className="laundro-subtitle">Clients Testimonial</span>
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

                         <OwlCarousel className='owl-theme srv2-feedback-wrapper srv2-feedback-slider' 
                              loop 
                              items="3"
                              nav="false"
                              dots="true"
                              {...service_options}
                              
                         >

                              <div className="item">
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
                              </div>

                              <div className="item">
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
                              </div>

                              <div className="item">
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
                              </div>

                              <div className="item">
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
                              </div>

                              <div className="item">
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

                         </OwlCarousel>

                    </div>
               </section>
               {/* Feedback Area End */}

               {/* Brand Area */}
               <div className="home2-brand-area pt-60 pb-60">
                    <div className="container">
                         <div className="brand-wrapper">

                              <OwlCarousel className='owl-theme row home2-brand-slider' 
                                   {...brand_options}
                                   
                              >

                                   <div className="item">
                                        <div className="brand-single">
                                             <div className="img-wrapper">
                                                  <img src="/images/brand-1.png" alt="" />
                                                  <img src="/images/brand-1.png" alt="" />
                                             </div>
                                        </div>
                                   </div>

                                   <div className="item">
                                        <div className="brand-single">
                                             <div className="img-wrapper">
                                                  <img src="/images/brand-2.png" alt="" />
                                                  <img src="/images/brand-2.png" alt="" />
                                             </div>
                                        </div>
                                   </div>

                                   <div className="item">
                                        <div className="brand-single">
                                             <div className="img-wrapper">
                                                  <img src="/images/brand-3.png" alt="" />
                                                  <img src="/images/brand-3.png" alt="" />
                                             </div>
                                        </div>
                                   </div>

                                   <div className="item">
                                        <div className="brand-single">
                                             <div className="img-wrapper">
                                                  <img src="/images/brand-4.png" alt="" />
                                                  <img src="/images/brand-4.png" alt="" />
                                             </div>
                                        </div>
                                   </div>

                                   <div className="item">
                                        <div className="brand-single">
                                             <div className="img-wrapper">
                                                  <img src="/images/brand-4.png" alt="" />
                                                  <img src="/images/brand-4.png" alt="" />
                                             </div>
                                        </div>
                                   </div>

                              </OwlCarousel>
                              
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
                                        <div className="laundro-title-area">
                                             <span className="laundro-subtitle">Featured Blog</span>
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

                         <OwlCarousel className='owl-theme home2-blog-slider' 
                              loop 
                              items="3"
                              nav="false"
                              dots="true"
                              {...service_options}
                              
                         >

                              <div className="item">
                                   <div className="blog-single-item">
                                        <div className="thumb-wrapper">
                                             <Link to="/"><img src="/images/blog-1.jpg" alt="" /></Link>
                                        </div>
                                        <div className="blog-content">
                                             <div className="blog-meta">
                                                  <span><i className="fas fa-calendar-alt"></i>September 12,2020</span>
                                                  <span><i className="fas fa-user"></i>Admin</span>
                                             </div>
                                             <div className="blog-title">
                                                  <Link to="/">
                                                       <h5>Regional Managers & tiem management.</h5>
                                                  </Link>
                                             </div>
                                             <div className="readmore-btn">
                                             <Link to="/">Read more <i className="fas fa-angle-double-right"></i></Link>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="item">
                                   <div className="blog-single-item">
                                        <div className="thumb-wrapper">
                                             <Link to="/"><img src="/images/blog-2.jpg" alt="" /></Link>
                                        </div>
                                        <div className="blog-content">
                                             <div className="blog-meta">
                                                  <span><i className="fas fa-calendar-alt"></i>September 12,2020</span>
                                                  <span><i className="fas fa-user"></i>Admin</span>
                                             </div>
                                             <div className="blog-title">
                                             <Link to="/">
                                                       <h5>Revitalising your people in a retail downturn.</h5>
                                                  </Link>
                                             </div>
                                             <div className="readmore-btn">
                                             <Link to="/">Read more <i className="fas fa-angle-double-right"></i></Link>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="item">
                                   <div className="blog-single-item">
                                        <div className="thumb-wrapper">
                                        <Link to="/"><img src="/images/blog-3.jpg" alt="" /></Link>
                                        </div>
                                        <div className="blog-content">
                                             <div className="blog-meta">
                                                  <span><i className="fas fa-calendar-alt"></i>September 12,2020</span>
                                                  <span><i className="fas fa-user"></i>Admin</span>
                                             </div>
                                             <div className="blog-title">
                                             <Link to="/">
                                                       <h5>Organisational teams are just like families.</h5>
                                                  </Link>
                                             </div>
                                             <div className="readmore-btn">
                                                  <Link to="/">Read more <i className="fas fa-angle-double-right"></i></Link>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="item">
                                   <div className="blog-single-item">
                                        <div className="thumb-wrapper">
                                        <Link to="/"><img src="/images/blog-1.jpg" alt="" /></Link>
                                        </div>
                                        <div className="blog-content">
                                             <div className="blog-meta">
                                                  <span><i className="fas fa-calendar-alt"></i>September 12,2020</span>
                                                  <span><i className="fas fa-user"></i>Admin</span>
                                             </div>
                                             <div className="blog-title">
                                             <Link to="/">
                                                       <h5>Regional Managers & tiem management.</h5>
                                                  </Link>
                                             </div>
                                             <div className="readmore-btn">
                                             <Link to="/">Read more <i className="fas fa-angle-double-right"></i></Link>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="item">
                                   <div className="blog-single-item">
                                        <div className="thumb-wrapper">
                                        <Link to="/"><img src="/images/blog-2.jpg" alt="" /></Link>
                                        </div>
                                        <div className="blog-content">
                                             <div className="blog-meta">
                                                  <span><i className="fas fa-calendar-alt"></i>September 12,2020</span>
                                                  <span><i className="fas fa-user"></i>Admin</span>
                                             </div>
                                             <div className="blog-title">
                                             <Link to="/">
                                                       <h5>Regional Managers & tiem management.</h5>
                                                  </Link>
                                             </div>
                                             <div className="readmore-btn">
                                             <Link to="/">Read more <i className="fas fa-angle-double-right"></i></Link>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                         </OwlCarousel>
                    </div>
               </section>
               {/* Blog Area End */}

               {/* Contact Area */}
               <section className="home2-contact-area">
                    <div className="container">
                         <div className="home2-git" style={{ backgroundImage : `url('images/contact-bg.jpg')` }}>
                              <div className="row">
                                   <div className="col-lg-7 order-2 order-lg-1">
                                        <div className="git-left">
                                             <div className="title">
                                                  <h3><span>Want to </span>Contact with us?</h3>
                                             </div>
                                             <div className="git-bottom">
                                                  <div className="phon-area">
                                                       <span className="git-title">Call us:</span>
                                                       <a href="tel:+88017XXXXXXXX"><span><i
                                                                      className="fas fa-phone-alt"></i></span>+88017XXXXXXXX</a>
                                                  </div>
                                                  <div className="git-txt">
                                                       or
                                                       <span></span>
                                                  </div>
                                                  <div className="mail-area">
                                                       <span className="git-title">Mail us:</span>
                                                       <a href="mailto:info@laundro.co.uk"><span><i
                                                                      className="fas fa-envelope"></i></span>info@laundro.co.uk</a>
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