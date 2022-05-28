
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import HeaderComponent from "./Includes/HeaderComponent";
import LeftSidebarComponent from "./Includes/LeftSidebarComponent";
import NavbarComponent from "./Includes/NavbarComponent";


const OrderDetailsComponent = () => {

     let [check_authorized, set_authorized] = useState('unauthorized');

     const history = useHistory();

     //manage session
     const manage_session_url = `${window.url}/manage-session`;

     useEffect(() => {

          //send request to the server for manage session
          const options_for_manage_session_request = {
               method: 'GET'
          };
          fetch(manage_session_url,options_for_manage_session_request)
          .then( response => response.json() )
          .then( data => {
               if( data.status == 'error' ){
                    history.push('/login')
                    set_authorized('unauthorized');
               }
               if( data.status == 'success' ){
                    set_authorized('authorized');
               }

          })

     })

     if( check_authorized && check_authorized == "authorized" ){

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
                                        
                                        <div className="profile-body booking-details">

                                             <div className="row">


                                                  <div className="col-md-8">
                                                       <div className="row">

                                                            <div className="col-md-12 title">
                                                                 <h4>Booking Details</h4>
                                                            </div>

                                                            <div className="col-md-12 mt-4">
                                                                 {/* progressbar */}
                                                                 <ul id="progressbar">
                                                                      <li className="active">Confirmed</li>
                                                                      <li className="active">Assigned</li>
                                                                      <li className="active">In Process</li>
                                                                      <li>Completed</li>
                                                                 </ul>
                                                            </div>

                                                            <div className="col-md-12">
                                                                 <div className="row booking-status">

                                                                      <div className="col-md-12">
                                                                           <div className="image">
                                                                                <img src="/images/booking-1.png" className="img-fluid" alt="" />
                                                                           </div>
                                                                      </div>

                                                                      <div className="col-md-12">
                                                                           <div className="content">
                                                                                <h4>Booking Confirmed</h4>
                                                                                <p>
                                                                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                                                                                </p>
                                                                           </div>
                                                                      </div>

                                                                 </div>
                                                            </div>

                                                       </div>
                                                  </div>   

                                                  {/* booking summary start */}
                                                  <div className="col-md-4 ">
                                                       <div className="booking-summary">
                                                            <h4>Booking Summary</h4>
                                                            <table>
                                                                 <tbody>
                                                                      <tr>
                                                                           <td>Service Type</td>
                                                                           <td>Laundry Cleaning</td>
                                                                      </tr>
                                                                      <tr>
                                                                           <td>Material</td>
                                                                           <td>Yes</td>
                                                                      </tr>
                                                                      <tr>
                                                                           <td>Duration</td>
                                                                           <td>2 Hour</td>
                                                                      </tr>
                                                                      <tr>
                                                                           <td>Number of maids</td>
                                                                           <td>1</td>
                                                                      </tr>
                                                                 </tbody>
                                                            </table>

                                                            <h4 className="mt-3">Date & Times</h4>
                                                            <table>
                                                                 <tbody>
                                                                      <tr>
                                                                           <td>Sunday, October 14, 2022</td>
                                                                      </tr>
                                                                      <tr>
                                                                           <td>10:00 AM</td>
                                                                      </tr>
                                                                 </tbody>
                                                            </table>

                                                            <h4 className="mt-3">Address</h4>
                                                            <table>
                                                                 <tbody>
                                                                      <tr>
                                                                           <td>Mohakhali TB Gate, Dhaka - Bangladesh</td>
                                                                      </tr>
                                                                 </tbody>
                                                            </table>

                                                            <h4 className="mt-3">Price Details</h4>
                                                            <table>
                                                                 <tbody>
                                                                      <tr>
                                                                           <td>Service Cose</td>
                                                                           <td>100 BDT</td>
                                                                      </tr>
                                                                      <tr>
                                                                           <td>VAT</td>
                                                                           <td>10 BDT</td>
                                                                      </tr>
                                                                      <tr className="total-amount">
                                                                           <td>Total</td>
                                                                           <td>110 BDT</td>
                                                                      </tr>
                                                                 </tbody>
                                                            </table>
                                                       </div>
                                                  </div>                   
                                                  {/* booking summary end */}

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
}

export default OrderDetailsComponent;