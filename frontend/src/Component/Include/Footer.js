
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Footer = () => {

     const [custom_page, set_custom_page] = useState(null);

     useEffect(() => {

          //get pages data
          const custom_pages_url = `${window.url}/custom-page`
          fetch(custom_pages_url,{
               method : "GET"
          })
          .then( response => response.json() )
          .then( response => {
               set_custom_page(response.data)
          })
          .catch( response => {
               
          }) 

     },[])

     return(
          <div className="id">

               {/*Google Map Start*/}
               <section className="google-map">
                    <iframe
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                         className="google-map__one" ></iframe>

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
                                   <img src="images/information-logo.png" alt=""></img>
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
                                             <a href="mailto:info@laundro.com">info@laundro.com</a>
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
                                                  <li><Link to="/">Home</Link></li>
                                                  <li><Link to="/about">About</Link></li>
                                                  <li><Link to="/services">Services</Link></li>
                                                  <li><Link to="/contact">Contact</Link></li>
                                                  <li><Link to="/booking-1">Book Now</Link></li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                        <div className="footer-widget__column footer-widget__links clearfix">
                                             <h3 className="footer-widget__title">Links</h3>
                                             <ul className="footer-widget__links-list list-unstyled clearfix">
                                                  <li><Link to="/faq">FAQ</Link></li>
                                                  {
                                                       custom_page && custom_page.map( item => (
                                                            <li><Link to={`/pages/${item.slug}`}>{item.name}</Link></li>
                                                       ))
                                                  }
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
                                             <p className="site-footer__bottom-text">
                                                  © Copyright 2022 by <a href="#">laundro.com</a>
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </footer>
               {/*Site Footer End*/}
               
          </div>
     );
}

export default Footer;