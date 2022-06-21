import { Link } from "react-router-dom";


import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//import pages
import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";
import Header from "../Include/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllServices } from "../../action";


const ServicesComponent = () => {

     const testimonial_options = {
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
                    items: 2,
               },
               1000: {
                    items: 3,
               }
          },
     };

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

               <MobileMenu></MobileMenu>

               <div className="page-wrapper">

                   <Header></Header>

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
                                   <li>Services</li>
                              </ul>
                              <h2>Services</h2>
                         </div>
                         </div>
                    </section>
                    {/*Page Header End*/}


                    <section className="services-page-2">
                         <div className="container">
                              <div className="section-title text-center">
                                   <span className="section-title__tagline">What We’re Offering</span>
                                   <h2 className="section-title__title">Providing the Best Services <br></br> for Our Customers</h2>
                              </div>
                              <div className="row">

                                   {/*Services Three Single Start-*/}
                                   {
                                        get_all_services && get_all_services.map(item => (
                                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="100ms" 
                                             style={{
                                                  visibility : "visible",
                                                  animationDelay: "100ms",
                                                  animationName: "fadeInUp"
                                             }}>
                                             <div className="services-three__single">
                                                  <div className="services-three__img-box">
                                                       <div className="services-three__img">
                                                            <img src="images/services/services-3-2.jpg" alt=""></img>
                                                       </div>
                                                       <div className="services-three__icon">
                                                            <img src={`${window.image_path}/images/service/${item.icon}`} alt=""></img>
                                                       </div>
                                                       <div className="services-three__bubble">
                                                            <img src="images/services/services-three-bubble.png" alt=""></img>
                                                       </div>
                                                  </div>
                                                  <div className="services-three__content">
                                                       <h3 className="services-three__title">
                                                            <Link to={`/service-details/${item.slug}`}>
                                                            {item.name}
                                                            </Link>
                                                       </h3>
                                                       <p className="services-three__text">{item.short_description.substring(0, 50)}...</p>
                                                       <div className="services-three__btn-box">
                                                            <Link to={`/service-details/${item.slug}`} className="services-three__btn">read more</Link>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        ))
                                   }
                                   {/*Services Three Single End-*/}

                              </div>
                         </div>
                    </section>


                    <section className="call-one">
                         <div className="call-one-shape-1" style={{backgroundImage: `url(images/call-one-shape-1.png)`}}>
                         </div>
                         <div className="call-one-shape-2" style={{backgroundImage: `url(images/call-one-shape-2.png)`}}>
                         </div>
                         <div className="container">
                              <div className="call-one__inner">
                                   <div className="call-one__text-box">
                                   <p className="call-one__text">Call us to Take an Extraordinary Service!</p>
                                   </div>
                                   <div className="call-one__call-number">
                                   <a href="tel:2300068603"> <i className="fas fa-phone-alt"></i> +23 (000) 68 603</a>
                                   </div>
                              </div>
                         </div>
                    </section>
                    

                    {/*Testimonial Two Start*/}
                    <section className="testimonial-two">
                         <div className="testimonial-two-shape-1"
                              style={{backgroundImage: `url(images/testimonial-two-shape-1.png)`}}></div>
                         <div className="testimonial-two-bubble"
                              style={{backgroundImage: `url(images/testimonial-two-bubble.png)`}}></div>
                         <div className="testimonial-two-star-1 zoominout">
                              <img src="images/testimonial-two-star-1.png" alt=""></img>
                         </div>
                         <div className="testimonial-two-star-2 zoominout">
                              <img src="images/testimonial-two-star-2.png" alt=""></img>
                         </div>
                         <div className="testimonial-two-star-3 zoominout-2">
                              <img src="images/testimonial-two-star-3.png" alt=""></img>
                         </div>
                         <div className="testimonial-two-star-4 zoominout">
                              <img src="images/testimonial-two-star-4.png" alt=""></img>
                         </div>
                         <div className="testimonial-two-star-5 zoom-fade">
                              <img src="images/testimonial-two-star-5.png" alt=""></img>
                         </div>
                         <div className="testimonial-two__container">
                              <div className="section-title text-center">
                                   <span className="section-title__tagline">What They’re Saying</span>
                                   <h2 className="section-title__title">Some Feedbacks <br></br> from Our Customers</h2>
                              </div>
                              <div className="row">
                                   <div className="col-xl-12">
                                        <div className="testimonial-one__inner">

                                             <OwlCarousel className='owl-theme thm-owl__carousel testimonial-one__carousel' 
                                                  {...testimonial_options}
                                             >
                                                  {/*Testimonial One Single Start*/}
                                                  <div className="item">
                                                       <div className="testimonial-one__single">
                                                            <p className="testimonial-one__text">Lorem ipsum dolor sit amet, consectetur elit sed,
                                                                 adipisicing do eiusmod tempor incididunt labore et dolore Lorem ipsum dolor
                                                                 consectetur adipisicing elit, sed do eiusmod</p>
                                                            <div className="testimonial-one__client-details">
                                                                 <h3 className="testimonial-one__client-name">Kevin Martin</h3>
                                                                 <p className="testimonial-one__client-sub-title">Marketing Manager</p>
                                                            </div>
                                                            <div className="testimonial-one__client-img">
                                                                 <img src="images/testimonial-1-1.jpg" alt=""></img>
                                                                 <div className="testimonial-one__client-img-boxs"></div>
                                                            </div>
                                                            <div className="testimonial-one__quote">
                                                                 <i className="fas fa-quote-right"></i>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  {/*Testimonial One Single End*/}

                                                  {/*Testimonial One Single Start*/}
                                                  <div className="item">
                                                       <div className="testimonial-one__single">
                                                            <p className="testimonial-one__text">Lorem ipsum dolor sit amet, consectetur elit sed,
                                                                 adipisicing do eiusmod tempor incididunt labore et dolore Lorem ipsum dolor
                                                                 consectetur adipisicing elit, sed do eiusmod</p>
                                                            <div className="testimonial-one__client-details">
                                                                 <h3 className="testimonial-one__client-name">Jessica Brown</h3>
                                                                 <p className="testimonial-one__client-sub-title">Marketing Manager</p>
                                                            </div>
                                                            <div className="testimonial-one__client-img">
                                                                 <img src="images/testimonial-1-2.jpg" alt=""></img>
                                                                 <div className="testimonial-one__client-img-boxs"></div>
                                                            </div>
                                                            <div className="testimonial-one__quote">
                                                                 <i className="fas fa-quote-right"></i>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  {/*Testimonial One Single End*/}

                                                  {/*Testimonial One Single Start*/}
                                                  <div className="item">
                                                       <div className="testimonial-one__single">
                                                            <p className="testimonial-one__text">Lorem ipsum dolor sit amet, consectetur elit sed,
                                                                 adipisicing do eiusmod tempor incididunt labore et dolore Lorem ipsum dolor
                                                                 consectetur adipisicing elit, sed do eiusmod</p>
                                                            <div className="testimonial-one__client-details">
                                                                 <h3 className="testimonial-one__client-name">Jessica Brown</h3>
                                                                 <p className="testimonial-one__client-sub-title">Marketing Manager</p>
                                                            </div>
                                                            <div className="testimonial-one__client-img">
                                                                 <img src="images/testimonial-1-3.jpg" alt=""></img>
                                                                 <div className="testimonial-one__client-img-boxs"></div>
                                                            </div>
                                                            <div className="testimonial-one__quote">
                                                                 <i className="fas fa-quote-right"></i>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  {/*Testimonial One Single End*/}

                                             </OwlCarousel>

                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/*Testimonial Two End*/}

                    <Footer></Footer>
                    
               </div>

          </div>
     );
}

export default ServicesComponent;