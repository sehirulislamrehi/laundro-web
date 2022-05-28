
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import HeaderComponent from "./Includes/HeaderComponent";
import LeftSidebarComponent from "./Includes/LeftSidebarComponent";
import NavbarComponent from "./Includes/NavbarComponent";


const ChangePasswordComponent = () => {

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
                                        
                                        <div className="profile-body">
                                        <div className="row my-account">

                                                  <div className="col-md-12 form-group">
                                                       <label>Old Password</label>
                                                       <input type="password" className="form-control" name="old_password"/>
                                                  </div>

                                                  <div className="col-md-12 form-group">
                                                       <label>New Password</label>
                                                       <input type="password" className="form-control" name="new_password"/>
                                                  </div>

                                                  <div className="col-md-12 form-group">
                                                       <label>Confirm Password</label>
                                                       <input type="password" className="form-control" name="password_confirmation"/>
                                                  </div>
                                             
                                                  <div className="col-md-12 form-group">
                                                       <button className="change-password-btn">
                                                            Update
                                                       </button>
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

export default ChangePasswordComponent;