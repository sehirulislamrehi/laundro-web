
import { Link } from "react-router-dom";


const MobileMenu = () => {


     const closeNav = () => {
          let a = document.querySelector(".mobile-nav__wrapper.expanded")
          a.classList.remove("expanded")
     }

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
               <div className="mobile-nav__wrapper ">
                    <div className="mobile-nav__overlay mobile-nav__toggler" ></div>
                    {/* /.mobile-nav__overlay */}
                    <div className="mobile-nav__content">
                         <span className="mobile-nav__close mobile-nav__toggler" onClick={closeNav}>
                              <i className="fa fa-times"></i>
                         </span>

                         <div className="logo-box">
                              <a href="index.html" aria-label="logo image">
                                   <img src="images/logo.png" width="89" alt="" />
                              </a>
                         </div>
                         {/* /.logo-box */}
                         <div className="mobile-nav__container">
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
                         {/* /.mobile-nav__container */}

                         <ul className="mobile-nav__contact list-unstyled">
                              <li>
                                   <i className="fa fa-envelope"></i>
                                   <a href="mailto:info@laundro.com">info@laundro.com</a>
                              </li>
                              <li>
                                   <i className="fa fa-phone-alt"></i>
                                   <a href="tel:666-888-0000">666 888 0000</a>
                              </li>
                         </ul>{/* /.mobile-nav__contact */}
                         <div className="mobile-nav__top">
                              <div className="mobile-nav__social">
                                   <a href="#" className="fab fa-twitter"></a>
                                   <a href="#" className="fab fa-facebook-square"></a>
                                   <a href="#" className="fab fa-pinterest-p"></a>
                                   <a href="#" className="fab fa-instagram"></a>
                              </div>{/* /.mobile-nav__social */}
                         </div>{/* /.mobile-nav__top */}



                    </div>
                    {/* /.mobile-nav__content */}
               </div>
          </div>
     );
}

export default MobileMenu;