

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
import { PageIndicator } from "./Includes/PageIndicator";
const MySwal = withReactContent(Swal)

const StepOneComponent = () => {

     {/* window scroll to top */}
     // window.scrollTo(0, 0);

     let [check_authorized, set_authorized] = useState('unauthorized');
     const history = useHistory();

     //INITIALIZATION
     const dispatch = useDispatch();

     //manage session
     const [user, setUser] = useState(null);
     const manage_session_url = `${window.url}/manage-session`;

     const postal_code_field = useRef(null);
     const [postal_code, set_postal_code] = useState('')
     const selectAddress = useRef(null)
     const [address_in_details, set_address_in_details] = useState(null);
     const address_details_field = useRef(null)

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
          


          //if setp one data exists
          let data = JSON.parse(localStorage.getItem("step_one_data"))
          if( data ){

               //postal code set
               set_postal_code(data.postal_code)

               setTimeout(function(){
                    //address set
                    const url = `${window.url}/postal-code-area`;
                    const address_select = document.getElementById("address-select");
                    const formData = new FormData()
                    formData.append('code',data.postal_code)
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
                                   
                                   if( response.data[i].id == data.address_id ){
                                        var str = `<option data-id='${response.data[i].id}' selected>${response.data[i].name}</option>`
                                   }
                                   else{
                                        var str = `<option data-id='${response.data[i].id}'>${response.data[i].name}</option>`
                                   }

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

                    //address type set
                    let select_address_type = document.querySelectorAll(".select-order-duration ul li");
                    for( let x in select_address_type ){
                         if( x < select_address_type.length ){
                              if( select_address_type[x].dataset.id == data.address_type ){
                                   select_address_type[x].classList.add("selected")
                                   select_address_type[x].style.background = "#22d3ee"
                              }
                              else{
                                   select_address_type[x].classList.remove("selected")
                                   select_address_type[x].style.background = "#efefef"
                              }
                         }
                    }
                    
               },1000)
               
               //address in details set
               set_address_in_details(data.address_in_details)
          }

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
                         if( address_in_details ){
                              let address_type = select_address_type.dataset.id
                              let step_one_data = {
                                   postal_code : postal_code,
                                   address_id : address_id,
                                   address_type : address_type,
                                   address_in_details : address_in_details,
                              }; 
                              localStorage.setItem('step_one_data',JSON.stringify(step_one_data))
                              history.push(`/booking-2`)
                         }
                         else{
                              MySwal.fire({
                                   title : "",
                                   text : "Please type to details address",
                              })
                         }
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
                                   <div className="col-md-12">
     
                                        <div className="row">
                                             <div className="col-md-12">
                                                  {/* progressbar */}
                                                  <PageIndicator></PageIndicator>
                                             </div>
                                        </div>
     
                                        <div className="row booking-card">

     
                                             <div className="col-md-12 select-postal-code mb-3">
                                                  <label htmlFor="">Enter BD postal code</label>
                                                  <input type="text" className="form-control" onChange={postalCodeChange} value={postal_code} />
                                             </div>
     
                                             <div className="col-md-12 select-address mb-3">
                                                  <label htmlFor="">Select your address</label>
                                                  <select name="" className="form-control" id="address-select">
                                                       
                                                  </select>
                                                  <span ref={selectAddress} style={{ color: "red" }}></span>
                                             </div>

                                             <div className="col-md-12 select-postal-code mb-3">
                                                  <label htmlFor="">Address in details</label>
                                                  <input type="text" className="form-control"
                                                       ref={address_details_field}
                                                       onChange={
                                                            e => set_address_in_details(e.target.value)
                                                       }
                                                       value={address_in_details}
                                                  />
                                             </div>
     
                                             <div className="col-md-12 select-order-duration mb-3">
                                                  <p>Choose address type</p>
                                                  <ul>
                                                       <li onClick={clickOnDuration} data-id="Home"> <i className="fas fa-home"></i> Home</li>
                                                       <li onClick={clickOnDuration} data-id="Office"> <i className="fas fa-briefcase"></i> Office</li>
                                                       <li onClick={clickOnDuration} data-id="Hotel"> <i className="fas fa-hotel"></i> Hotel</li>
                                                  </ul>
                                             </div>
     
                                             <div className="col-md-12 next-step">
                                                  <button onClick={nextStep}>
                                                       Proceed
                                                  </button>
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

export default StepOneComponent;