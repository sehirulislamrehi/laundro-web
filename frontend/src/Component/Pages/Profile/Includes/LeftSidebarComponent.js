import { useEffect, useState } from "react";

const LeftSidebarComponent = (props) => {

     const [user, setUser] = useState(null);

     useEffect(() => {
          setUser(props.user)

     },[])

     return(
          <div className="id">
               <div className="left-side">
                    <div className="profile-side">
                         <p className="mobile-no"><i className="fa fa-phone"></i> { user && user.phone ? user.phone : "N/A" }</p>
                         <p className="user-mail"><i className="fa fa-envelope"></i> { user && user.email ? user.email : "N/A" }</p>

                         <div className="link-send">
                              <h4>Text me a link to the app</h4>
                              <div className="row">
                                   
                                   <div className="col-md-4 col-3 country-code">
                                        <select name="" className="form-control">
                                             <option value="">+88</option>
                                        </select>
                                   </div>

                                   <div className="col-md-8 col-9 phone-number">
                                        <input type="text" className="form-control" placeholder="Your mobile number" />
                                   </div>

                                   <div className="col-md-12 button">
                                        <button>
                                             Send
                                        </button>
                                   </div>

                              </div>
                         </div>

                    </div>

               </div>
          </div>
     );
}

export default LeftSidebarComponent;