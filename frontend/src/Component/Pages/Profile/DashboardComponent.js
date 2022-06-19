
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
     const [data, set_data] = useState(null);

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

          //get dashboard data
          const get_dashboard_data_url = `${window.url}/order-data/${token}`;
          fetch(`${get_dashboard_data_url}`,{
               method : "GET"
          })
          .then( response => response.json() )
          .then( response => {
               if( response.status == "success" ){
                    set_data(response.data)
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
     
                    <section className="profile" >
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
     
                                                  {/* item start */}
                                                  <div className="col-md-4 col-6">
                                                       <div className="dashboard-item-card" style={{
                                                            "background" : "rgb(168 251 232)"
                                                       }}>
                                                            <p>Total Order </p>  
                                                            <strong >{ data && data.total }</strong>  
                                                       </div>                                              
                                                  </div>
     
                                                  {/* item start */}
                                                  <div className="col-md-4 col-6">
                                                       <div className="dashboard-item-card" style={{
                                                            "background" : "rgb(202 206 255)"
                                                       }}>
                                                            <p>Pending Order</p>  
                                                            <strong>{ data && data.pending }</strong>  
                                                       </div>                                              
                                                  </div>
     
                                                  {/* item start */}
                                                  <div className="col-md-4 col-6">
                                                       <div className="dashboard-item-card" style={{
                                                            "background" : "rgb(251 255 186)"
                                                       }}>
                                                            <p>Confirmed Order</p>  
                                                            <strong>{ data && data.confirmed }</strong>  
                                                       </div>                                              
                                                  </div>

                                                  {/* item start */}
                                                  <div className="col-md-4 col-6">
                                                       <div className="dashboard-item-card" style={{
                                                            "background" : "rgb(255 174 174)"
                                                       }}>
                                                            <p>Assigned Order</p>  
                                                            <strong>{ data && data.assigned }</strong>  
                                                       </div>                                              
                                                  </div>

                                                  {/* item start */}
                                                  <div className="col-md-4 col-6">
                                                       <div className="dashboard-item-card" style={{
                                                            "background" : "rgb(253 228 249)"
                                                       }}>
                                                            <p>Onprocess Order</p>  
                                                            <strong>{ data && data.on_process }</strong>  
                                                       </div>                                              
                                                  </div>
     
                                                  {/* item start */}
                                                  <div className="col-md-4 col-6">
                                                       <div className="dashboard-item-card" style={{
                                                            "background" : "rgb(193 255 177)"
                                                       }}>
                                                            <p>Delivered Order</p>  
                                                            <strong>{ data && data.delivered }</strong>  
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

export default DashboardComponent;