
import { Link } from "react-router-dom";
import { useParams } from "react-router";

//import pages
import DesktopMenu from "../Include/DesktopMenu";
import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

const ServiceDetailsComponent = () => {
     {/* window scroll to top */}
     window.scrollTo(0, 0);

     const { slug } =  useParams();
     const [service, setService] = useState(null);

     useEffect( () => {

          //service details
          const service_details_url = `${window.url}/service-details/${slug}`;

          fetch(service_details_url,{
               method : "GET"
          })
          .then( response => response.json() )
          .then( response => {
               if( response.status == "success" ){
                    setService(response.data)
               }
               if( response.status == "warning" ){
                    
               }
               if( response.status == "error" ){
                    
               }
          })
          .catch( response => {
               
          })

     },[]);

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
                              <h1>{service && service.name}</h1>
                              <Link to="/">Home <i className="fas fa-angle-double-right"></i></Link>
                              <span>{service && service.name}</span>
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
                                                  <h5>{service && service.name}</h5>
                                             </div>
                                             <div className="list-nav">
                                                  <ul>
                                                       {
                                                            service && service.children.map( item => (
                                                                 <li>
                                                                      <Link to={`/service-details/${item.slug}`} className="active">{item.name}</Link>
                                                                 </li>
                                                            ))
                                                       }
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
                                             <h3>{service && service.name}</h3>
                                        </div>
                                        <div className="pera-text mt-20">
                                             <p>
                                                  {service && service.short_description}
                                             </p>
                                        </div>

                                        <div className="sr-details-bottom mt-40">
                                             <div className="row">
                                                  <div className="col-lg-6">
                                                       <div className="sr-details-left">
                                                            <div className="title-txt">
                                                                 <h4>Service Overview</h4>
                                                            </div>
                                                            <div className="pera-txt mt-20" dangerouslySetInnerHTML={{ __html: service && DOMPurify.sanitize(service.service_overview) }}>
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
               
               



               {/* Footer */}
               <Footer></Footer>
               {/* Footer End */}

          </div>
     );
}

export default ServiceDetailsComponent;