
import { Link } from "react-router-dom";

//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import HeaderComponent from "./Includes/HeaderComponent";
import LeftSidebarComponent from "./Includes/LeftSidebarComponent";
import NavbarComponent from "./Includes/NavbarComponent";

import { useEffect, useRef, useState } from "react";

const EditProfileComponent = () => {

     const [upload_image, set_upload_image] = useState(null)
     const preview = useRef(null);
     const filePreview = (e) => {
          const file = e.target.files[0]
          set_upload_image(e.target.files[0])
          // const preview = document.querySelector("#image_preview")
          preview.current.src = URL.createObjectURL(file)
     }

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

                                            {/* edit */}
                                            <div className="col-md-12 edit-column">
                                                 <ul>
                                                      <li>
                                                           <Link to="/edit-profile">
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
                                                 <i className="fas fa-times"></i>
                                                 <img src="/images/rehi.png" className="img-fluid" ref={preview} alt="" />
                                                 <input type="file" className="form-control-file"  onChange={filePreview}></input>
                                            </div>

                                             <div className="col-md-4 form-group">
                                                  <label>Name</label>
                                                  <input type="text" className="form-control" name="name"/>
                                             </div>

                                             <div className="col-md-4 form-group">
                                                  <label>Email</label>
                                                  <input type="email" className="form-control" name="email"/>
                                             </div>

                                             <div className="col-md-4 form-group">
                                                  <label>Address</label>
                                                  <input type="text" className="form-control" name="address"/>
                                             </div>

                                             <div className="col-md-12 form-group">
                                                  <label>Bio</label>
                                                  <textarea name="bio" rows="3" className="form-control"></textarea>
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

export default EditProfileComponent;