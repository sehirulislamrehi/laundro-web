
import { Link } from "react-router-dom";

//import pages
import DesktopMenu from "../Include/DesktopMenu";
import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";


const ContactComponent = () => {

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

               {/* Breadcrumb Area */}
               <div className="bixol-breadcrumb" style={{ backgroundImage: `url('images/breadcrumb.jpg')` }}>
                    <span className="breadcrumb-object"><img src="/images/slider-object.png" alt=""></img></span>
                    <div className="container">
                         <div className="breadcrumb-content">
                              <h1>Contact Us</h1>
                              <Link to="/">Home <i className="fas fa-angle-double-right"></i></Link>
                              <span>Contact Us</span>
                         </div>
                    </div>
               </div>
               {/* Breadcrumb End */}

               {/* Breadcrumb Start */}
               <section style={{
                    padding: "100px"
               }}>
                    <h4 style={{
                         textAlign: "center"
                    }}>
                         Comming Soon
                    </h4>
               </section>
               {/* Breadcrumb End */}

               {/* Footer */}
               <Footer></Footer>
               {/* Footer End */}

          </div>
     );
}

export default ContactComponent;