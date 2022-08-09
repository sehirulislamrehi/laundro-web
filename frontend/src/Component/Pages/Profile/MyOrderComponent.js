

import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

//import pages

import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import HeaderComponent from "./Includes/HeaderComponent";
import LeftSidebarComponent from "./Includes/LeftSidebarComponent";
import NavbarComponent from "./Includes/NavbarComponent";
import Header from "../../Include/Header";
import Pagination from "react-js-pagination";


const MyOrderComponent = () => {

     
     let [check_authorized, set_authorized] = useState('unauthorized');

     const history = useHistory();

     //manage session
     const [user, setUser] = useState(null);
     const manage_session_url = `${window.url}/manage-session`;

     const [order, set_order] = useState(null);
     
     const [state, set_state] = useState({
          orders : [],
          activePage: 1,
          itemsCountPerPage : 1,
          totalItemsCount : 1
     });

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

          //get order data
          const get_order_data_url = `${window.url}/get-order`;
          fetch(`${get_order_data_url}/${token}`,{
               method : "GET"
          })
          .then( response => response.json() )
          .then( response => {
               if( response.status == "success" ){
                    set_order(response.data.data)
                    set_state({
                         orders: response.data.data,
                         activePage: response.data.current_page,
                         itemsCountPerPage : response.data.per_page,
                         totalItemsCount : response.data.total
                    })
               }
          })

     },[])


     const getOrderData = (pageNumber) => {

          //get order data    
          const get_order_data_url = `${window.url}/get-order`;
          const token = localStorage.getItem('token')

          fetch(`${get_order_data_url}/${token}?page=${pageNumber}`,{
               method : "GET"
          })
          .then( response => response.json() )
          .then( response => {
               if( response.status == "success" ){
                    set_order(response.data.data)
                    set_state({
                         orders: response.data.data,
                         activePage: response.data.current_page,
                         itemsCountPerPage : response.data.per_page,
                         totalItemsCount : response.data.total
                    })
               }
          })
     }


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
                                             
                                             <div className="profile-body">
                                                  <div className="row">

                                                       {/* order card start */}
                                                       {
                                                            order && order ? order.map( item => (
                                                                 <div className="col-md-12" key={item.id}>
                                                                      <Link to={`/order-details/${item.order_no}`} className="order-list">
                                                                           <div className="order-card">
                                                                                <i className="fas fa-times"></i>
                                                                                <div className="row">
                                                                                     <div className="col-md-8">
                                                                                          <div className="left-part">
                                                                                               <p>
                                                                                                    <strong>Order No : </strong>
                                                                                                    {item.order_no}
                                                                                               </p>
                                                                                               <p>
                                                                                                    <strong>Collection Date : </strong>
                                                                                                    {JSON.parse(item.timing).day_for_collection},
                                                                                                    ( {JSON.parse(item.timing).time_for_collection} )
                                                                                               </p>
                                                                                               <p>
                                                                                                    <strong>Delivery Date : </strong>
                                                                                                    {JSON.parse(item.timing).day_for_delivery},
                                                                                                    ( {JSON.parse(item.timing).time_for_delivery} )
                                                                                               </p>
                                                                                          </div>
                                                                                     </div>
                                                                                </div>
                                                                                <div className="row order-card-footer">
                                                                                     <div className="col-md-6 col-8">
                                                                                          <div className="left-part">
                                                                                               {/* <ul>
                                                                                                    <li>
                                                                                                         <i className="fas fa-calendar"></i>
                                                                                                         2022-04-19
                                                                                                    </li>
                                                                                                    <li>
                                                                                                         <i className="fas fa-clock"></i>
                                                                                                         09:00
                                                                                                    </li>
                                                                                               </ul> */}
                                                                                          </div>
                                                                                     </div>
                                                                                     <div className="col-md-6 col-4">
                                                                                          <div className="right-part">
                                                                                               <button className="order-status">
                                                                                                    {item.order_status}
                                                                                               </button>
                                                                                          </div>
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                      </Link>
                                                                 </div>
                                                                 
                                                            )) :
                                                            <div className="col-md-12">
                                                                 <p className="text-center">No Order Found</p>
                                                            </div>
                                                       }
                                                       
                                                       {/* order card end */}


                                                  </div>

                                                  <div className="row">
                                                       {
                                                            order &&
                                                            <Pagination
                                                            activePage={state.activePage}
                                                            totalItemsCount={state.totalItemsCount}
                                                            itemsCountPerPage={state.itemsCountPerPage}   
                                                            onChange={(pageNumber)=>getOrderData(pageNumber)}  
                                                            itemClass="page-item"
                                                            linkClass="page-link"
                                                            firstPageText="First"
                                                            lastPageText="Last"
                                                            />
                                                       }
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

export default MyOrderComponent;