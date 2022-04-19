
import { Link } from "react-router-dom";

//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import HeaderComponent from "./Includes/HeaderComponent";
import LeftSidebarComponent from "./Includes/LeftSidebarComponent";
import NavbarComponent from "./Includes/NavbarComponent";


const MyOrderComponent = () => {

     
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

                                             {/* order card start */}
                                             <div className="col-md-12">
                                                  <Link to="/order-details">
                                                       <div className="order-card">
                                                            <i className="fas fa-times"></i>
                                                            <div className="row">
                                                                 <div className="col-md-6">
                                                                      <div className="left-part">
                                                                           <p>Laundry Cleaning</p>
                                                                           <small>With Equipment</small>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="row order-card-footer">
                                                                 <div className="col-md-6 col-8">
                                                                      <div className="left-part">
                                                                           <ul>
                                                                                <li>
                                                                                     <i className="fas fa-calendar"></i>
                                                                                     2022-04-19
                                                                                </li>
                                                                                <li>
                                                                                     <i className="fas fa-clock"></i>
                                                                                     09:00
                                                                                </li>
                                                                           </ul>
                                                                      </div>
                                                                 </div>
                                                                 <div className="col-md-6 col-4">
                                                                      <div className="right-part">
                                                                           <button className="order-status">
                                                                                Pending
                                                                           </button>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </Link>
                                             </div>
                                             {/* order card end */}

                                             {/* order card start */}
                                             <div className="col-md-12">
                                                  <Link to="/order-details">
                                                       <div className="order-card">
                                                            <i className="fas fa-times"></i>
                                                            <div className="row">
                                                                 <div className="col-md-6">
                                                                      <div className="left-part">
                                                                           <p>Laundry Cleaning</p>
                                                                           <small>With Equipment</small>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="row order-card-footer">
                                                                 <div className="col-md-6 col-8">
                                                                      <div className="left-part">
                                                                           <ul>
                                                                                <li>
                                                                                     <i className="fas fa-calendar"></i>
                                                                                     2022-04-19
                                                                                </li>
                                                                                <li>
                                                                                     <i className="fas fa-clock"></i>
                                                                                     09:00
                                                                                </li>
                                                                           </ul>
                                                                      </div>
                                                                 </div>
                                                                 <div className="col-md-6 col-4">
                                                                      <div className="right-part">
                                                                           <button className="order-status">
                                                                                Pending
                                                                           </button>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </Link>
                                             </div>
                                             {/* order card end */}

                                             {/* order card start */}
                                             <div className="col-md-12">
                                                  <Link to="/order-details">
                                                       <div className="order-card">
                                                            <i className="fas fa-times"></i>
                                                            <div className="row">
                                                                 <div className="col-md-6">
                                                                      <div className="left-part">
                                                                           <p>Laundry Cleaning</p>
                                                                           <small>With Equipment</small>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            <div className="row order-card-footer">
                                                                 <div className="col-md-6 col-8">
                                                                      <div className="left-part">
                                                                           <ul>
                                                                                <li>
                                                                                     <i className="fas fa-calendar"></i>
                                                                                     2022-04-19
                                                                                </li>
                                                                                <li>
                                                                                     <i className="fas fa-clock"></i>
                                                                                     09:00
                                                                                </li>
                                                                           </ul>
                                                                      </div>
                                                                 </div>
                                                                 <div className="col-md-6 col-4">
                                                                      <div className="right-part">
                                                                           <button className="order-status">
                                                                                Pending
                                                                           </button>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </Link>
                                             </div>
                                             {/* order card end */}

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

export default MyOrderComponent;