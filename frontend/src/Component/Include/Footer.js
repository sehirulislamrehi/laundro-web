
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const Footer = () => {

     const [custom_page, set_custom_page] = useState(null);
     // const [application_data, set_application_data] = useState(null)

     const dispatch = useDispatch();

     const application_data = useSelector( state => state.applicationData )

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

          //get application data
          // const get_application_data_url = `${window.url}/application-data`;
          // fetch(get_application_data_url,{
          //      method : "GET"
          // })
          // .then( response => response.json() )
          // .then( response => {
          //      set_application_data(response.data)
          // })
          // .catch( response => {
               
          // })

     },[])

     const [email, set_email] = useState('');
     const doSubscribe = () => {
          if( email ){
               let subscribe_url = `${window.url}/do-subscribe`;
               let formData = new FormData();

               formData.append('email', email);

               fetch(subscribe_url, {
                    method : "POST",
                    body : formData
               })
               .then( response => response.json() )
               .then( response => {
                    if( response.status == 'success' ){
                         MySwal.fire({
                              title : "Success",
                              text : `${response.data}`,
                         })
                    }
                    if( response.status == 'validation_error' ){
                         MySwal.fire({
                              title : "Warning",
                              text : `${response.data.email[0]}`,
                         })
                    }
     
               })
               .catch( response => {

               })
          }
          else{
               MySwal.fire({
                    title : "Warning",
                    text : `Please enter an email address`,
               })
          }
     }

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
                                   <Link to="/">
                                        {
                                             application_data &&
                                             <img src={`${window.image_path}/images/info/${application_data.logo}`} className="img-fluid" alt=""></img>
                                        }
                                   </Link>
                              </div>
                              <ul className="list-unstyled information__list">
                              <li>
                                   <div className="information__icon">
                                        <i className="fas fa-phone"></i>
                                   </div>
                                   <div className="information__content">
                                        <p className="information__sub-title">Call anytime</p>
                                        <h5 className="information__number">
                                             {
                                                  application_data &&
                                                  <a href={`tel:+${application_data.phone}`}>{application_data.phone}</a>
                                             }
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
                                             {
                                                  application_data &&
                                                  <a href={application_data.email}>{application_data.email}</a>
                                             }
                                        </h5>
                                   </div>
                              </li>
                              <li>
                                   <div className="information__icon">
                                        <i className="fas fa-map"></i>
                                   </div>
                                   <div className="information__content">
                                        <p className="information__sub-title">Visit office</p>
                                        <h5 className="information__number">
                                             {
                                                  application_data && application_data.address
                                             }
                                        </h5>
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
                                                  {
                                                       application_data &&
                                                       <a href={application_data.facebook_link} target="_blank">
                                                            <i className="fab fa-facebook"></i>
                                                       </a>
                                                  }
                                                  {
                                                       application_data &&
                                                       <a href={application_data.twitter_link} target="_blank">
                                                            <i className="fab fa-twitter"></i>
                                                       </a>
                                                  }
                                                  {
                                                       application_data &&
                                                       <a href={application_data.linkedin_link} target="_blank">
                                                            <i className="fab fa-linkedin"></i>
                                                       </a>
                                                  }
                                                  {
                                                       application_data &&
                                                       <a href={application_data.youtube_link} target="_blank">
                                                            <i className="fab fa-youtube"></i>
                                                       </a>
                                                  }
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
                                                       <input type="email" onChange={ e => set_email(e.target.value) } placeholder="Email address" name="email"></input>
                                                       <button type="button" onClick={doSubscribe} className="footer-widget__newsletter-btn"><i
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