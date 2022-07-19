
import { Link } from "react-router-dom";
import { useParams } from "react-router";

//import pages

import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import Header from "../Include/Header";
import ServiceList from "./Includes/ServiceList";

const ServiceDetailsComponent = (props) => {
     {/* window scroll to top */}
     window.scrollTo(0, 0);

     const { slug } =  useParams();
     const [service, setService] = useState(null);

     //service details
     const service_details_url = `${window.url}/service-details/${slug}`;

     useEffect( () => {

          

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

     },[service_details_url]);


     return(
          <div className="id">

               <MobileMenu ></MobileMenu>

               <div className="page-wrapper">

                   <Header ></Header>

                   {/*Page Header Start*/}
                    <section className="page-header">
                         <div className="page-header-bg" style={{
                              backgroundImage : `url(images/page-header-bg.jpg)`
                         }}>
                         </div>
                         <div className="page-header-bubble"><img src="images/page-header-bubble.png" alt=""></img></div>
                         <div className="container">
                         <div className="page-header__inner">
                              <ul className="thm-breadcrumb list-unstyled">
                                   <li><Link to="/">Home</Link></li>
                                   <li><span>/</span></li>
                                   <li><Link to="/services">Services</Link></li>
                                   <li><span>/</span></li>
                                   <li>{service && service.name}</li>
                              </ul>
                              <h2>{service && service.name}</h2>
                         </div>
                         </div>
                    </section>
                    {/*Page Header End*/}


                    <section className="service-details">
                         <div className="container">
                              <div className="row">
                                   <div className="col-xl-4 col-lg-5">
                                        <div className="service-details__left">
                                             <div className="service-details__category">
                                                  <h4 className="service-details__category-title">Services</h4>
                                                  <ul className="service-details__category-list list-unstyled">
                                                       <ServiceList service={service && service}></ServiceList>
                                                  </ul>
                                             </div>
                                             <div className="service-details__need-help">
                                                  <div className="service-details__need-help-bg" style={{
                                                       backgroundImage: `url(images/service-details-need-help-bg.jpg)`
                                                  }}>
                                                  </div>
                                                  <div className="service-details__need-help-icon">
                                                       <i className="fas fa-phone"></i>
                                                  </div>
                                                  <h2 className="service-details__need-help-title">Best Solution <br></br> to Laundro Cleaning</h2>
                                                  <div className="service-details__need-help-contact">
                                                       <p>Call anytime</p>
                                                       <a href="tel:2300068603"> +23 (000) 68 603</a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-xl-8 col-lg-7">
                                        <div className="service-details__right">
                                             <div className="service-details__img">
                                                  {
                                                       service ? <img src={`${window.image_path}/images/service/${service.image}`} alt=""></img> : <img src="/images/services-details-img-1.jpg" alt=""></img>
                                                  }
                                             </div>
                                             <div className="service-details__content">
                                                  <h3 className="service-details__content-title">{service && service.name}</h3>
                                                  <p className="service-details__text-1">
                                                       {service && service.short_description}
                                                  </p>
                                             </div>
                                             <div className="service-details__points-box">
                                                  <div className="row pricing">

                                                       <div className="col-md-12 title">
                                                            <h4>Pricing</h4>
                                                       </div>
                                                                                
                                                       {
                                                            service && 
                                                            ( service.service_durations.length > 0 ) ?
                                                            service.service_durations.map( item => (
                                                            <div className="col-md-3 col-6" key={item.id}>
                                                                 <div className="item">
                                                                      <img src={`${window.image_path}/images/service/${service.icon}`} alt=""></img>
                                                                      <p>{item.instructions}</p>                              
                                                                      <p>{item.price} BDT</p> 
                                                                 </div>  
                                                            </div>
                                                            )) :
                                                            <div className="col-md-12">
                                                                 <div className="item">
                                                                      <p>No pricing found</p>
                                                                 </div>
                                                            </div>
                                                       }
                                                  </div>
                                             </div>
                                             <div className="service-details__benefits">
                                                  <div className="row">
                                                       <div className="col-xl-6">
                                                            <div className="service-details__benefits-img">
                                                                 {
                                                                      service ? <img src={`${window.image_path}/images/service/${service.image}`} alt=""></img> : <img src="/images/services-details-img-1.jpg" alt=""></img>
                                                                 }
                                                            </div>
                                                       </div>
                                                       <div className="col-xl-6">
                                                            <div className="service-details__benefits-right">
                                                            <h3 className="service-details__benefits-title">Our Benefits</h3>
                                                            <p className="service-betails__benefits-text-1">Duis aute irure dolor in
                                                                 reprehenderit in voluptate velit esse cillum.</p>
                                                            <ul className="list-unstyled service-details__benefits-points">
                                                                 <li>
                                                                      <div className="icon">
                                                                           <i className="fa fa-check"></i>
                                                                      </div>
                                                                      <div className="text">
                                                                           <p>Praesent efficitur quam sit amet</p>
                                                                      </div>
                                                                 </li>
                                                                 <li>
                                                                      <div className="icon">
                                                                           <i className="fa fa-check"></i>
                                                                      </div>
                                                                      <div className="text">
                                                                           <p>Nunc cursus dolor id purus euismod</p>
                                                                      </div>
                                                                 </li>
                                                                 <li>
                                                                      <div className="icon">
                                                                           <i className="fa fa-check"></i>
                                                                      </div>
                                                                      <div className="text">
                                                                           <p>Quisque tincidunt eros ac place viverra</p>
                                                                      </div>
                                                                 </li>
                                                            </ul>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>


                    <Footer ></Footer>
                    
               </div>

          </div>
     );
}

export default ServiceDetailsComponent;