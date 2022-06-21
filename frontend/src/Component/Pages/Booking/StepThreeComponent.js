

import { Link } from "react-router-dom";
import { useParams } from "react-router";


//import pages

import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import { PageIndicator } from "./Includes/PageIndicator";
import { useEffect, useState } from "react";
import { getAllServices } from "../../../action";
import { useDispatch, useSelector } from "react-redux";
import { AllService } from "./Includes/AllService";
import { useHistory } from "react-router-dom";
import Header from "../../Include/Header";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const StepThreeComponent = () => {

     {/* window scroll to top */}
     // window.scrollTo(0, 0);

     let [check_authorized, set_authorized] = useState('unauthorized');
     const manage_session_url = `${window.url}/manage-session`;
     const [user, setUser] = useState(null);
     
     const history = useHistory();

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
     
     const dispatch = useDispatch();

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
               history.push("booking-2")
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
               history.push("booking-2")
          }


     },[])

     const nextStep = () => {

          if( JSON.parse(localStorage.getItem("services")) && JSON.parse(localStorage.getItem("services")).length != 0 ){
               history.push("/booking-4")
          }
          else{
               MySwal.fire({
                    title : "",
                    text : "Please select at least one service",
               })
          }

     }
    
     if( check_authorized && check_authorized == "authorized" ){
          return(
               <div className="id">

                    <MobileMenu></MobileMenu>

                    <div className="page-wrapper">
                         <Header></Header>

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

                                                  <div className="col-md-12 choose-date mb-4">
                                                       <p>What services do you need?</p>
                                                  </div>

                                                  <AllService></AllService>

                                                  <div className="col-md-12 next-step">
                                                       <Link to={`/booking-2`} className="back">
                                                            Back
                                                       </Link>
                                                       <Link onClick={nextStep}>
                                                            Proceed
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

export default StepThreeComponent;