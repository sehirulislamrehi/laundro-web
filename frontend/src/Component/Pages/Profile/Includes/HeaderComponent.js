import { useEffect, useState } from "react";

const HeaderComponent = (props) => {

     const [user, setUser] = useState(null);

     useEffect(() => {
          setUser(props.user)

     },[])

     return(
          <div className="id">
               <div className="profile-header">
                    <div className="profile-img">
                         {
                              user ? 
                              <img src={user.image} width="200" alt="Profile Image"></img> : ""
                         }
                    </div>
                    <div className="profile-nav-info">
                         <h3 className="user-name">{ user ? user.name : '' }</h3>
                         <div className="address">
                         <p id="state" className="state">{ user && user.address ? user.address : '' }</p>
                         </div>

                    </div>
                    <div className="profile-option">
                         <div className="notification">
                         <i className="fa fa-bell"></i>
                         <span className="alert-message">3</span>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default HeaderComponent;