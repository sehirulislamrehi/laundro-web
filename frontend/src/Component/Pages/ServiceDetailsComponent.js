
import { Link } from "react-router-dom";
import { useParams } from "react-router";

//import pages
import DesktopMenu from "../Include/DesktopMenu";
import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";


const ServiceDetailsComponent = () => {
     {/* window scroll to top */}
     window.scrollTo(0, 0);

     const { slug } =  useParams();


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
                              <h1>{slug}</h1>
                              <Link to="/">Home <i className="fas fa-angle-double-right"></i></Link>
                              <span>{slug}</span>
                         </div>
                    </div>
               </div>
               {/* Breadcrumb End */}

              {/* service details */}
               <section className="service-details pt-100 pb-100">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-3">
                                   <div className="sr-sidebar">
                                        <div className="sidebar-widget sr-list-widget">
                                             <div className="widget-title">
                                                  <h5>{slug}</h5>
                                             </div>
                                             <div className="list-nav">
                                                  <ul>
                                                       <li><Link to="/service-details/House Cleaning" className="active">House Cleaning</Link></li>
                                                       <li><Link to="/service-details/Apartment Cleaning">Apartment Cleaning</Link></li>
                                                       <li><Link to="/service-details/Carpet Cleaning">Carpet Cleaning</Link></li>
                                                       <li><Link to="/service-details/Commercial Cleaning">Commercial Cleaning</Link></li>
                                                       <li><Link to="/service-details/Window Cleaning">Window Cleaning</Link></li>
                                                       <li><Link to="/service-details/Custain Cleaning">Custain Cleaning</Link></li>
                                                  </ul>
                                             </div>
                                        </div>
                                        <div className="sidebar-widget sr-btn-widget" style={{ backgroundImage: `url("/images/sr-widget-bg.jpg")` }}>
                                             <span className="subtitle">PDF Files</span>
                                             <h5>Download Brochures</h5>
                                             <div className="download-btns">
                                                  <a href="#" className="btn-1">Company Brochure<span><i className="far fa-file-pdf"></i> </span></a>
                                                  <a href="#" className="btn-2">Company Brochure<span><i className="far fa-file-pdf"></i> </span></a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-9">
                                   <div className="sr-details-content">
                                        <Link to={`/booking-1/${slug}`} className="book-now-button">
                                             Book Now
                                        </Link>
                                        <div className="title-txt">
                                             <h3>{slug}</h3>
                                        </div>
                                        <div className="pera-text mt-20">
                                             <p>As a app web crawler expert, I help organizations adjust to the expanding significance of internet
                                                  promoting.  or lipsum as it is sometimes known, is dummy text used in laying out print, grap or web
                                                  designs. USA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office and ware
                                                  house clients…courteously, responsively.
                                                  </p>
                                        </div>
                                        <div className="pera-txt mt-20">
                                             <p>USA champions professionalism in the cleaning industry by providing top-quality cleaning and related services that meet and exceed the expectations of today’s demanding corporate, office, industrial and warehouse clients…courteously, responsively, responsibly, dependably, economically and on-time.
                                                  We provide janitorial.</p>
                                        </div>
                                        <div className="pera-txt mt-20">
                                             <p>A neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you.</p>
                                        </div>

                                        <div className="sr-details-bottom mt-40">
                                             <div className="row">
                                                  <div className="col-lg-6">
                                                       <div className="sr-details-left">
                                                       <div className="title-txt">
                                                            <h4>Service Overview</h4>
                                                       </div>
                                                       <div className="pera-txt mt-20">
                                                            <p>A neatly maintained building is an important asset to every organization. It reflects who you are and influences how your customers perceive you to complete depending on the size.</p>
                                                       </div>
                                                       <div className="pera-txt mt-20">
                                                            <p>Condition of your home. We work in teams of 2-4 or more. A team leader or the owner.</p>
                                                       </div>
                                                       <div className="srd-list mt-20">
                                                            <ul>
                                                                 <li><i className="fas fa-check"></i><p>The housekeepers we hired are professionals who take pride in doing excellent work and in exceeding expectations.</p></li>
                                                                 <li><i className="fas fa-check"></i><p>We carefully screen all of our cleaners, so you can rest assured that your home would receive the absolute highest quality of service providing.</p></li>
                                                                 <li><i className="fas fa-check"></i><p>Your time is precious, and we understand that cleaning is really just one more item on your to-do list.</p></li>
                                                            </ul>
                                                       </div>
                                                       </div>
                                                  </div>
                                                  <div className="col-lg-6">
                                                       <div className="srd-right-img">
                                                       <img src="/images/srd-img.png" alt=""></img>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
              {/* Service Details End */}


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
                                                       <option value="plumbing">Plumbing Service</option>
                                                       <option value="office">Office cleaning</option>
                                                       <option value="laundry">Laundry Service</option>
                                                       <option value="toilet">Toilet Cleaning</option>
                                                       <option value="kichen">Kitchen cleaning</option>
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


               {/* Case Study */}
               <div className="laundro-case-study">
                    <div className="container">
                         <div className="row align-items-center">
                              <div className="col-lg-6">
                              <div className="laundro-ct-left" style={{ backgroundImage : `url("/images/map-bg.png")` }}>
                                   <span className="ct-title">80<sup>+</sup></span>
                                   <span className="ct-subtitle">Partners in world wide</span>
                              </div>
                              </div>
                              <div className="col-lg-6">
                              <div className="laundro-ct-right">
                                   <div className="row">
                                        <div className="col-md-4 col-sm-6 p-0 grid-item">
                                             <div className="laundro-pt-item">
                                                  <img src="/images/partner-1.png" alt=""></img>
                                             </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 p-0 grid-item">
                                             <div className="laundro-pt-item">
                                                  <img src="/images/partner-2.png" alt=""></img>
                                             </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 p-0 grid-item">
                                             <div className="laundro-pt-item">
                                                  <img src="/images/partner-3.png" alt=""></img>
                                             </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 p-0 grid-item">
                                             <div className="laundro-pt-item">
                                                  <img src="/images/partner-4.png" alt=""></img>
                                             </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 p-0 grid-item">
                                             <div className="laundro-pt-item">
                                                  <img src="/images/partner-5.png" alt=""></img>
                                             </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 p-0 grid-item">
                                             <div className="laundro-pt-item">
                                                  <img src="/images/partner-6.png" alt=""></img>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              </div>
                         </div>
                    </div>
               </div>
               {/* Case Study End */}


               {/* Footer */}
               <Footer></Footer>
               {/* Footer End */}

          </div>
     );
}

export default ServiceDetailsComponent;