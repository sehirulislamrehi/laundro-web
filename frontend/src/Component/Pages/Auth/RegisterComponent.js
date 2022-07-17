

import { Link } from "react-router-dom";

//import pages

import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import Loading from "../../Include/Loading";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../Include/Header";


const RegisterComponent = (props) => {

     {/* window scroll to top */}
     window.scrollTo(0, 0);


     const history = useHistory();


     //check authentication start
     const token = localStorage.getItem('token')
     if( token ){
          history.push("/dashboard");
      }
     //check authentication end


     


     //do register
     const [name, setName] = useState('');
     const [phone, setPhone] = useState('');
     const [password, setPassword] = useState('');
     const [password_confirmation, setPasswordConfirmation] = useState('');
     const [ errors, set_error ] = useState(null)

     const registration_url = `${window.url}/auth/register`;
     function doRegister(){
          const loading = document.getElementById("loading-wraper")
          loading.style.display = "block"

          const formData = new FormData();

          formData.append('name', name);
          formData.append('phone', phone);
          formData.append('password', password);
          formData.append('password_confirmation', password_confirmation);
          const options = {
               method : 'POST',
               body: formData
          }

          fetch(registration_url,options)
          .then( response => response.json() )
          .then( data => {
               loading.style.display = "none"

               if( data.status == 'error' ){
                    const single_error = data.data
                    const distructured_error = {...single_error}
                    set_error(distructured_error)
               }
               
               if( data.status == 'success' ){
                    localStorage.setItem('token',data.data.remember_token)

                    localStorage.removeItem("step_one_data")
                    localStorage.removeItem("step_two_data")
                    localStorage.removeItem("contact_data")
                    localStorage.removeItem("services")

                    history.push('/dashboard')
               }
          })
          .catch( error => {
               loading.style.display = "none"
               console.log(error)
               
          })


     }


     return(
          <div className="id">

               {/* loading */}
               <Loading></Loading>

               <MobileMenu data={props.applicationData}></MobileMenu>

               <div className="page-wrapper">

                   <Header data={props.applicationData}></Header>

                    <div className="user-card round5">
                         <div className="login-box">
                              <div className="card-title">
                                   <h4>Register</h4>
                              </div>
                              <form className="login-form" name="login" action="">
                                   <div className="form-group">
                                        <input type="text" name="name" className="name" placeholder="Enter your name"
                                             onChange={
                                                  e => {
                                                       setName(e.target.value)
                                                  }
                                             }
                                        />
                                        {
                                             errors &&
                                             <small
                                             className="form_error"
                                             >
                                             {errors.name}
                                             </small>
                                        }
                                   </div>
                                   <div className="form-group">
                                        <input type="text" name="phone" className="phone" placeholder="Phone Number"
                                             onChange={
                                                  e => {
                                                       setPhone(e.target.value)
                                                  }
                                             }
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
                                        <input type="password" name="password" className="password" placeholder="Password" 
                                             onChange={
                                                  e => {
                                                       setPassword(e.target.value)
                                                  }
                                             }
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
                                        <input type="password" name="password_confirmation" className="password" placeholder="Confirm Password"
                                             onChange={
                                                  e => {
                                                       setPasswordConfirmation(e.target.value)
                                                  }
                                             }
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
                                   <input type="button" name="register" value="Register" className="login" onClick={doRegister} />
                              </form>

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
                              <span>or </span><Link className="toggle-link" to="/login">Sign In</Link>
                         </div>
                    </div>

                   <Footer data={props.applicationData}></Footer>
                    
               </div>

          </div>
          
     );
}

export default RegisterComponent;