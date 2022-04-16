

import { Link } from "react-router-dom";

//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";


const RegisterComponent = () => {

     {/* window scroll to top */}
     window.scrollTo(0, 0);
     
     return(
          <div className="id">

               {/* desktop menu start */}
               <DesktopMenu></DesktopMenu>
               {/* desktop menu end */}

               {/* Mobile Menu */}
               <MobileMenu></MobileMenu>
               {/* Mobile Menu End */}

               <div className="user-card round5">
                    <div className="login-box">
                         <div className="card-title">
                              <h4>Register</h4>
                         </div>
                         <form className="login-form" name="login" action="">
                              <input type="text" name="name" className="name" placeholder="Enter your name" />
                              <input type="text" name="phone" className="phone" placeholder="Phone Number" />
                              <input type="password" name="password" className="password" placeholder="Password" />
                              <input type="password" name="password_confirmation" className="password" placeholder="Confirm Password" />
                              <input type="submit" name="register" value="Register" className="login" />
                         </form>

                         <div className="or"></div>

                         <a href="" className="login-with-fb">
                              <i className="fab fa-facebook-f"></i>
                              Login with facebook
                         </a>
                         <a href="" className="login-with-google">
                              <i className="fab fa-google"></i>
                              Login with google
                         </a>
                    </div>

                    {/* Card Footer */}

                    <div className="footer">
                         <span>or </span><Link className="toggle-link" to="/login">Sign In</Link>
                    </div>
               </div>


               {/* Footer */}
               <Footer></Footer>
               {/* Footer End */}

          </div>
     );
}

export default RegisterComponent;