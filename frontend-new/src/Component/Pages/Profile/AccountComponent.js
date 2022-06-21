

import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

//import pages

import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import HeaderComponent from "./Includes/HeaderComponent";
import LeftSidebarComponent from "./Includes/LeftSidebarComponent";
import NavbarComponent from "./Includes/NavbarComponent";
import Header from "../../Include/Header";



const AccountComponent = () => {

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
     
     if( check_authorized && check_authorized == "authorized" ){
          return(
               <div className="id">

                    <MobileMenu></MobileMenu>

                    <div className="page-wrapper">
                         <Header></Header>

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
                                                       {
                                                            user && user.image ? 
                                                            <img src={user.image} className="img-fluid" alt="" /> : ''
                                                       }
                                                  </div>

                                                  {/* account information */}
                                                       <div className="col-md-12 account-information">
                                                            <ul>
                                                                 <li>
                                                                      <strong>Name : </strong>
                                                                      { user && user.name ? user.name : 'N/A' }
                                                                 </li>
                                                                 <li>
                                                                      <strong>Email : </strong>
                                                                      { user && user.email ? user.email : 'N/A' }
                                                                 </li>
                                                                 <li>
                                                                      <strong>Phone : </strong>
                                                                      { user && user.phone ? user.phone : 'N/A' }
                                                                 </li>
                                                                 <li>
                                                                      <strong>Address : </strong>
                                                                      { user && user.address ? user.address : 'N/A' }
                                                                 </li>
                                                            </ul>
                                                       </div>
                                                  
                                             </div>
                                             </div>
                                             
                                        </div>
                                   </div>
                              </div>
                         </section>

                         <Footer></Footer>
                    </div>

               </div> 
          );
     }
     else{
          return(
               <div className="id">

                    <MobileMenu></MobileMenu>

                    <div className="page-wrapper">
                         <Header></Header>

                         {/* please wait section start */}
                         <section className="please-wait">
                              <h4 className="content">Please Wait...</h4>
                         </section>
                         {/* please wait section end */}

                         <Footer></Footer>
                    </div>

               </div>
          );
     }
}

export default AccountComponent;