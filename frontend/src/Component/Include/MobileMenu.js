
import { Link } from "react-router-dom";


const MobileMenu = () => {
     return(
          <div className="id">
               <div className="bixol-mobile-menu">
                    <Link to="/" className="mobile-menu-logo"><img src="/images/logo.png" alt="" /></Link>
                    <ul>
                         <li>
                              <Link to="/about">
                                   About
                              </Link>
                         </li>
                         <li>
                              <Link to="/about">Services</Link>
                         </li>
                         <li className="has-submenu">
                              <a href="#">Pages</a>
                              <ul>
                                   <li>
                                        <Link to="/about">
                                             About
                                        </Link>
                                   </li>
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
                    </ul>
               </div>
          </div>
     );
}

export default MobileMenu;