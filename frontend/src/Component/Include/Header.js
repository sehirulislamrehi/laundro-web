
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = (props) => {

     // const [application_data, set_application_data] = useState(null)

     const dispatch = useDispatch();

     useEffect(() => {

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

     const openNav = () => {
          let a = document.querySelector(".mobile-nav__wrapper")
          a.classList.add("expanded")
     }

     const application_data = useSelector( state => state.applicationData )

     
     return(
          <div className="id">
               <header className="main-header clearfix">
                    <div className="main-header__top">
                         <div className="main-header__top-social-box">
                              <div className="container">
                              <div className="main-header__top-social-box-inner">
                                   <p className="main-header__top-social-text">Welcome to our Laundro Cleaning Services!</p>
                                   <div className="main-header__top-social">
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
                         </div>
                         <div className="main-header__top-details">
                              <div className="container">
                                   <div className="row">
                                        <div className="col-md-2">
                                             <div className="desktop-logo">
                                                  <Link to="/">
                                                       {
                                                            application_data &&
                                                            <img src={`${window.image_path}/images/info/${application_data.logo}`} className="img-fluid" alt=""></img>
                                                       }
                                                  </Link>
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
                                                                 <h5>
                                                                      {
                                                                           application_data &&
                                                                           <a href={application_data.email}>{application_data.email}</a>
                                                                      }
                                                                      
                                                                 </h5>
                                                                 <p>Send mail</p>
                                                            </div>
                                                       </li>
                                                       <li>
                                                            <div className="icon">
                                                                 <i className="fas fa-clock"></i>
                                                            </div>
                                                            {
                                                                 application_data &&
                                                                 <div className="text">
                                                                      <h5>{application_data.day}</h5>
                                                                      <p>{application_data.timing}</p>
                                                                 </div>
                                                            }  
                                                       </li>
                                                       <li>
                                                            <div className="icon">
                                                                 <i className="fas fa-phone"></i>
                                                            </div>
                                                            <div className="text">
                                                                 <h5>Call Anytime</h5>
                                                                 <p>
                                                                      {
                                                                           application_data &&
                                                                           <a href={`tel:+${application_data.phone}`}>{application_data.phone}</a>
                                                                      }
                                                                 </p>
                                                            </div>
                                                       </li>
                                                       <li>
                                                            <div className="icon">
                                                                 <i className="fas fa-map"></i>
                                                            </div>
                                                            {
                                                                 application_data &&
                                                                 <div className="text">
                                                                      <h5>{application_data.address}</h5>
                                                                      <p>{application_data.city}, {application_data.country}</p>
                                                                 </div>
                                                            }
                                                            
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
                                                  <a href="#" className="mobile-nav__toggler" onClick={openNav}><i className="fa fa-bars"></i></a>
                                                  <ul className="main-menu__list one-page-scroll-menu">
                                                       <li className="scrollToLink">
                                                            <Link to="/">Home</Link>
                                                       </li>
                                                       <li className="scrollToLink">
                                                            <Link to="/about">About</Link>
                                                       </li>
                                                       <li className="scrollToLink">
                                                            <Link to="/services">Services</Link>
                                                       </li>
                                                       <li className="scrollToLink">
                                                            <Link to="/contact">Contact</Link>
                                                       </li>
                                                       {
                                                            localStorage.getItem('token') ?
                                                            <li className="scrollToLink">
                                                                 <Link to="/dashboard">My Dashboard</Link>
                                                            </li> :
                                                            <li className="scrollToLink">
                                                                 <Link to="/login">Login</Link>
                                                            </li>
                                                       }
                                                       <li className="scrollToLink">
                                                            <Link to="/booking-1">Book Now</Link>
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
          </div>
     );
}

export default Header;