import { Link } from "react-router-dom";


//import pages
import DesktopMenu from "../Include/DesktopMenu";
import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllServices } from "../../action";


const ServicesComponent = () => {

     {/* window scroll to top */}
     window.scrollTo(0, 0);

     //INITIALIZATION
     const dispatch = useDispatch();


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

               {/* Breadcrumb Area */}
               <div className="laundro-breadcrumb" style={{ backgroundImage: `url('/images/breadcrumb.jpg')` }}>
                    <span className="breadcrumb-object"><img src="/images/slider-object.png" alt=""></img></span>
                    <div className="container">
                         <div className="breadcrumb-content">
                              <h1>Services</h1>
                              <Link to="/">Home <i className="fas fa-angle-double-right"></i></Link>
                              <span>Services</span>
                         </div>
                    </div>
               </div>
               {/* Breadcrumb End */}

               {/* Services */}
               <section className="laundro-services pt-150">
                    <div className="container">
                         <div className="laundro-service-wrapper">
                              <div className="row">

                                   {
                                        get_all_services && get_all_services.map( item => (
                                        <div className="col-lg-4 col-md-6" key={item.id}>
                                             <div className="laundro-single-item sr-item">
                                                  <div className="laundro-icon-wrapper">
                                                       <img src={`${window.image_path}/images/service/${item.icon}`} alt=""></img>
                                                  </div>
                                                  <div className="laundro-sr-content">
                                                       <Link to={`/service-details/${item.slug}`}><h6>{item.name}</h6></Link>
                                                       <p>{item.short_description.substring(0, 100)}...</p>
                                                       <Link to={`/service-details/${item.slug}`} className="laundro-readmore-btn">Read More</Link>
                                                  </div>
                                                  <div className="laundro-sr-hover">
                                                       <div className="img-wrapper">
                                                            <img src="/images/01.jpg" alt=""></img>
                                                            <span className="img-shadow"></span>
                                                       </div>
                                                       <div className="icon-wrapper">
                                                            <div className="laundro-img">
                                                            <img src={`${window.image_path}/images/service/${item.icon}`} alt=""></img>
                                                            </div>
                                                            <span className="laundro-icon-shadow"></span>
                                                       </div>
                                                       <div className="laundro-sr-content">
                                                            <Link to={`/service-details/${item.slug}`}><h6>{item.name}</h6></Link>
                                                            <p>{item.short_description.substring(0, 100)}...</p>
                                                            <Link to={`/service-details/${item.slug}`} className="laundro-readmore-btn">Read more</Link>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        ))
                                   }
                                   
                              
                              </div>
                         </div>
                    </div>
               </section>
               {/* Services End */}


               {/* Pricing Table */}
               <section className="laundro-pricing-table pb-150">
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-6 offset-lg-3">
                              <div className="laundro-title-area text-center">
                                   <span className="laundro-subtitle">Pricing Plan</span>
                                   <h3>We are offering the best <span>pricing to help you!</span></h3>
                                   <p>As a app web crawler expert, I help organizations adjust to the expanding significant of internet promoting.</p>
                              </div>
                              </div>
                         </div>
                         <div className="pricing-table-area">
                              <div className="pricing-nav">
                              <ul className="nav nav-tabs">
                                   <li><a href="#monthly" data-bs-toggle="tab" className="active">Monthly</a></li>
                                   <li><a href="#yearly" data-bs-toggle="tab">yearly</a></li>
                              </ul>
                              <span className="offer-price">Save 20%</span>
                              </div>
                              <div className="pricing-content">
                              <div className="tab-content">
                                   <div className="tab-pane show active" id="monthly">
                                        <div className="row justify-content-center">
                                             <div className="col-xl-3 col-lg-4 col-md-6">
                                                  <div className="pricing-column">
                                                  <div className="pc-top">
                                                       <h4>New Business</h4>
                                                       <span className="pc-subtitle">1-4 Employees</span>
                                                  </div>
                                                  <div className="pc-price">
                                                       <h2>$99</h2>
                                                  </div>
                                                  <div className="pc-icon-wrapper">
                                                       <img src="assets/images/home1/pc-icon-1.png" alt=""></img>
                                                  </div>
                                                  <div className="pc-list">
                                                       <p>Plus One-Time Bambee In-Depth Audit for. </p>
                                                       <span>$500</span>
                                                  </div>
                                                  <div className="pc-btn">
                                                       <a href="#">Try Now</a>
                                                  </div>
                                                  </div>
                                             </div>
                                             <div className="col-xl-3 col-lg-4 col-md-6">
                                                  <div className="pricing-column best-choise">
                                                  <div className="pc-top">
                                                       <span className="pc-top-title">Best choise</span>
                                                       <h4>small Business</h4>
                                                       <span className="pc-subtitle">5-19 Employees</span>
                                                  </div>
                                                  <div className="pc-price">
                                                       <h2>$199</h2>
                                                  </div>
                                                  <div className="pc-icon-wrapper">
                                                       <img src="assets/images/home1/pc-icon-2.png" alt=""></img>
                                                  </div>
                                                  <div className="pc-list">
                                                       <p>Plus One-Time Bambee In-Depth Audit for. </p>
                                                       <span>$500</span>
                                                  </div>
                                                  <div className="pc-btn">
                                                       <a href="#">Try Now</a>
                                                  </div>
                                                  </div>
                                             </div>
                                             <div className="col-xl-3 col-lg-4 col-md-6">
                                                  <div className="pricing-column">
                                                  <div className="pc-top">
                                                       <h4>Growing Business</h4>
                                                       <span className="pc-subtitle">20-39 Employees</span>
                                                  </div>
                                                  <div className="pc-price">
                                                       <h2>$299</h2>
                                                  </div>
                                                  <div className="pc-icon-wrapper">
                                                       <img src="assets/images/home1/pc-icon-3.png" alt=""></img>
                                                  </div>
                                                  <div className="pc-list">
                                                       <p>Plus One-Time Bambee In-Depth Audit for. </p>
                                                       <span>$1000</span>
                                                  </div>
                                                  <div className="pc-btn">
                                                       <a href="#">Try Now</a>
                                                  </div>
                                                  </div>
                                             </div>
                                             <div className="col-xl-3 col-lg-4 col-md-6">
                                                  <div className="pricing-column">
                                                  <div className="pc-top">
                                                       <h4>Large Business</h4>
                                                       <span className="pc-subtitle">Unlimited Employees</span>
                                                  </div>
                                                  <div className="pc-price">
                                                       <h2>$399</h2>
                                                  </div>
                                                  <div className="pc-icon-wrapper">
                                                       <img src="assets/images/home1/pc-icon-4.png" alt=""></img>
                                                  </div>
                                                  <div className="pc-list">
                                                       <p>Plus One-Time Bambee In-Depth Audit for. </p>
                                                       <span>$1500</span>
                                                  </div>
                                                  <div className="pc-btn">
                                                       <a href="#">Try Now</a>
                                                  </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="tab-pane" id="yearly">
                                        <div className="row justify-content-center">
                                             <div className="col-xl-3 col-lg-4 col-md-6">
                                                  <div className="pricing-column">
                                                  <div className="pc-top">
                                                       <h4>New Business</h4>
                                                       <span className="pc-subtitle">1-4 Employees</span>
                                                  </div>
                                                  <div className="pc-price">
                                                       <h2>$199</h2>
                                                  </div>
                                                  <div className="pc-icon-wrapper">
                                                       <img src="assets/images/home1/pc-icon-1.png" alt=""></img>
                                                  </div>
                                                  <div className="pc-list">
                                                       <p>Plus One-Time Bambee In-Depth Audit for. </p>
                                                       <span>$500</span>
                                                  </div>
                                                  <div className="pc-btn">
                                                       <a href="#">Try Now</a>
                                                  </div>
                                                  </div>
                                             </div>
                                             <div className="col-xl-3 col-lg-4 col-md-6">
                                                  <div className="pricing-column best-choise">
                                                  <div className="pc-top">
                                                       <span className="pc-top-title">Best choise</span>
                                                       <h4>small Business</h4>
                                                       <span className="pc-subtitle">5-19 Employees</span>
                                                  </div>
                                                  <div className="pc-price">
                                                       <h2>$259</h2>
                                                  </div>
                                                  <div className="pc-icon-wrapper">
                                                       <img src="assets/images/home1/pc-icon-2.png" alt=""></img>
                                                  </div>
                                                  <div className="pc-list">
                                                       <p>Plus One-Time Bambee In-Depth Audit for. </p>
                                                       <span>$500</span>
                                                  </div>
                                                  <div className="pc-btn">
                                                       <a href="#">Try Now</a>
                                                  </div>
                                                  </div>
                                             </div>
                                             <div className="col-xl-3 col-lg-4 col-md-6">
                                                  <div className="pricing-column">
                                                  <div className="pc-top">
                                                       <h4>Growing Business</h4>
                                                       <span className="pc-subtitle">20-39 Employees</span>
                                                  </div>
                                                  <div className="pc-price">
                                                       <h2>$999</h2>
                                                  </div>
                                                  <div className="pc-icon-wrapper">
                                                       <img src="assets/images/home1/pc-icon-3.png" alt=""></img>
                                                  </div>
                                                  <div className="pc-list">
                                                       <p>Plus One-Time Bambee In-Depth Audit for. </p>
                                                       <span>$1000</span>
                                                  </div>
                                                  <div className="pc-btn">
                                                       <a href="#">Try Now</a>
                                                  </div>
                                                  </div>
                                             </div>
                                             <div className="col-xl-3 col-lg-4 col-md-6">
                                                  <div className="pricing-column">
                                                  <div className="pc-top">
                                                       <h4>Large Business</h4>
                                                       <span className="pc-subtitle">Unlimited Employees</span>
                                                  </div>
                                                  <div className="pc-price">
                                                       <h2>$1299</h2>
                                                  </div>
                                                  <div className="pc-icon-wrapper">
                                                       <img src="assets/images/home1/pc-icon-4.png" alt=""></img>
                                                  </div>
                                                  <div className="pc-list">
                                                       <p>Plus One-Time Bambee In-Depth Audit for. </p>
                                                       <span>$1500</span>
                                                  </div>
                                                  <div className="pc-btn">
                                                       <a href="#">Try Now</a>
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
               {/* Pricing Table End */}


               {/* Footer */}
               <Footer></Footer>
               {/* Footer End */}

          </div>
     );
}

export default ServicesComponent;