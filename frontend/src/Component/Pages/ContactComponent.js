
import { Link } from "react-router-dom";

//import pages
import DesktopMenu from "../Include/DesktopMenu";
import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";


const ContactComponent = () => {

     {/* window scroll to top */}
     window.scrollTo(0, 0);

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
                              <h1>Contact Us</h1>
                              <Link to="/">Home <i className="fas fa-angle-double-right"></i></Link>
                              <span>Contact Us</span>
                         </div>
                    </div>
               </div>
               {/* Breadcrumb End */}

               {/* Get In Tauch */}
               <section className="laundro-gta-area" style={{ backgroundImage: `url("/images/gt-bg.jpg")` }}>
                    <div className="container">
                         <div className="row align-items-center">
                              <div className="col-lg-6 offset-lg-6">
                                   <div className="laundro-gt-right">
                                        <h4>Get a estimate</h4>
                                        <form action="#">
                                             <input type="text" name="fname" placeholder="Your name*" required></input>
                                             <input type="tel" name="pnumber" placeholder="Phone Number..."></input>
                                             <div className="bx-form-select">
                                                  <select>
                                                       <option>Wash</option>
                                                       <option>Wash & Iron</option>
                                                       <option>Dry Cleaning</option>
                                                       <option>Ironing</option>
                                                       <option>Duvets & Bulky Items</option>
                                                       <option>Deals</option>
                                                  </select>
                                             </div>
                                             <textarea placeholder="Text..." rows="5"></textarea>
                                             <button type="submit" className="laundro-primary-btn submit-btn">Get a Quote <span><i className="fab fa-telegram-plane"></i></span></button>
                                        </form>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* Get In Tauch End */}


               {/* Contact Info */}
               <section class="laundro-contact-info pt-100 pb-70">
                    <div class="container">
                         <div class="row">
                              <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1">
                              <div class="laundro-title-area">
                                   <span class="laundro-subtitle">Get in touch</span>
                                   <h3>We want to shaare our location to find us easily.</h3>
                              </div>
                              </div>
                         </div>
                         <div class="laundro-contact-content">
                              <div class="row justify-content-center">
                              <div class="col-lg-4 col-md-6">
                                   <div class="laundro-contact-column">
                                        <div class="laundro-icon-wrapper">
                                             <i class="flaticon flaticon-pin"></i>
                                        </div>
                                        <div class="column-content">
                                             <h5>Office Address</h5>
                                             <p>Mrs Smith 71 Cherry Court SOUTHAMPTON SO53 5PD UK</p>
                                        </div>
                                   </div>
                              </div>
                              <div class="col-lg-4 col-md-6">
                                   <div class="laundro-contact-column">
                                        <div class="laundro-icon-wrapper">
                                             <i class="flaticon flaticon-phone"></i>
                                        </div>
                                        <div class="column-content">
                                             <h5>Telephone number</h5>
                                             <p>(+880)17XXXXXXXX</p>
                                        </div>
                                   </div>
                              </div>
                              <div class="col-lg-4 col-md-6">
                                   <div class="laundro-contact-column">
                                        <div class="laundro-icon-wrapper">
                                             <i class="flaticon flaticon-mail"></i>
                                        </div>
                                        <div class="column-content">
                                             <h5>Mail address</h5>
                                             <p>info@laundro.co.uk</p>
                                        </div>
                                   </div>
                              </div>
                              </div>
                         </div>
                    </div>
               </section>
               {/* End Contact Info */}


               {/* Footer */}
               <Footer></Footer>
               {/* Footer End */}

          </div>
     );
}

export default ContactComponent;