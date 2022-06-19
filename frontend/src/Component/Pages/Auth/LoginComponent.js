

import { Link } from "react-router-dom";

//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import Loading from "../../Include/Loading";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const LoginComponent = (state) => {

     {/* window scroll to top */}
     window.scrollTo(0, 0);

     const history = useHistory();

     //check authentication start
     const token = localStorage.getItem('token')
     if( token ){
          history.push("/dashboard");
      }
     //check authentication end


     
     //login functionality start
     const [phone, setPhone] = useState('');
     const [password, setPassword] = useState('');
     const [ errors, set_error ] = useState(null)


     function doLogin(){
          const loading = document.getElementById("loading-wraper")
          loading.style.display = "block"

          const formData = new FormData();
          formData.append('phone', phone)
          formData.append('password', password)

          const login_url = `${window.url}/auth/login`;

          const options = {
               method : 'POST',
               body : formData,
          }

          fetch(login_url,options)
          .then( response => response.json())
          .then( response => {
               loading.style.display = "none"

               if( response.status == 'success' ){
                    localStorage.setItem('token',response.data.remember_token)

                    localStorage.removeItem("step_one_data")
                    localStorage.removeItem("step_two_data")
                    localStorage.removeItem("contact_data")
                    localStorage.removeItem("services")

                    history.push('/dashboard')
               }

               if( response.status == "validation_error" ){
                    const single_error = response.data
                    const distructured_error = {...single_error}
                    set_error(distructured_error)
               }

               if( response.status == "warning" ){
                    MySwal.fire({
                         title : "WARNING",
                         text : `${response.data}`,
                    })
               }
          })
          .catch( response => {
               loading.style.display = "none"
               
          })

     }
     //login functionality end

     
     

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

               <div className="user-card round5">
                    <div className="login-box">
                         <div className="card-title">
                              <h4>Login</h4>
                         </div>
                         <div className="form-group">
                              <input type="text" name="phone" className="phone" placeholder="Phone Number"
                                   onChange={ e => {
                                        setPhone(e.target.value)
                                   }}
                              />
                              {
                                   errors &&
                                   <small
                                   className="form_error"
                                   >
                                        {errors.phone}
                                   </small>
                              }
                         </div>
                         <div className="form-group">
                              <input type="password" name="password" className="password" placeholder="password"
                                   onChange={ e => {
                                        setPassword(e.target.value)
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
                         <div className="form-group">
                              <input type="button" name="login" value="Login" className="login" onClick={doLogin} />
                         </div>

                         <div className="or"></div>

                         <a href="" className="login-with-fb">
                              <i className="fab fa-facebook-f"></i>
                              Login with facebook
                         </a>
                         <a href="" className="login-with-google">
                              <i className="fab fa-google"></i>
                              Login with google
                         </a>
                    </div>

                    {/* Card Footer */}

                    <div className="footer">
                         <span>or </span><Link className="toggle-link" to="/register">Sign Up</Link>
                    </div>
               </div>


               {/* Footer */}
               <Footer></Footer>
               {/* Footer End */}

          </div>
     );
     
     
}

export default LoginComponent;