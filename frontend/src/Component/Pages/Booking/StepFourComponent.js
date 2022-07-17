

import { Link } from "react-router-dom";
import { useParams } from "react-router";


//import pages

import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import { PageIndicator } from "./Includes/PageIndicator";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "../../Include/Header";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Loading from "../../Include/Loading";
const MySwal = withReactContent(Swal)

const StepFourComponent = (props) => {

     {/* window scroll to top */}
     // window.scrollTo(0, 0);

     let [check_authorized, set_authorized] = useState('unauthorized');
     const manage_session_url = `${window.url}/manage-session`;
     const [user, setUser] = useState(null);  

     const [postal_code, set_postal_code] = useState(null)
     const [address, set_address] = useState(null)
     const [address_type, set_address_type] = useState(null)
     const [day_delivery,set_day_delivery] = useState(null);
     const [time_delivery,set_time_delivery] = useState(null);
     const [driver_instructions_delivery,set_driver_instructions_delivery] = useState(null);
     const [day_collection,set_day_collection] = useState(null);
     const [time_collection,set_time_collection] = useState(null);
     const [driver_instructions_collection,set_driver_instructions_collection] = useState(null);
     const [services_data, set_services_data] = useState(null);
     const [name, set_name] =  useState(null)
     const [phone, set_phone] =  useState(null)
     const [email, set_email] =  useState(null)

     const dispatch = useDispatch();
     const history = useHistory();

     useEffect( () => {

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
                         set_name(response.data.name)
                         set_email(response.data.email)
                         set_phone(response.data.phone)
                         localStorage.setItem('token',response.data.remember_token)
                         set_authorized('authorized');
                    }
     
               })
          }
          else{
               history.push("/login")
          }

          let step_one_data = JSON.parse(localStorage.getItem("step_one_data"));
          if( step_one_data ){
               set_postal_code(step_one_data.postal_code)              
               set_address(step_one_data.address_in_details)              
               set_address_type(step_one_data.address_type)              
          }
          else{
               history.push("booking-3")
          }

          let step_two_data = JSON.parse(localStorage.getItem("step_two_data"));
          if( step_two_data ){
               set_day_delivery(step_two_data.day_for_delivery)  
               set_time_delivery(step_two_data.time_for_delivery)  
               set_driver_instructions_delivery(step_two_data.instructions_for_delivery)  
               set_day_collection(step_two_data.day_for_collection)  
               set_time_collection(step_two_data.time_for_collection)  
               set_driver_instructions_collection(step_two_data.instructions_for_collection)  
          }
          else{
               history.push("booking-3")
          }

          let services = JSON.parse(localStorage.getItem("services"));
          if(services){
               set_services_data(services)
          }
          else{
               history.push("booking-3")
          }


     },[])
     
     
     function choosePaymentMethod(e){
          let payment_method = document.querySelectorAll(".payment-method ul li.method");
          
          for( let x in payment_method ){
               if( x <= payment_method.length ){
                    payment_method[x].style.background = "#dbfaff"
                    payment_method[x].classList.remove("selected")
               }
          }
          e.target.classList.add("selected")
          e.target.style.background = "#ffb400"
     }

     function placeOrder(){
          const loading = document.getElementById("loading-wraper")
          loading.style.display = "block"

          if( !name ){
               MySwal.fire({
                    title : "",
                    text : "Please enter your name",
               })
               loading.style.display = "none"

          }
          if( !phone ){
               MySwal.fire({
                    title : "",
                    text : "Please enter your phone",
               })
               loading.style.display = "none"

          }
          if( !email ){
               MySwal.fire({
                    title : "",
                    text : "Please enter your email",
               })
               loading.style.display = "none"

          }

          let payment_method = document.querySelector(".payment-method ul li.method.selected");

          if(payment_method){
               let contact_data = {
                    name : name,
                    phone : phone,
                    email : email,
                    payment_method : payment_method.dataset.id
               }

               let step_one_data = JSON.parse(localStorage.getItem("step_one_data"));
               let step_two_data = JSON.parse(localStorage.getItem("step_two_data"));
               let services = JSON.parse(localStorage.getItem("services"));
               let token = localStorage.getItem("token");
               
               if( step_one_data && step_two_data && services.length > 0 && contact_data && token ){
                    const order_place_url = `${window.url}/place-order`;
                    const formData = new FormData();

                    formData.append("step_one_data",localStorage.getItem("step_one_data"))
                    formData.append("step_two_data",localStorage.getItem("step_two_data"))
                    formData.append('services',localStorage.getItem("services"))
                    formData.append('contact_data',JSON.stringify(contact_data))
                    formData.append('token',token)

                    fetch(order_place_url,{
                         method : "POST",
                         body: formData
                    })
                    .then( response => response.json() )
                    .then( response => {
                         loading.style.display = "none"
                         
                         if( response.status == "success" ){
                              localStorage.removeItem("step_one_data")
                              localStorage.removeItem("step_two_data")
                              localStorage.removeItem("contact_data")
                              localStorage.removeItem("services")

                              MySwal.fire({
                                   title : "",
                                   text : "New order placed",
                              })

                              history.push("/my-order")
                         }

                    })
                    .catch( response => {
                         loading.style.display = "none"
                         
                    })

               }
               else{
                    MySwal.fire({
                         title : "",
                         text : "Something went wrong",
                    })
                    history.push("/booking-1")
               loading.style.display = "none"

               }
               
          }
          else{
               MySwal.fire({
                    title : "",
                    text : "Please choose a payment method",
               })
               loading.style.display = "none"

          }
     }


     if( check_authorized && check_authorized == "authorized" ){
          return(
               <div className="id">

                    {/* loading */}
                    <Loading></Loading>

                    <MobileMenu data={props.applicationData}></MobileMenu>

                    <div className="page-wrapper">
                         <Header data={props.applicationData}></Header>

                         <section className="booking-section" style={{
                              padding: "10px 0 100px 0px"
                         }} id="msform">
                              <div className="container">
                                   <div className="row">
                                        <div className="col-md-8">

                                             <div className="row">
                                                  <div className="col-md-12">
                                                       {/* progressbar */}
                                                       <PageIndicator></PageIndicator>
                                                  </div>
                                             </div>

                                             <div className="row booking-card">

                                                  <div className="col-md-12 payment-method mb-4">
                                                       <p>Select Payment Method</p>
                                                       <ul>
                                                            <li className="method" data-id="Cash" onClick={choosePaymentMethod}>
                                                                 Cash On Delivery
                                                            </li>
                                                            <li className="method" data-id="Online" onClick={choosePaymentMethod}>
                                                                 Online Payment
                                                            </li>
                                                       </ul>
                                                  </div>

                                                  <div className="col-md-12 customer-information mb-2">
                                                       <label>Name</label>
                                                       <input type="text" className="form-control" value={name} onChange={ e => set_name(e.target.value) } />
                                                  </div>

                                                  <div className="col-md-12 customer-information mb-2">
                                                       <label>Phone</label>
                                                       <input type="text" className="form-control" value={phone} onChange={ e => set_phone(e.target.value) } />
                                                  </div>

                                                  <div className="col-md-12 customer-information mb-2">
                                                       <label>Email</label>
                                                       <input type="text" className="form-control" value={email } onChange={ e => set_email(e.target.value) } />
                                                  </div>

                                                  <div className="col-md-12 next-step">
                                                       <Link to={`/booking-3`} className="back">
                                                            Back
                                                       </Link>
                                                       <Link onClick={placeOrder}>
                                                            Place Order
                                                       </Link>
                                                  </div>

                                             </div>
                                             
                                        </div>

                                        <div className="col-md-4 ">
                                             <div className="booking-summary">

                                                  <h4 className="mt-3">Address</h4>
                                                  <table>
                                                       <tbody>
                                                            <tr>
                                                                 <td>Postal Code : <span>{postal_code && postal_code}</span> </td>
                                                            </tr>
                                                            <tr>
                                                                 <td>Address : {address && address}</td>
                                                            </tr>
                                                            <tr>
                                                                 <td>Address Type : {address_type && address_type}</td>
                                                            </tr>
                                                       </tbody>
                                                  </table>

                                                  <h4 className="mt-3">Collection Time</h4>
                                                  <table>
                                                       <tbody>
                                                            <tr>
                                                                 <td>Day : <span>{ day_collection && day_collection }</span></td>
                                                            </tr>
                                                            <tr>
                                                                 <td>Time : <span>{ time_collection && time_collection }</span></td>
                                                            </tr>
                                                            <tr>
                                                                 <td>Driver Instruction : <span>{ driver_instructions_collection && driver_instructions_collection }</span></td>
                                                            </tr>
                                                       </tbody>
                                                  </table>

                                                  <h4 className="mt-3">Delivery Time</h4>
                                                  <table>
                                                       <tbody>
                                                            <tr>
                                                                 <td>Day : <span>{ day_delivery && day_delivery }</span></td>
                                                            </tr>
                                                            <tr>
                                                                 <td>Time : <span>{ time_delivery && time_delivery }</span></td>
                                                            </tr>
                                                            <tr>
                                                                 <td>Driver Instruction : <span>{ driver_instructions_delivery && driver_instructions_delivery }</span></td>
                                                            </tr>
                                                       </tbody>
                                                  </table>

                                                  <h4 className="mt-3">Services</h4>
                                                  <table>
                                                       <tbody>
                                                            {
                                                                 services_data && services_data.map( item => (
                                                                      <tr>
                                                                           <td>
                                                                                {item.name}
                                                                           </td>
                                                                      </tr>
                                                                 ))
                                                            }
                                                       </tbody>
                                                  </table>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>

                         <Footer data={props.applicationData}></Footer>
                    </div>

               </div> 
          );
     }
     else{
          return(
               <div className="id">

                    <MobileMenu data={props.applicationData}></MobileMenu>

                    <div className="page-wrapper">
                         <Header data={props.applicationData}></Header>

                         {/* please wait section start */}
                         <section className="please-wait">
                              <h4 className="content">Please Wait...</h4>
                         </section>
                         {/* please wait section end */}

                         <Footer data={props.applicationData}></Footer>
                    </div>

               </div>  
          );
     }
}

export default StepFourComponent;