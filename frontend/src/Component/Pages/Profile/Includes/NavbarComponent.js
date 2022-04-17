

import { Link, useLocation  } from "react-router-dom";

const NavbarComponent = (props) => {

     const location = useLocation();

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
                         <li className="user-setting"> Change Password</li>
                         <li className="user-setting"> Delete Account</li>
                         <li className="user-setting"> Logout</li>
                    </ul>
               </div>
          </div>
     );
}

export default NavbarComponent;