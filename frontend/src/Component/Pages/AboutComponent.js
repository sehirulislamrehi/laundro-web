
import { Link } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//import pages

import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Header from "../Include/Header";
import { getAllServices } from "../../action";


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

     var cursor = document.querySelector('.custom-cursor__cursor');
     var cursorinner = document.querySelector('.custom-cursor__cursor-two');
     var a = document.querySelectorAll('a');

     document.addEventListener('mousemove', function (e) {
          var x = e.clientX;
          var y = e.clientY;
          if( cursor ){
          cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
          }
     });

     document.addEventListener('mousemove', function (e) {
          var x = e.clientX;
          var y = e.clientY;
          if( cursorinner ){
               cursorinner.style.left = x + 'px';
               cursorinner.style.top = y + 'px';
          }
     });

     document.addEventListener('mousedown', function () {
          if( cursor ){
          cursor.classList.add('click'); 
          }
          if( cursorinner ){
          cursorinner.classList.add('custom-cursor__innerhover')  
          }
          
     });

     document.addEventListener('mouseup', function () {
          if( cursor ){
          cursor.classList.remove('click')
          }
          if( cursorinner ){
          cursorinner.classList.remove('custom-cursor__innerhover') 
          }
          
     });

     a.forEach(item => {
          item.addEventListener('mouseover', () => {
          if( cursor ){
               cursor.classList.add('custom-cursor__hover');
          }
          
          });
          item.addEventListener('mouseleave', () => {
          if( cursor ){
               cursor.classList.remove('custom-cursor__hover');
          }
          
          });
     })

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
                                   <li>About</li>
                              </ul>
                              <h2>About us</h2>
                         </div>
                         </div>
                    </section>
                    {/*Page Header End*/}

                    {/*Get To Know Start*/}
                    <section className="get-to-know">
                         <div className="get-to-know-bubble float-bob-x">
                              <img src="images/get-to-know-bubble.png" alt=""></img>
                         </div>
                         <div className="container">
                              <div className="row">
                                   <div className="col-xl-6">
                                        <div className="get-to-know__left">
                                             <div className="get-to-know__img wow slideInLeft" data-wow-delay="100ms"
                                                  data-wow-duration="2500ms">
                                                  <img src="images/get-to-know-img-1.jpg" alt=""></img>
                                                  <div className="get-to-know-shape-1"></div>
                                                  <div className="get-to-know-shape-2"></div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-xl-6">
                                        <div className="get-to-know__right">
                                             <div className="section-title text-left">
                                                  <span className="section-title__tagline">Company Benefits</span>
                                                  <h2 className="section-title__title">Get to Know About Our Brote Company</h2>
                                             </div>
                                             <p className="get-to-know__text">Lorem ipsum is simply free text dolor sit am adipi we help you
                                                  ensure everyone. Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien nunced
                                                  amet dolores sit ipsum velit purus aliq massa fringilla leo.</p>
                                             <div className="get-to-know__points-box">
                                                  <ul className="list-unstyled get-to-know__points">
                                                  <li>
                                                       <div className="icon">
                                                            <i className="fas fa-check"></i>
                                                       </div>
                                                       <div className="text">
                                                            <p>We are Committed</p>
                                                       </div>
                                                  </li>
                                                  <li>
                                                       <div className="icon">
                                                            <i className="fas fa-check"></i>
                                                       </div>
                                                       <div className="text">
                                                            <p>Highly Rated Cleaning</p>
                                                       </div>
                                                  </li>
                                                  </ul>
                                                  <ul className="list-unstyled get-to-know__points get-to-know__points--two">
                                                  <li>
                                                       <div className="icon">
                                                            <i className="fas fa-check"></i>
                                                       </div>
                                                       <div className="text">
                                                            <p>We are Committed</p>
                                                       </div>
                                                  </li>
                                                  <li>
                                                       <div className="icon">
                                                            <i className="fas fa-check"></i>
                                                       </div>
                                                       <div className="text">
                                                            <p>Highly Rated Cleaning</p>
                                                       </div>
                                                  </li>
                                                  </ul>
                                             </div>
                                             <a href="about.html" className="thm-btn get-to-know__btn">Discover more <i
                                                  className="fa fa-angle-right"></i></a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/*Get To Know End*/}


                    {/*Counter One Start*/}
                    <section className="counter-two">
                         <div className="container">
                              <div className="counter-two__inner">
                                   <ul className="list-unstyled counter-two__list">
                                        <li>
                                             <div className="counter-two__icon">
                                                  <span className="icon-laundry-1"></span>
                                             </div>
                                             <div className="counter-two__count-box">
                                                  <div className="counter-two__count-box-inner">
                                                  <h3 className="odometer" data-count="2562">00</h3>
                                                  <span className="counter-two__plus">+</span>
                                                  </div>
                                                  <p className="counter-two__text">Satisfied Clients</p>
                                             </div>
                                        </li>
                                        <li>
                                             <div className="counter-two__icon">
                                                  <span className="icon-wipe"></span>
                                             </div>
                                             <div className="counter-two__count-box">
                                                  <div className="counter-two__count-box-inner">
                                                  <h3 className="odometer" data-count="562">00</h3>
                                                  <span className="counter-two__plus">+</span>
                                                  </div>
                                                  <p className="counter-two__text">Active Project</p>
                                             </div>
                                        </li>
                                        <li>
                                             <div className="counter-two__icon">
                                                  <span className="icon-trophy"></span>
                                             </div>
                                             <div className="counter-two__count-box">
                                                  <div className="counter-two__count-box-inner">
                                                  <h3 className="odometer" data-count="33">00</h3>
                                                  <span className="counter-two__plus">+</span>
                                                  </div>
                                                  <p className="counter-two__text">Winning Award</p>
                                             </div>
                                        </li>
                                        <li>
                                             <div className="counter-two__icon">
                                                  <span className="icon-teamwork"></span>
                                             </div>
                                             <div className="counter-two__count-box">
                                                  <div className="counter-two__count-box-inner">
                                                  <h3 className="odometer" data-count="552">00</h3>
                                                  <span className="counter-two__plus">+</span>
                                                  </div>
                                                  <p className="counter-two__text">Expert Teams</p>
                                             </div>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </section>
                    {/*Counter One End*/}

                    {/*CTA One Start*/}
                    <section className="cta-one">
                         <div className="cta-one-bg-bg">
                              <div className="cta-one-bg jarallax" data-jarallax data-speed="0.2"
                                   style={{
                                        backgroundImage: `url(images/cta-one-bg.jpg)`
                                   }}></div>
                              </div>
                              <div className="cta-one-shape" 
                              style={{
                                   backgroundImage: `url(images/cta-one-shape.png)`
                              }}></div>
                              <div className="container">
                              <div className="cta-one__inner">
                                   <h2 className="cta-one__title">Get professional & affortable <br></br> house cleaner <span>today</span></h2>
                                   <div className="cta-one__btn-box">
                                        <a href="about.html" className="thm-btn cta-one__btn-1">Discover more <i
                                                  className="fa fa-angle-right"></i></a>
                                        <a href="contact-page-1.html" className="thm-btn cta-one__btn-2">Get a free quote <i
                                                  className="fa fa-angle-right"></i></a>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/*CTA One End*/}

                    <Footer></Footer>
                    
               </div>

          </div>
     );
}

export default AboutComponent;