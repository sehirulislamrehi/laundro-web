
//import pages

import DesktopMenu from "../Include/DesktopMenu";
import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";


const NotFoundComponent = () => {
     return(
          <div className="id">
               {/* desktop menu start */}
               <DesktopMenu></DesktopMenu>
               {/* desktop menu end */}

               {/* Mobile Menu */}
               <MobileMenu></MobileMenu>
               {/* Mobile Menu End */}

               {/* please wait section start */}
               <section className="please-wait" >
                    <img src="/images/404.png" alt=""/>
               </section>
               {/* please wait section end */}

               {/* Footer */}
               <Footer></Footer>
               {/* Footer End */}
          </div> 
     );
};

export default NotFoundComponent;