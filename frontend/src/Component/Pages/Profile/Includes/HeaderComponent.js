
const HeaderComponent = () => {
     return(
          <div className="id">
               <div className="profile-header">
                    <div className="profile-img">
                         <img src="/images/rehi.png" width="200" alt="Profile Image"></img>
                    </div>
                    <div className="profile-nav-info">
                         <h3 className="user-name">Md Sehirul Islam Rehi</h3>
                         <div className="address">
                         <p id="state" className="state">Mohakhali TB Gate, Dhaka,</p>
                         <span id="country" className="country">Bangladesh</span>
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