

import { Link } from "react-router-dom";
import { useParams } from "react-router";


//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllArea } from "../../../action";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const StepOneComponent = () => {

     {/* window scroll to top */}
     // window.scrollTo(0, 0);

     let [check_authorized, set_authorized] = useState('unauthorized');
     const history = useHistory();
     const { slug } =  useParams(); 

     //INITIALIZATION
     const dispatch = useDispatch();

     //manage session
     const [user, setUser] = useState(null);
     const manage_session_url = `${window.url}/manage-session`;

     const [service, setService] = useState(null);

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


          //service details
          const service_details_url = `${window.url}/service-details/${slug}`;

          fetch(service_details_url,{
               method : "GET"
          })
          .then( response => response.json() )
          .then( response => {
               if( response.status == "success" ){
                    setService(response.data)
               }
               if( response.status == "warning" ){
                    
               }
               if( response.status == "error" ){
                    
               }
          })
          .catch( response => {
               
          })

     },[])

     function clickOnDuration(e){
          
          let select_address_type = document.querySelectorAll(".select-order-duration ul li");

          for( let x in select_address_type ){
               if( x < select_address_type.length ){
                    select_address_type[x].style.background = "#efefef"
                    select_address_type[x].classList.remove("selected")
               }
          }

          e.target.classList.add("selected")
          e.target.style.background = "#22d3ee"
     }

     const selectAddress = useRef(null)
     const [postal_code, set_postal_code] = useState(null)

     function postalCodeChange(e){
          const formData = new FormData();
          const value = e.target.value
          const url = `${window.url}/postal-code-area`;
          const address_select = document.getElementById("address-select");
          set_postal_code(value)
          formData.append('code',value)
          fetch(url,{    
               method : "POST",
               body : formData
          })
          .then( response => response.json() )
          .then( response => {

               if( response.status == "success" ){
                    selectAddress.current.innerHTML = ''
                    dispatch(getAllArea(response.data))

                    let address_select = document.getElementById("address-select")
                    for( let i = 0 ; i < response.data.length ; i++ ){
                         
                         var str = `<option data-id='${response.data[i].id}'>${response.data[i].name}</option>`
                         var div = document.createElement('div');
                         div.innerHTML = str;

                         while ( div.children.length > 0 ) {
                              address_select.append(div.children[0]);
                         }
                         
                    }
               }
               if( response.status == "warning" ){
                    selectAddress.current.innerHTML = response.data

                    const length = address_select.options.length
                    for( let x = 0 ; x <= length ; x++ ){
                         address_select.options[0].remove()
                    }
                    
               }
          })
          .catch( response => {
               
          })
          
     }

     const address = useSelector( state => state.getAllArea )


     //next step start
     const nextStep = (e) => {
          if( postal_code ){
               let address_select = document.getElementById("address-select")
               if( address_select.options[address_select.selectedIndex] ){
                    let address_id = address_select.options[address_select.selectedIndex].dataset.id
                    let select_address_type = document.querySelector(".select-order-duration ul li.selected")
                    if( select_address_type ){
                         let address_type = select_address_type.dataset.id
                         console.log("success")
                    }
                    else{
                         MySwal.fire({
                              title : "",
                              text : "Please choose your address type",
                         })
                    }
               }
          }
          else{
               MySwal.fire({
                    title : "",
                    text : "Invalid Postal Code",
               })
          }
          
     }


     if( check_authorized && check_authorized == "authorized" ){
          return(
               <div className="id">
     
                    {/* desktop menu start */}
                    <DesktopMenu></DesktopMenu>
                    {/* desktop menu end */}
     
                    {/* Mobile Menu */}
                    <MobileMenu></MobileMenu>
                    {/* Mobile Menu End */}
     
                    <section className="booking-section" style={{
                         padding: "10px 0 100px 0px"
                    }} id="msform">
                         <div className="container">
                              <div className="row">
                                   <div className="col-md-8">
     
                                        <div className="row">
                                             <div className="col-md-12">
                                                  {/* progressbar */}
                                                  <ul id="progressbar">
                                                       <li className="active">Frequency</li>
                                                       <li>Service Details</li>
                                                       <li>Date & Time</li>
                                                       <li>Service Details</li>
                                                  </ul>
                                             </div>
                                        </div>
     
                                        <div className="row booking-card">
     
                                             <div className="col-md-12 title mb-3">
                                                  <h4>{service && service.name}</h4>
                                                  <p>
                                                       {service && service.short_description}
                                                  </p>
                                             </div>
     
                                             <div className="col-md-12 select-postal-code mb-3">
                                                  <label htmlFor="">Enter BD postal code</label>
                                                  <input type="text" className="form-control" onChange={postalCodeChange} />
                                             </div>
     
                                             <div className="col-md-12 select-address mb-3">
                                                  <label htmlFor="">Select your address</label>
                                                  <select name="" className="form-control" id="address-select">
                                                       
                                                  </select>
                                                  <span ref={selectAddress} style={{ color: "red" }}></span>
                                             </div>
     
                                             <div className="col-md-12 select-order-duration mb-3">
                                                  <p>Choose address type</p>
                                                  <ul>
                                                       <li onClick={clickOnDuration} data-id="home"> <i className="fas fa-home"></i> Home</li>
                                                       <li onClick={clickOnDuration} data-id="office"> <i className="fas fa-briefcase"></i> Office</li>
                                                       <li onClick={clickOnDuration} data-id="hotel"> <i className="fas fa-hotel"></i> Hotel</li>
                                                  </ul>
                                             </div>
     
                                             <div className="col-md-12 next-step">
                                                  <button onClick={nextStep}>
                                                       Proceed
                                                  </button>
                                             </div>
     
                                        </div>
                                        
                                   </div>
     
                                   <div className="col-md-4 ">
                                        <div className="booking-summary">
                                             <h4>Booking Summary</h4>
                                             <table>
                                                  <tbody>
                                                       <tr>
                                                            <td>Service</td>
                                                            <td>{service && service.name}</td>
                                                       </tr>
                                                  </tbody>
                                             </table>


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

export default StepOneComponent;