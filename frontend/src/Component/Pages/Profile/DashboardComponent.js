
import { Link } from "react-router-dom";

//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import HeaderComponent from "./Includes/HeaderComponent";
import LeftSidebarComponent from "./Includes/LeftSidebarComponent";
import NavbarComponent from "./Includes/NavbarComponent";


const DashboardComponent = () => {


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
                                        <div className="row">

                                             {/* item start */}
                                             <div className="col-md-4 col-6">
                                                  <div className="dashboard-item-card" style={{
                                                       "background" : "rgb(168 251 232)"
                                                  }}>
                                                       <p>Total Order</p>  
                                                       <strong>01</strong>  
                                                  </div>                                              
                                             </div>

                                             {/* item start */}
                                             <div className="col-md-4 col-6">
                                                  <div className="dashboard-item-card" style={{
                                                       "background" : "rgb(202 206 255)"
                                                  }}>
                                                       <p>Today's Order</p>  
                                                       <strong>00</strong>  
                                                  </div>                                              
                                             </div>

                                             {/* item start */}
                                             <div className="col-md-4 col-6">
                                                  <div className="dashboard-item-card" style={{
                                                       "background" : "rgb(251 255 186)"
                                                  }}>
                                                       <p>Pending Order</p>  
                                                       <strong>01</strong>  
                                                  </div>                                              
                                             </div>

                                             {/* item start */}
                                             <div className="col-md-4 col-6">
                                                  <div className="dashboard-item-card" style={{
                                                       "background" : "rgb(193 255 177)"
                                                  }}>
                                                       <p>Confirm Order</p>  
                                                       <strong>00</strong>  
                                                  </div>                                              
                                             </div>

                                             {/* item start */}
                                             <div className="col-md-4 col-6">
                                                  <div className="dashboard-item-card" style={{
                                                       "background" : "rgb(253 228 249)"
                                                  }}>
                                                       <p>Completed Order</p>  
                                                       <strong>00</strong>  
                                                  </div>                                              
                                             </div>

                                             {/* item start */}
                                             <div className="col-md-4 col-6">
                                                  <div className="dashboard-item-card" style={{
                                                       "background" : "rgb(255 174 174)"
                                                  }}>
                                                       <p>Cancelled Order</p>  
                                                       <strong>01</strong>  
                                                  </div>                                              
                                             </div>

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

export default DashboardComponent;