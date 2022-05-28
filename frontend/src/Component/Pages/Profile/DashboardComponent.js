
import { Link, useHistory } from "react-router-dom";

//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import HeaderComponent from "./Includes/HeaderComponent";
import LeftSidebarComponent from "./Includes/LeftSidebarComponent";
import NavbarComponent from "./Includes/NavbarComponent";
import { useState, useEffect } from "react";


const DashboardComponent = () => {

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
     
                    <section className="profile" >
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
                                                            <p>Total Order </p>  
                                                            <strong >01</strong>  
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

     
}

export default DashboardComponent;