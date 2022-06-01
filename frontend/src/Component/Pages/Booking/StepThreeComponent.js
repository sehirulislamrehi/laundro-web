

import { Link } from "react-router-dom";
import { useParams } from "react-router";


//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import { PageIndicator } from "./Includes/PageIndicator";
import { useEffect, useState } from "react";
import { getAllServices } from "../../../action";
import { useDispatch, useSelector } from "react-redux";
import { AllService } from "./Includes/AllService";

const StepThreeComponent = () => {

     {/* window scroll to top */}
     // window.scrollTo(0, 0);
     

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

          let step_one_data = JSON.parse(localStorage.getItem("step_one_data"));
          if( step_one_data ){
               set_postal_code(step_one_data.postal_code)              
               set_address(step_one_data.address_in_details)              
               set_address_type(step_one_data.address_type)              
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


     },[])


    

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
                                             <Link>
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

               {/* Footer */}
               <Footer></Footer>
               {/* Footer End */}

          </div>
     );
}

export default StepThreeComponent;