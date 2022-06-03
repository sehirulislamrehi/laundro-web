
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import Loading from "../../Include/Loading";
import HeaderComponent from "./Includes/HeaderComponent";
import LeftSidebarComponent from "./Includes/LeftSidebarComponent";
import NavbarComponent from "./Includes/NavbarComponent";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const ChangePasswordComponent = () => {

     let [check_authorized, set_authorized] = useState('unauthorized');

     const history = useHistory();

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

     },[])

     const [old_password, set_old_password] = useState('');
     const [password, set_password] = useState('');
     const [password_confirmation, set_password_confirmation] = useState('');
     const [ errors, set_error ] = useState(null)

     const changePassword = () => {
          const loading = document.getElementById("loading-wraper")
          loading.style.display = "block"

          const token = localStorage.getItem('token')
          const change_password_url = `${window.url}/change-password`;
          const formData = new FormData();
          formData.append("old_password",old_password);
          formData.append("password",password);
          formData.append("password_confirmation",password_confirmation);
          formData.append("token",token);

          const options = {
               method : "POST",
               body : formData
          }
          fetch(change_password_url,options)
          .then( response => response.json() )
          .then( response => {
               loading.style.display = "none"

               if( response.status == "warning" || response.status == "error" ){
                    MySwal.fire({
                         title : `${response.status}`,
                         text : `${response.data}`,
                    })
               }

               if( response.status == "validation_error" ){
                    const single_error = response.data
                    const distructured_error = {...single_error}
                    set_error(distructured_error)
               }

               if( response.status == "success" ){
                    MySwal.fire({
                         title : `${response.status}`,
                         text : 'Password updated',
                    })
                    history.push("/dashboard")
               }

          })
          .catch( response => {
               loading.style.display = "none"

          })

     }

     if( check_authorized && check_authorized == "authorized" ){

          return(
               <div className="id">

                    {/* loading */}
                    <Loading></Loading>

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
                                             <div className="row my-account">

                                                  <div className="col-md-12 form-group">
                                                       <label>Old Password</label>
                                                       <input type="password" className="form-control" name="old_password"
                                                            onChange={ e => {
                                                                 set_old_password(e.target.value)
                                                            }}
                                                       />
                                                       {
                                                            errors &&
                                                            <small
                                                            className="form_error"
                                                            >
                                                                 {errors.old_password}
                                                            </small>
                                                       }
                                                  </div>

                                                  <div className="col-md-12 form-group">
                                                       <label>New Password</label>
                                                       <input type="password" className="form-control" name="password"
                                                            onChange={ e => {
                                                                 set_password(e.target.value)
                                                            }}
                                                       />
                                                       {
                                                            errors &&
                                                            <small
                                                            className="form_error"
                                                            >
                                                                 {errors.password}
                                                            </small>
                                                       }
                                                  </div>

                                                  <div className="col-md-12 form-group">
                                                       <label>Confirm Password</label>
                                                       <input type="password" className="form-control" name="password_confirmation"
                                                            onChange={ e => {
                                                                 set_password_confirmation(e.target.value)
                                                            }}
                                                       />
                                                       {
                                                            errors &&
                                                            <small
                                                            className="form_error"
                                                            >
                                                                 {errors.password}
                                                            </small>
                                                       }
                                                  </div>
                                             
                                                  <div className="col-md-12 form-group">
                                                       <button className="change-password-btn" onClick={changePassword}>
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

export default ChangePasswordComponent;