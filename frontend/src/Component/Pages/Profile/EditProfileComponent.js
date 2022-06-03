


import { Link, useHistory } from "react-router-dom";

//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import Loading from "../../Include/Loading";
import HeaderComponent from "./Includes/HeaderComponent";
import LeftSidebarComponent from "./Includes/LeftSidebarComponent";
import NavbarComponent from "./Includes/NavbarComponent";

import { useEffect, useRef, useState } from "react";



import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const EditProfileComponent = () => {

     let [check_authorized, set_authorized] = useState('unauthorized');
     const [name, setName] = useState(null);
     const [email, setEmail] = useState(null);
     const [address, setAddress] = useState(null);
     const [ errors, set_error ] = useState(null)

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

     const [upload_image, set_upload_image] = useState(null)
     const preview = useRef(null);
     const filePreview = (e) => {
          const file = e.target.files[0]
          set_upload_image(e.target.files[0])
          // const preview = document.querySelector("#image_preview")
          preview.current.src = URL.createObjectURL(file)
     }


     //update profile
     function updateProfile(){

          const loading = document.getElementById("loading-wraper")
          loading.style.display = "block"
          
          const token = localStorage.getItem('token')
          const formData = new FormData();
          formData.append("name", name);
          formData.append("email", email);
          formData.append("address", address);
          formData.append("image", upload_image);
          formData.append("token", token);

          const update_profile_url = `${window.url}/auth/update-profile`;
          const options = {
               method : "POST",
               body : formData
          };

          fetch(update_profile_url,options)
          .then( response => response.json() )
          .then( response => {
               loading.style.display = "none"

               if( response.status == "validation_error" ){
                    const single_error = response.data
                    const distructured_error = {...single_error}
                    set_error(distructured_error)
               }

               if( response.status == "warning" || response.status == "error" ){
                    MySwal.fire({
                         title : `${response.status}`,
                         text : `${response.data}`,
                    })
               }

               if( response.status == "success" ){
                    history.push("/account")
               }
          })
          .catch( response => {
               loading.style.display = "none"
          })
     }

     //delete profile image
     const deleteImage = () => {
          const token = localStorage.getItem('token')
          const formData = new FormData();
          formData.append("token", token);

          const delete_image_url = `${window.url}/delete-image`;
          const options = {
               method : "POST",
               body : formData
          };

          fetch(delete_image_url,options)
          .then( response => response.json() )
          .then( response => {

               if( response.status == "warning" || response.status == "error" ){
                    MySwal.fire({
                         title : `${response.status}`,
                         text : `${response.data}`,
                    })
               }

               if( response.status == "success" ){
                    preview.current.src = response.data.image
               }
          })
          .catch( response => {
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

                                                  {/* edit */}
                                                  <div className="col-md-12 edit-column">
                                                       <ul>
                                                            <li onClick={updateProfile}>
                                                                 <Link to="#">
                                                                           <i className="fas fa-check"></i> 
                                                                      Save     
                                                                 </Link>
                                                            </li>
                                                            <li>
                                                                 <Link to="/account">
                                                                 <i className="fas fa-times ml-2"></i>                                                  
                                                                      Cancel         
                                                                 </Link>
                                                            </li>
                                                       </ul>
                                                  </div>

                                                  {/* image */}
                                                  <div className="col-md-12 image-column">
                                                       <i className="fas fa-times" onClick={deleteImage}></i>
                                                       {
                                                            user && user.image ? 
                                                            <img src={user.image} className="img-fluid" ref={preview} alt="" /> :
                                                            <img src="" className="img-fluid" ref={preview} alt="" />
                                                       }
                                                       <input type="file" className="form-control-file"  onChange={filePreview}></input>
                                                  </div>

                                                  <div className="col-md-4 form-group">
                                                       <label>Name</label>
                                                       <input type="text" className="form-control" name="name" value={
                                                            name
                                                       } onChange={
                                                            e => {
                                                                 setName(e.target.value)
                                                            }
                                                       } />
                                                       {
                                                            errors &&
                                                            <small
                                                            className="form_error"
                                                            >
                                                                 {errors.name}
                                                            </small>
                                                       }
                                                  </div>

                                                  <div className="col-md-4 form-group">
                                                       <label>Email</label>
                                                       <input type="email" className="form-control" name="email" value={
                                                            email
                                                       } onChange={
                                                            e => {
                                                                 setEmail(e.target.value)
                                                            }
                                                       } />
                                                       {
                                                            errors &&
                                                            <small
                                                            className="form_error"
                                                            >
                                                                 {errors.email}
                                                            </small>
                                                       }
                                                  </div>

                                                  <div className="col-md-4 form-group">
                                                       <label>Address</label>
                                                       <input type="text" className="form-control" name="address" value={address} onChange={
                                                            e => {
                                                                 setAddress(e.target.value)
                                                            }
                                                       } />
                                                       {
                                                            errors &&
                                                            <small
                                                            className="form_error"
                                                            >
                                                                 {errors.address}
                                                            </small>
                                                       }
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

export default EditProfileComponent;