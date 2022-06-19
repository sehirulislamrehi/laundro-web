

import { useHistory } from "react-router-dom";
import { Link, useLocation  } from "react-router-dom";

const NavbarComponent = (props) => {

     const location = useLocation();
     const history = useHistory();

     function doLogout(){
          const token = localStorage.getItem('token')

          if( token ){
               localStorage.removeItem('token')

               localStorage.removeItem("step_one_data")
               localStorage.removeItem("step_two_data")
               localStorage.removeItem("contact_data")
               localStorage.removeItem("services")
          }

          history.push('/login');

     }

     return(
          <div className="id">
               <div className="nav">
                    <ul>
                         {
                              (location.pathname == '/dashboard' ) ?
                              <li className="user-post active">
                                   <Link to="/dashboard">
                                        My Dashboard
                                   </Link>
                              </li> :
                              <li className="user-post">
                                   <Link to="/dashboard">
                                        My Dashboard
                                   </Link>
                              </li>
                         }
                          
                         {
                              (location.pathname == '/my-order' ) ?
                              <li className="user-post active">
                                   <Link to="/my-order">
                                        My Order
                                   </Link>
                              </li> :
                              <li className="user-post">
                                   <Link to="/my-order">
                                        My Order
                                   </Link>
                              </li>
                         }

                         {
                              (location.pathname == '/account' ) ?
                              <li className="user-post active">
                                   <Link to="/account">
                                        Account
                                   </Link>
                              </li> :
                              <li className="user-post">
                                   <Link to="/account">
                                        Account
                                   </Link>
                              </li>
                         }

                         {
                              (location.pathname == '/change-password' ) ?
                              <li className="user-post active">
                                   <Link to="/change-password">
                                        Change Password
                                   </Link>
                              </li> :
                              <li className="user-post">
                                   <Link to="/change-password">
                                        Change Password
                                   </Link>
                              </li>
                         }
                         

                         <li className="user-setting" onClick={doLogout}> 
                              Logout
                         </li>
                    </ul>
               </div>
          </div>
     );
}

export default NavbarComponent;