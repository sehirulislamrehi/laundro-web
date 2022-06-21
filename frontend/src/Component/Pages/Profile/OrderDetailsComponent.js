
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

//import pages

import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import HeaderComponent from "./Includes/HeaderComponent";
import LeftSidebarComponent from "./Includes/LeftSidebarComponent";
import NavbarComponent from "./Includes/NavbarComponent";
import { useParams } from "react-router-dom";
import Header from "../../Include/Header";


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
          if( token ){
               const options_for_manage_session_request = {
                    method: 'GET',
               };
               fetch(`${manage_session_url}/${token}`,options_for_manage_session_request)
               .then( response => response.json() )
               .then( response => {
                    if( response.status == 'error' ){
                         localStorage.removeItem('token')
                         set_authorized('unauthorized');
                         history.push({
                              pathname: '/login',
                         });
                    }
                    if( response.status == 'success' ){
                         setUser(response.data)
                         localStorage.setItem('token',response.data.remember_token)
                         set_authorized('authorized');
                    }
     
               })
          }
          else{
               history.push("/login")
          }

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

                    <MobileMenu></MobileMenu>

                    <div className="page-wrapper">
                         <Header></Header>

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

                                                                 <div className="col-md-12 mt-4 order-details-step">
                                                                      {/* progressbar */}
                                                                      
                                                                           {
                                                                                order && ( order.order_status == "Pending" ) ? 
                                                                                <ul className="step-bar">
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          Pending
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item ">
                                                                                          <a >
                                                                                          Confirmed
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item ">
                                                                                          <a >
                                                                                          Assigned
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item ">
                                                                                          <a >
                                                                                          OnProcess
                                                                                          </a>
                                                                                     </li> 
                                                                                     <li className="step-bar__item ">
                                                                                          <a >
                                                                                          Delivered
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item ">
                                                                                          <a >
                                                                                          Cancelled
                                                                                          </a>
                                                                                     </li> 
                                                                                </ul>
                                                                                : ""
                                                                           }
                                                                           {
                                                                                order && ( order.order_status == "Confirmed" ) ? 
                                                                                <ul className="step-bar">
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          Pending
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          Confirmed
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item ">
                                                                                          <a >
                                                                                          Assigned
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item ">
                                                                                          <a >
                                                                                          OnProcess
                                                                                          </a>
                                                                                     </li> 
                                                                                     <li className="step-bar__item ">
                                                                                          <a >
                                                                                          Delivered
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item ">
                                                                                          <a >
                                                                                          Cancelled
                                                                                          </a>
                                                                                     </li> 
                                                                                </ul>
                                                                                : ""
                                                                           }
                                                                           {
                                                                                order && ( order.order_status == "Assigned" ) ? 
                                                                                <ul className="step-bar">
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          Pending
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          Confirmed
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          Assigned
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item ">
                                                                                          <a >
                                                                                          OnProcess
                                                                                          </a>
                                                                                     </li> 
                                                                                     <li className="step-bar__item ">
                                                                                          <a >
                                                                                          Delivered
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item ">
                                                                                          <a >
                                                                                          Cancelled
                                                                                          </a>
                                                                                     </li> 
                                                                                </ul>
                                                                                : ""
                                                                           }
                                                                           {
                                                                                order && ( order.order_status == "OnProcess" ) ? 
                                                                                <ul className="step-bar">
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          Pending
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          Confirmed
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          Assigned
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          OnProcess
                                                                                          </a>
                                                                                     </li> 
                                                                                     <li className="step-bar__item ">
                                                                                          <a >
                                                                                          Delivered
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item ">
                                                                                          <a >
                                                                                          Cancelled
                                                                                          </a>
                                                                                     </li> 
                                                                                </ul>
                                                                                : ""
                                                                           }
                                                                           {
                                                                                order && ( order.order_status == "Delivered" ) ? 
                                                                                <ul className="step-bar">
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          Pending
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          Confirmed
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          Assigned
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          OnProcess
                                                                                          </a>
                                                                                     </li> 
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          Delivered
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item ">
                                                                                          <a >
                                                                                          Cancelled
                                                                                          </a>
                                                                                     </li> 
                                                                                </ul>
                                                                                : ""
                                                                           }
                                                                           {
                                                                                order && ( order.order_status == "Cancelled" ) ? 
                                                                                <ul className="step-bar">
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          Pending
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          Confirmed
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          Assigned
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          OnProcess
                                                                                          </a>
                                                                                     </li> 
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          Delivered
                                                                                          </a>
                                                                                     </li>
                                                                                     <li className="step-bar__item step-bar__item_active">
                                                                                          <a >
                                                                                          Cancelled
                                                                                          </a>
                                                                                     </li> 
                                                                                </ul>
                                                                                : ""
                                                                           }
                                                                           
                                                                      
                                                                 </div>

                                                                 <div className="col-md-12">
                                                                      <div className="row booking-status">

                                                                           <div className="col-md-12">
                                                                                <div className="content table-responsive">
                                                                                     <table className="table table-bordered">
                                                                                          <tbody>
                                                                                               <tr style={{border:"1px solid #006bcc"}}>
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
                                                                                                    <th>Time for collection</th>
                                                                                                    <td>{order && JSON.parse(order.timing).time_for_collection}</td>
                                                                                               </tr>
                                                                                               <tr>
                                                                                                    <th colSpan={2}>Instruction for collection</th>
                                                                                                    <td colSpan={2}>{order && JSON.parse(order.timing).instructions_for_collection}</td>
                                                                                               </tr>
                                                                                               <tr>
                                                                                                    <th>Day for Delivery</th>
                                                                                                    <td>{order && JSON.parse(order.timing).day_for_delivery}</td>
                                                                                                    <th>Time for Delivery</th>
                                                                                                    <td>{order && JSON.parse(order.timing).time_for_delivery}</td>
                                                                                               </tr>
                                                                                               <tr>
                                                                                                    <th colSpan={2}>Instruction for Delivery</th>
                                                                                                    <td colSpan={2}>{order && JSON.parse(order.timing).instructions_for_delivery}</td>
                                                                                               </tr>
                                                                                               <tr>
                                                                                                    <th colSpan={2}>Other Instructions</th>
                                                                                                    <td colSpan={2}>{order && JSON.parse(order.timing).others_instruction}</td>
                                                                                               </tr>
                                                                                               <tr>
                                                                                                    <th rowSpan={order && order.services.length} style={{ verticalAlign: "middle", textAlign : "center" }}>Services</th>
                                                                                                    {
                                                                                                         order && order.services.map( (value,key) => (
                                                                                                              (
                                                                                                                   ( key == 0 ) ?  
                                                                                                                   <td colSpan={3}
                                                                                                                   >
                                                                                                                        <strong style={{marginRight: "5px"}}>{ value.service.name }</strong>
                                                                                                                        ( { value.instruction ? value.instruction : 'No instructions' } )
                                                                                                                        ( { value.price } BDT )
                                                                                                                   </td> : ""
                                                                                                              )
                                                                                                              
                                                                                                         ))
                                                                                                    }
                                                                                               </tr>
                                                                                               {
                                                                                                    order && order.services.map( (value,key) => (
                                                                                                         (
                                                                                                              ( key != 0 ) ? 
                                                                                                              <tr>
                                                                                                                   <td colSpan={3}>
                                                                                                                        <strong style={{marginRight: "5px"}}>{ value.service.name }</strong>
                                                                                                                        ( { value.instruction ? value.instruction : 'No instructions' } )
                                                                                                                        ( { value.price } BDT )
                                                                                                                   </td>
                                                                                                              </tr> : ""
                                                                                                         )
                                                                                                    ))
                                                                                               }
                                                                                               <tr>
                                                                                                    <th colSpan={2}>Order Total</th>
                                                                                                    <td colSpan={2}>{order && order.total} BDT</td>
                                                                                               </tr>


                                                                                               {/* customer information */}
                                                                                               <tr>
                                                                                                    <th colSpan={4} style={{textAlign: "center", border: "1px solid #006bcc" }}>Customer information</th>
                                                                                               </tr>
                                                                                               <tr>
                                                                                                    <th>Name</th>
                                                                                                    <td>{order && order.customer_name}</td>
                                                                                                    <th>Email</th>
                                                                                                    <td>{order && order.customer_email}</td>
                                                                                               </tr>
                                                                                               <tr>
                                                                                                    <th>Phone</th>
                                                                                                    <td>{order && order.customer_phone}</td>
                                                                                                    <th>Postal Code</th>
                                                                                                    <td>{order && order.postal_code}</td>
                                                                                               </tr>
                                                                                               <tr>
                                                                                                    <th>Area</th>
                                                                                                    <td>{order && order.location}</td>
                                                                                                    <th>Address Type</th>
                                                                                                    <td>{order && order.address_type}</td>
                                                                                               </tr>
                                                                                               <tr>
                                                                                                    <th colSpan={2}>Address Details</th>
                                                                                                    <td colSpan={2}>{order && order.address_details}</td>
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

                         <Footer></Footer>
                    </div>

               </div>
          );
          
     }
     else{
          return(
               <div className="id">

                    <MobileMenu></MobileMenu>

                    <div className="page-wrapper">
                         <Header></Header>

                         {/* please wait section start */}
                         <section className="please-wait">
                              <h4 className="content">Please Wait...</h4>
                         </section>
                         {/* please wait section end */}

                         <Footer></Footer>
                    </div>

               </div> 
          );
     }
}

export default OrderDetailsComponent;