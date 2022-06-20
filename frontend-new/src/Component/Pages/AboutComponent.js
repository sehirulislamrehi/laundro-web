
import { Link } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//import pages

import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
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

               <div className="custom-cursor__cursor"></div>
               <div className="custom-cursor__cursor-two"></div>

               <div className="page-wrapper">


                    <header className="main-header clearfix">
                         <div className="main-header__top">
                              <div className="main-header__top-social-box">
                                   <div className="container">
                                   <div className="main-header__top-social-box-inner">
                                        <p className="main-header__top-social-text">Welcome to our Laundro Cleaning Services!</p>
                                        <div className="main-header__top-social">
                                             <a href=""><i className="fab fa-twitter"></i></a>
                                             <a href=""><i className="fab fa-facebook"></i></a>
                                             <a href=""><i className="fab fa-pinterest-p"></i></a>
                                             <a href=""><i className="fab fa-instagram"></i></a>
                                        </div>
                                   </div>
                                   </div>
                              </div>
                              <div className="main-header__top-details">
                                   <div className="container">
                                        <div className="row">
                                             <div className="col-md-2">
                                                  <div className="desktop-logo">
                                                       <a href="">
                                                            <img src="images/loader.png" className="img-fluid" alt=""></img>
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="col-md-10">
                                                  <div className="main-header__top-details-inner">
                                             
                                                       <ul className="list-unstyled main-header__top-details-list">
                                                            <li>
                                                                 <div className="icon">
                                                                      <i className="fas fa-envelope"></i>
                                                                 </div>
                                                                 <div className="text">
                                                                      <h5><a href="mailto:laundro@company.com">laundro@company.com</a></h5>
                                                                      <p>Send mail</p>
                                                                 </div>
                                                            </li>
                                                            <li>
                                                                 <div className="icon">
                                                                      <i className="fas fa-clock"></i>
                                                                 </div>
                                                                 <div className="text">
                                                                      <h5>Mon to Sat</h5>
                                                                      <p>08am - 09pm</p>
                                                                 </div>
                                                            </li>
                                                            <li>
                                                                 <div className="icon">
                                                                      <i className="fas fa-phone"></i>
                                                                 </div>
                                                                 <div className="text">
                                                                      <h5>Call Anytime</h5>
                                                                      <p><a href="tel:+2300068603">+23 (000) 68 603</a></p>
                                                                 </div>
                                                            </li>
                                                            <li>
                                                                 <div className="icon">
                                                                      <i className="fas fa-map"></i>
                                                                 </div>
                                                                 <div className="text">
                                                                      <h5>88 Kilda Broklyn Road</h5>
                                                                      <p>New York, USA</p>
                                                                 </div>
                                                            </li>
                                                       </ul>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <nav className="main-menu clearfix">
                              <div className="main-menu__wrapper clearfix">
                                   <div className="container">
                                        <div className="main-menu__wrapper-inner clearfix">
                                             <div className="main-menu__left">
                                                  <div className="main-menu__main-menu-box">
                                                       <a href="#" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                                                       <ul className="main-menu__list one-page-scroll-menu">
                                                            <li className="scrollToLink">
                                                                 <Link to="/">Home</Link>
                                                            </li>
                                                            <li className="scrollToLink">
                                                                 <Link to="/about">About</Link>
                                                            </li>
                                                            <li className="scrollToLink">
                                                                 <a href="">Services</a>
                                                            </li>
                                                            <li className="scrollToLink">
                                                                 <a href="">Contact</a>
                                                            </li>
                                                            <li className="scrollToLink">
                                                                 <a href="">Login</a>
                                                            </li>
                                                            <li className="scrollToLink">
                                                                 <a href="">Book Now</a>
                                                            </li>
                                                       </ul>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </nav>
                    </header>

                    <div className="stricky-header stricked-menu main-menu">
                         <div className="sticky-header__content"></div>
                    </div>


                    {/*Google Map Start*/}
                    <section className="google-map">
                         <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                              className="google-map__one" allowfullscreen></iframe>

                    </section>
                    {/*Google Map End*/}

                    {/*Information Start*/}
                    <section className="information">
                         <div className="container">
                              <div className="information__inner">
                                   <div className="information__logo-box">
                                   <div className="information__border-1"></div>
                                   <div className="information__border-2"></div>
                                   <a href="index.html">
                                        <img src="images//information-logo.png" alt=""></img>
                                   </a>
                                   </div>
                                   <ul className="list-unstyled information__list">
                                   <li>
                                        <div className="information__icon">
                                             <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="information__content">
                                             <p className="information__sub-title">Call anytime</p>
                                             <h5 className="information__number">
                                                  <a href="tel:2300068603">+23 (000) 68 603</a>
                                             </h5>
                                        </div>
                                   </li>
                                   <li>
                                        <div className="information__icon">
                                             <i className="fas fa-envelope"></i>
                                        </div>
                                        <div className="information__content">
                                             <p className="information__sub-title">Send email</p>
                                             <h5 className="information__number">
                                                  <a href="mailto:laundro@company.com">laundro@company.com</a>
                                             </h5>
                                        </div>
                                   </li>
                                   <li>
                                        <div className="information__icon">
                                             <i className="fas fa-map"></i>
                                        </div>
                                        <div className="information__content">
                                             <p className="information__sub-title">Visit office</p>
                                             <h5 className="information__number">88 Kilda Broklyn Road</h5>
                                        </div>
                                   </li>
                                   </ul>
                              </div>
                         </div>
                    </section>
                    {/*Information End*/}

                    {/*Site Footer Start*/}
                    <footer className="site-footer">
                         <div className="site-footer-shape-1"
                         style={{
                              backgroundImage : `url(images/site-footer-shape-1.png)`
                         }}>
                         </div>
                         <div className="site-footer-shape-two">
                              <img src="images/site-footer-shape-2.png" alt=""></img>
                         </div>
                         <div className="site-footer__top">
                              <div className="container">
                                   <div className="row">
                                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                             <div className="footer-widget__column footer-widget__about">
                                                  <h3 className="footer-widget__title">Explore</h3>
                                                  <div className="footer-widget__about-text-box">
                                                       <p className="footer-widget__about-text">Tincidunt elit magnis nulla facilisis sagittis
                                                            maecenas. Sapien nunced amet dolores.</p>
                                                  </div>
                                                  <div className="site-footer__social">
                                                       <a href="#"><i className="fab fa-twitter"></i></a>
                                                       <a href="#"><i className="fab fa-facebook"></i></a>
                                                       <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                                       <a href="#"><i className="fab fa-instagram"></i></a>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                             <div className="footer-widget__column footer-widget__links clearfix">
                                                  <h3 className="footer-widget__title">Links</h3>
                                                  <ul className="footer-widget__links-list list-unstyled clearfix">
                                                       <li><a href="about.html">About</a></li>
                                                       <li><a href="team.html">Meet Our Team</a></li>
                                                       <li><a href="about.html">What We Do</a></li>
                                                       <li><a href="contact-page-1.html">Our Pricing</a></li>
                                                       <li><a href="contact-page-2.html">Contact</a></li>
                                                  </ul>
                                             </div>
                                        </div>
                                        <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                             <div className="footer-widget__column footer-widget__links clearfix">
                                                  <h3 className="footer-widget__title">Links</h3>
                                                  <ul className="footer-widget__links-list list-unstyled clearfix">
                                                       <li><a href="about.html">About</a></li>
                                                       <li><a href="team.html">Meet Our Team</a></li>
                                                       <li><a href="about.html">What We Do</a></li>
                                                       <li><a href="contact-page-1.html">Our Pricing</a></li>
                                                       <li><a href="contact-page-2.html">Contact</a></li>
                                                  </ul>
                                             </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                             <div className="footer-widget__column footer-widget__newsletter">
                                                  <h3 className="footer-widget__title">Newsletter</h3>
                                                  <p className="footer-widget__newsletter-text">Subscribe our newsletter to get <br></br> our
                                                       latest update & news</p>
                                                  <form className="footer-widget__newsletter-form">
                                                       <div className="footer-widget__newsletter-input-box">
                                                            <input type="email" placeholder="Email address" name="email"></input>
                                                            <button type="submit" className="footer-widget__newsletter-btn"><i
                                                                 className="far fa-paper-plane"></i></button>
                                                       </div>
                                                  </form>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="site-footer__bottom">
                              <div className="container">
                                   <div className="row">
                                        <div className="col-xl-12">
                                             <div className="site-footer__bottom-inner">
                                                  <p className="site-footer__bottom-text">© Copyright 2022 by <a href="#">laundro.com</a>
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </footer>
                    {/*Site Footer End*/}
                    
               </div>

         </div>
     );
}

export default AboutComponent;