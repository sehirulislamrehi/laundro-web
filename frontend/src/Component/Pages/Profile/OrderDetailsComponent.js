
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import HeaderComponent from "./Includes/HeaderComponent";
import LeftSidebarComponent from "./Includes/LeftSidebarComponent";
import NavbarComponent from "./Includes/NavbarComponent";
import { useParams } from "react-router-dom";


const OrderDetailsComponent = () => {

     let [check_authorized, set_authorized] = useState('unauthorized');

     const history = useHistory();
     const {order_no} = useParams();
     const [order, set_order] = useState(null)

     //manage session
     const [user, setUser] = useState(null);
     const manage_session_url = `${window.url}/manage-session`;

     useEffect(() => {


          //send request to the server for manage session
          const token = localStorage.getItem('token')
          const options_for_manage_session_request = {
               method: 'GET',
          };
          fetch(`${manage_session_url}/${token}`,options_for_manage_session_request)
          .then( response => response.json() )
          .then( response => {
               if( response.status == 'error' ){
                    localStorage.removeItem('token')
                    history.push('/login')
                    set_authorized('unauthorized');
               }
               if( response.status == 'success' ){
                    setUser(response.data)
                    localStorage.setItem('token',response.data.remember_token)
                    set_authorized('authorized');
               }
          })

          //order details
          const order_details_url = `${window.url}/order-details/${order_no}`;
          const formData = new FormData();
          formData.append("token",token)

          fetch(order_details_url, {
               method : "POST",
               body : formData
          })
          .then( response => response.json() )
          .then( response => {
               set_order(response.data)
          })

     },[])

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
                              <HeaderComponent user={user}></HeaderComponent>
     
                              <div className="main-bd">
     
                                   {/* left sidebar */}
                                   <LeftSidebarComponent user={user}></LeftSidebarComponent>
                                   
                                   {/* https://codepen.io/brightprogrammer/pen/mdyMOGV */}
                                   <div className="right-side">

                                        {/* navbar component */}
                                        <NavbarComponent></NavbarComponent>
                                        
                                        <div className="profile-body booking-details">

                                             <div className="row">


                                                  <div className="col-md-12">
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
                                                                           <div className="content">
                                                                                <table class="table table-bordered">
                                                                                     <tbody>
                                                                                          <tr>
                                                                                               <th colSpan={4} style={{textAlign: "center"}}>Order information</th>
                                                                                          </tr>
                                                                                          <tr>
                                                                                               <th>Order No</th>
                                                                                               <td>{order && order.order_no}</td>
                                                                                               <th>Order Status</th>
                                                                                               <td>{order && order.order_status}</td>
                                                                                          </tr>
                                                                                          <tr>
                                                                                               <th>Payment Status</th>
                                                                                               <td>{order && order.payment_status}</td>
                                                                                               <th>Payment Method</th>
                                                                                               <td>{order && order.payment_method}</td>
                                                                                          </tr>
                                                                                          <tr>
                                                                                               <th>Day for collection</th>
                                                                                               <td>{order && JSON.parse(order.timing).day_for_collection}</td>
                                                                                               <th>Day for collection</th>
                                                                                               <td>{order && JSON.parse(order.timing).time_for_collection}</td>
                                                                                          </tr>
                                                                                          <tr>
                                                                                               <th colSpan={}>Instruction for collection</th>
                                                                                               <td colSpan={}>{order && JSON.parse(order.timing).time_for_collection}</td>
                                                                                          </tr>
                                                                                     </tbody>
                                                                                </table>
                                                                           </div>
                                                                      </div>

                                                                 </div>
                                                            </div>

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
     else{
          return(
               <div className="id">
                    {/* desktop menu start */}
                    <DesktopMenu></DesktopMenu>
                    {/* desktop menu end */}

                    {/* Mobile Menu */}
                    <MobileMenu></MobileMenu>
                    {/* Mobile Menu End */}

                    {/* please wait section start */}
                    <section className="please-wait">
                         <h4 className="content">Please Wait...</h4>
                    </section>
                    {/* please wait section end */}

                    {/* Footer */}
                    <Footer></Footer>
                    {/* Footer End */}
               </div> 
          );
     }
}

export default OrderDetailsComponent;