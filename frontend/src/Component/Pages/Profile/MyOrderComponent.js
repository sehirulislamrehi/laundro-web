
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import HeaderComponent from "./Includes/HeaderComponent";
import LeftSidebarComponent from "./Includes/LeftSidebarComponent";
import NavbarComponent from "./Includes/NavbarComponent";


const MyOrderComponent = () => {

     
     let [check_authorized, set_authorized] = useState('unauthorized');

     const history = useHistory();

     //manage session
     const [user, setUser] = useState(null);
     const manage_session_url = `${window.url}/manage-session`;

     const [order, set_order] = useState(null);

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

          //get order data
          const get_order_data_url = `${window.url}/get-order`;
          fetch(`${get_order_data_url}/${token}`,{
               method : "GET"
          })
          .then( response => response.json() )
          .then( response => {
               if( response.status == "success" ){
                    set_order(response.data)
               }
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
                                        
                                        <div className="profile-body">
                                             <div className="row">

                                                  {/* order card start */}
                                                  {
                                                       order && order ? order.map( item => (
                                                            <div className="col-md-12" key={item.id}>
                                                                 <Link to="/order-details">
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

export default MyOrderComponent;