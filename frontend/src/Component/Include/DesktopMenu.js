
import { Link } from "react-router-dom";

const DesktopMenu = () => {
     return(
          <div className="id">

               {/* Preloader Starts */}
               <div id="ct-loadding">
                    <div className="loading-infinity">
                         <div><span></span></div>
                         <div><span></span></div>
                         <div><span></span></div>
                    </div>
               </div>
               {/* Preloader End */}

               {/* ScrollTop Button */}
               <a href="#" className="scrolltop-btn"><span><i className="fas fa-arrow-up"></i></span></a>

               
               {/* Home 2 Header  */}
               <header className="bixol-header header-style-2">
                    <div className="info-bar">
                         <div className="container">
                              <div className="row">
                                   <div className="col-lg-9 col-md-9">
                                        <div className="info-left">
                                             <span><i className="flaticon-telephone"></i><strong>Call for
                                                       help : </strong> (+880)1858361812</span>
                                             <span><i className="flaticon-chat-box"></i><strong>Mail
                                                       us : </strong> mdsehirulislamrehi@gmail.com</span>
                                        </div>
                                   </div>
                                   <div className="col-lg-3 col-md-3">
                                        <div className="header-social">
                                             <a href=""><i className="fab fa-facebook-f"></i></a>
                                             <a href=""><i className="fab fa-twitter"></i></a>
                                             <a href=""><i className="fab fa-linkedin"></i></a>
                                             <a href=""><i className="fab fa-instagram"></i></a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="header-bottom">
                         <div className="container">
                              <div className="row align-items-center">
                                   <div className="col-1">
                                        <div className="logo-wrapper">
                                             <Link to="/" className="desktop-logo">
                                                  <img src="/images/logo.png" alt="" />
                                             </Link>
                                        </div>
                                   </div>
                                   <div className="col-lg-8 desktop-menu-wrapper">
                                        <div className="desktop-menu">
                                             <nav>
                                                  <ul>
                                                       <li>
                                                            <Link to="/about">About</Link>
                                                       </li>
                                                       <li >
                                                            <a href="">Services</a>
                                                       </li>
                                                       <li className="has-submenu">
                                                            <a href="">Pages</a>
                                                            <ul>
                                                                 <li><a href="">About</a></li>
                                                                 <li><a href="">About V2</a></li>
                                                                 <li><a href="">Faq</a></li>
                                                                 <li><a href="">Pricing</a></li>
                                                                 <li><a href="">Team</a></li>
                                                                 <li><a href="">Reviews</a></li>
                                                                 <li><a href="">404 page</a></li>
                                                                 <li><a href="">Coming Soon</a></li>
                                                            </ul>
                                                       </li>
                                                       <li>
                                                            <a href="">Portfolio</a>
                                                       </li>
                                                       <li>
                                                            <a href="">Blog</a>
                                                       </li>
                                                       <li>
                                                            <a href="">Contact</a>
                                                       </li>
                                                  </ul>
                                             </nav>
                                        </div>
                                   </div>
                                   <div className="col-lg-3 col-11">
                                        <div className="header-right">
                                             <div className="header-search">
                                                  <form action="#">
                                                       <input type="text" placeholder="Search" />
                                                       <button type="submit"><i className="fas fa-search"></i></button>
                                                  </form>
                                             </div>
                                             <div className="bixol-mobile-hamburger">
                                                  <span></span>
                                                  <span></span>
                                                  <span></span>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </header>
               {/* Header Area End */}
          </div>
     );
}

export default DesktopMenu;