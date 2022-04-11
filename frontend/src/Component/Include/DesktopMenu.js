
import { Link } from "react-router-dom";

const DesktopMenu = () => {


     function openPopup(){
          let bixol_mobile_menu = document.getElementsByClassName("bixol-mobile-menu")[0];

          

          if( bixol_mobile_menu.classList.contains("mobile-menu-active") == true ){
               bixol_mobile_menu.classList.remove("mobile-menu-active")
          }
          else{
               bixol_mobile_menu.classList.add("mobile-menu-active")
          }
     }

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
                                                            <Link to="/about">Services</Link>
                                                       </li>
                                                       <li className="has-submenu">
                                                            <Link to="/about">Pages</Link>
                                                            <ul>
                                                                 <li><Link to="/about">About</Link></li>
                                                                 <li><Link to="/about">About V2</Link></li>
                                                                 <li><Link to="/about">Faq</Link></li>
                                                                 <li><Link to="/about">Pricing</Link></li>
                                                                 <li><Link to="/about">Team</Link></li>
                                                                 <li><Link to="/about">Reviews</Link></li>
                                                                 <li><Link to="/about">404 page</Link></li>
                                                                 <li><Link to="/about">Coming Soon</Link></li>
                                                            </ul>
                                                       </li>
                                                       <li>
                                                            <Link to="/about">Portfolio</Link>
                                                       </li>
                                                       <li>
                                                            <Link to="/about">Blog</Link>
                                                       </li>
                                                       <li>
                                                            <Link to="/about">Contact</Link>
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
                                             <div className="bixol-mobile-hamburger" onClick={openPopup}>
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