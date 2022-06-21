
import { Link } from "react-router-dom";

const Header = () => {

     

     const openNav = () => {
          let a = document.querySelector(".mobile-nav__wrapper")
          a.classList.add("expanded")
     }
     
     return(
          <div className="id">
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
                                                  <Link to="/">
                                                       <img src="/images/loader.png" className="img-fluid" alt=""></img>
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