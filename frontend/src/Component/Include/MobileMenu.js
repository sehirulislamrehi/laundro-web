
const MobileMenu = () => {
     return(
          <div className="id">
               <div className="bixol-mobile-menu">
                    <a href="index.html" className="mobile-menu-logo"><img src="/images/logo.png" alt="" /></a>
                    <ul>
                         <li>
                              <a href="">Home</a>
                         </li>
                         <li>
                              <a href="#">Services</a>
                         </li>
                         <li className="has-submenu">
                              <a href="#">Pages</a>
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
                    </ul>
               </div>
          </div>
     );
}

export default MobileMenu;