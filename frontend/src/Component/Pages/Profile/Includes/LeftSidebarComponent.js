
const LeftSidebarComponent = () => {
     return(
          <div className="id">
               <div className="left-side">
                    <div className="profile-side">
                         <p className="mobile-no"><i className="fa fa-phone"></i> +88017XXXXXXXX</p>
                         <p className="user-mail"><i className="fa fa-envelope"></i> info@gmail.com</p>

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