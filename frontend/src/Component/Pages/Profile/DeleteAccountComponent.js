
import { Link } from "react-router-dom";

//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import HeaderComponent from "./Includes/HeaderComponent";
import LeftSidebarComponent from "./Includes/LeftSidebarComponent";
import NavbarComponent from "./Includes/NavbarComponent";


const DeleteAccountComponent = () => {


     return(
          <div className="id">
               {/* desktop menu start */}
               <DesktopMenu></DesktopMenu>
               {/* desktop menu end */}

               {/* Mobile Menu */}
               <MobileMenu></MobileMenu>
               {/* Mobile Menu End */}

               <section className="profile">
                    <div className="container">

                         {/* header component */}
                         <HeaderComponent></HeaderComponent>

                         <div className="main-bd">

                              {/* left sidebar */}
                              <LeftSidebarComponent></LeftSidebarComponent>
                              
                              {/* https://codepen.io/brightprogrammer/pen/mdyMOGV */}
                              <div className="right-side">

                                   {/* navbar component */}
                                   <NavbarComponent></NavbarComponent>
                                   
                                   <div className="profile-body">
                                       <div className="row my-account">
                                            <p>
                                                  When you delete your Laundro account, you won't be able to retrieve the content or information that you've shared on Laundro.
                                            </p>
                                            <Link to="/login" className="">
                                                  Delete Account
                                            </Link>
                                       </div>
                                   </div>
                                   
                              </div>
                         </div>
                    </div>
               </section>

               {/* Footer */}
               <Footer></Footer>
               {/* Footer End */}
          </div>
     );
}

export default DeleteAccountComponent;