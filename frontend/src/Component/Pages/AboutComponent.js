
//import pages
import DesktopMenu from "../Include/DesktopMenu";
import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";


const AboutComponent = () => {
     return(
          <div className="id">

                         
               {/* desktop menu start */}
               <DesktopMenu></DesktopMenu>
               {/* desktop menu end */}

               {/* Mobile Menu */}
               <MobileMenu></MobileMenu>
               {/* Mobile Menu End */}

               <section style={{
                    padding: "100px 0"
               }}>
                    <p style={{
                             textAlign : "center"
                         }}>Comming Soon</p>
               </section>

               {/* Footer */}
               <Footer></Footer>
               {/* Footer End */}

          </div>
     );
}

export default AboutComponent;