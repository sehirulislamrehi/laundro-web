

import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import HeaderComponent from "./Includes/HeaderComponent";
import LeftSidebarComponent from "./Includes/LeftSidebarComponent";
import NavbarComponent from "./Includes/NavbarComponent";

const AccountComponent = () => {

     let [check_authorized, set_authorized] = useState('unauthorized');

     const history = useHistory();

     //manage session
     const [user, setUser] = useState(null);
     const manage_session_url = `${window.url}/manage-session`;

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
                                        <div className="row my-account">

                                             {/* edit */}
                                             <div className="col-md-12 edit-column">
                                                  <ul>
                                                       <li>
                                                            <Link to="/edit-profile">
                                                                 <i className="fas fa-edit"></i> 
                                                                 Edit                                                          
                                                            </Link>
                                                       </li>
                                                  </ul>
                                             </div>

                                             {/* image */}
                                             <div className="col-md-12 image-column">
                                                  <img src="/images/rehi.png" className="img-fluid" alt="" />
                                             </div>

                                             {/* account information */}
                                                  <div className="col-md-12 account-information">
                                                       <ul>
                                                            <li>
                                                                 <strong>Name : </strong>
                                                                 Colson Nicholas
                                                            </li>
                                                            <li>
                                                                 <strong>Email : </strong>
                                                                 info@laundro.co.uk
                                                            </li>
                                                            <li>
                                                                 <strong>Phone : </strong>
                                                                 017XXXXXXXX
                                                            </li>
                                                            <li>
                                                                 <strong>Bio : </strong>
                                                                 Lorem ipsum dolor sit amet, hello how consectetur adipisicing elit. Sint consectetur provident magni yohoho consequuntur, voluptatibus ghdfff exercitationem at quis similique. Optio, amet!
                                                            </li>
                                                            <li>
                                                                 <strong>Address : </strong>
                                                                 Mrs Smith 71 Cherry Court SOUTHAMPTON SO53 5PD UK
                                                            </li>
                                                       </ul>
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

export default AccountComponent;