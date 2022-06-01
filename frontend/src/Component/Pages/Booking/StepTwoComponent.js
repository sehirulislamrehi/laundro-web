

import { Link } from "react-router-dom";
import { useParams } from "react-router";


//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import { PageIndicator } from "./Includes/PageIndicator";
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const StepTwoComponent = () => {

     {/* window scroll to top */}
     // window.scrollTo(0, 0);

     const { slug } =  useParams();  
     const history = useHistory(); 
     const get_date_time_url = `${window.url}/date-and-time`;
     const [postal_code, set_postal_code] = useState(null)
     const [address, set_address] = useState(null)
     const [address_type, set_address_type] = useState(null)
     const [others_instruction, set_others_instruction] = useState(null)

     useEffect( () => {

          //Get Date and Time
          fetch(get_date_time_url,{
               method : "GET"
          })
          .then( response => response.json() )
          .then( response => {
               if( response.status == "success" ){

                    let data = JSON.parse(localStorage.getItem("step_two_data"))

                    //select_day_for_collection
                    let select_day_for_collection = document.getElementById("select_day_for_collection")
                    for( let i = 0 ; i < response.data.select_day_for_collection.length ; i++ ){

                         if( data && data.day_for_collection == response.data.select_day_for_collection[i].day ){
                              var str = `<option data-id='${response.data.select_day_for_collection[i].day}' selected>${response.data.select_day_for_collection[i].day}</option>`;
                         }
                         else{
                              var str = `<option data-id='${response.data.select_day_for_collection[i].day}'>${response.data.select_day_for_collection[i].day}</option>`;
                         }
                         var div = document.createElement('div');
                         div.innerHTML = str;

                         while ( div.children.length > 0 ) {
                              select_day_for_collection.append(div.children[0]);
                         }
                         
                    }
                    //select_time_for_collection
                    let select_time_for_collection = document.getElementById("select_time_for_collection")
                    for( let i = 0 ; i < response.data.select_time.length ; i++ ){

                         if( data && data.time_for_collection == response.data.select_time[i].time ){
                              var str = `<option data-id='${response.data.select_time[i].time}' selected>${response.data.select_time[i].time}</option>`;
                         }
                         else{
                              var str = `<option data-id='${response.data.select_time[i].time}'>${response.data.select_time[i].time}</option>`;
                         }

                         var div = document.createElement('div');
                         div.innerHTML = str;
                         while ( div.children.length > 0 ) {
                              select_time_for_collection.append(div.children[0]);
                         }
                    }
                    //driver_instructions_for_collection
                    let driver_instructions_for_collection = document.getElementById("driver_instructions_for_collection")
                    for( let i = 0 ; i < response.data.driver_instructions_for_collection.length ; i++ ){

                         if( data && data.instructions_for_collection == response.data.driver_instructions_for_collection[i].instructions ){
                              var str = `<option data-id='${response.data.driver_instructions_for_collection[i].instructions}' selected>${response.data.driver_instructions_for_collection[i].instructions}</option>`;
                         }
                         else{
                              var str = `<option data-id='${response.data.driver_instructions_for_collection[i].instructions}'>${response.data.driver_instructions_for_collection[i].instructions}</option>`;
                         }

                         var div = document.createElement('div');
                         div.innerHTML = str;
                         while ( div.children.length > 0 ) {
                              driver_instructions_for_collection.append(div.children[0]);
                         }
                    }

                    //select_day_for_delivery
                    let select_day_for_delivery = document.getElementById("select_day_for_delivery")
                    for( let i = 0 ; i < response.data.select_day_for_delivery.length ; i++ ){

                         if( data && data.day_for_delivery == response.data.select_day_for_delivery[i].day ){
                              var str = `<option data-id='${response.data.select_day_for_delivery[i].day}' selected>${response.data.select_day_for_delivery[i].day}</option>`;
                         }
                         else{
                              var str = `<option data-id='${response.data.select_day_for_delivery[i].day}'>${response.data.select_day_for_delivery[i].day}</option>`;
                         }

                         var div = document.createElement('div');
                         div.innerHTML = str;
                         while ( div.children.length > 0 ) {
                              select_day_for_delivery.append(div.children[0]);
                         }
                    }
                    //select_time_for_delivery
                    let select_time_for_delivery = document.getElementById("select_time_for_delivery")
                    for( let i = 0 ; i < response.data.select_time.length ; i++ ){

                         if( data && data.time_for_delivery == response.data.select_time[i].time ){
                              var str = `<option data-id='${response.data.select_time[i].time}' selected>${response.data.select_time[i].time}</option>`;
                         }
                         else{
                              var str = `<option data-id='${response.data.select_time[i].time}'>${response.data.select_time[i].time}</option>`;
                         }

                         var div = document.createElement('div');
                         div.innerHTML = str;
                         while ( div.children.length > 0 ) {
                              select_time_for_delivery.append(div.children[0]);
                         }
                    }
                    //driver_instructions_for_collection
                    let driver_instructions_for_delivery = document.getElementById("driver_instructions_for_delivery")
                    for( let i = 0 ; i < response.data.driver_instructions_for_delivery.length ; i++ ){

                         if( data && data.instructions_for_delivery == response.data.driver_instructions_for_delivery[i].instructions ){
                              var str = `<option data-id='${response.data.driver_instructions_for_delivery[i].instructions}' selected>${response.data.driver_instructions_for_delivery[i].instructions}</option>`;
                         }
                         else{
                              var str = `<option data-id='${response.data.driver_instructions_for_delivery[i].instructions}'>${response.data.driver_instructions_for_delivery[i].instructions}</option>`;
                         }

                         var div = document.createElement('div');
                         div.innerHTML = str;
                         while ( div.children.length > 0 ) {
                              driver_instructions_for_delivery.append(div.children[0]);
                         }
                    }

                    //others instruction
                    if( data ){
                         document.getElementById("other-instructions").value = data.others_instruction
                    }

               }
          })
          .catch( response => {
               
          })

          let step_one_data = JSON.parse(localStorage.getItem("step_one_data"));

          if( step_one_data ){
               set_postal_code(step_one_data.postal_code)              
               set_address(step_one_data.address_in_details)              
               set_address_type(step_one_data.address_type)              
          }

     },[]);


     const nextStep = () => {
          let select_day_for_collection = document.getElementById("select_day_for_collection")
          let select_time_for_collection = document.getElementById("select_time_for_collection")
          let driver_instructions_for_collection = document.getElementById("driver_instructions_for_collection")
          let select_day_for_delivery = document.getElementById("select_day_for_delivery")
          let select_time_for_delivery = document.getElementById("select_time_for_delivery")
          let driver_instructions_for_delivery = document.getElementById("driver_instructions_for_delivery")

          if( 
               select_day_for_collection.options[select_day_for_collection.selectedIndex] &&
               select_time_for_collection.options[select_time_for_collection.selectedIndex] &&
               driver_instructions_for_collection.options[driver_instructions_for_collection.selectedIndex] &&
               select_day_for_delivery.options[select_day_for_delivery.selectedIndex] &&
               select_time_for_delivery.options[select_time_for_delivery.selectedIndex] &&
               driver_instructions_for_delivery.options[driver_instructions_for_delivery.selectedIndex] 
          ){
               let day_for_collection = select_day_for_collection.options[select_day_for_collection.selectedIndex].dataset.id
               let time_for_collection = select_time_for_collection.options[select_time_for_collection.selectedIndex].dataset.id
               let instructions_for_collection = driver_instructions_for_collection.options[driver_instructions_for_collection.selectedIndex].dataset.id
               let day_for_delivery = select_day_for_delivery.options[select_day_for_delivery.selectedIndex].dataset.id
               let time_for_delivery = select_time_for_delivery.options[select_time_for_delivery.selectedIndex].dataset.id
               let instructions_for_delivery = driver_instructions_for_delivery.options[driver_instructions_for_delivery.selectedIndex].dataset.id
               
               let step_two_data = {
                    day_for_collection : day_for_collection,
                    time_for_collection : time_for_collection,
                    instructions_for_collection : instructions_for_collection,
                    day_for_delivery : day_for_delivery,
                    time_for_delivery : time_for_delivery,
                    instructions_for_delivery : instructions_for_delivery,
                    others_instruction : others_instruction,
               }; 
               localStorage.setItem('step_two_data',JSON.stringify(step_two_data))
               history.push(`/booking-3/${slug}`)
          }
     }
     

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

                                        {/* collection time */}
                                        <div className="col-md-12 select-order-duration mb-4">
                                             <h6>Collection Time</h6>
                                        </div>
                                        <div className="col-md-12 select-order-duration mb-4">
                                             <div className="row">
                                             
                                                  {/* select day */}
                                                  <div className="col-md-6">
                                                       <p>Select Day</p>
                                                       <select name="" className="form-control" id="select_day_for_collection">
                                                            
                                                       </select>
                                                  </div>

                                                  {/* select Time */}
                                                  <div className="col-md-6">
                                                       <p>Select Time</p>
                                                       <select name="" className="form-control" id="select_time_for_collection">
                                                            
                                                       </select>
                                                  </div>

                                                  {/* Driver Instruction */}
                                                  <div className="col-md-12 mt-3">
                                                       <p>Driver Instructions</p>
                                                       <select name="" className="form-control" id="driver_instructions_for_collection">
                                                            
                                                       </select>
                                                  </div>
                                             
                                             </div>                                             
                                        </div>


                                        {/* delivery time */}
                                        <hr />
                                        <div className="col-md-12 select-order-duration mb-4">
                                             <h6>Delivery Time</h6>
                                        </div>
                                        <div className="col-md-12 select-order-duration mb-4">
                                             <div className="row">
                                             
                                                  {/* select day */}
                                                  <div className="col-md-6">
                                                       <p>Select Day</p>
                                                       <select name="" className="form-control" id="select_day_for_delivery">
                                                            
                                                       </select>
                                                  </div>

                                                  {/* select Time */}
                                                  <div className="col-md-6">
                                                       <p>Select Time</p>
                                                       <select name="" className="form-control" id="select_time_for_delivery">
                                                            
                                                       </select>
                                                  </div>

                                                  {/* Driver Instruction */}
                                                  <div className="col-md-12 mt-3">
                                                       <p>Driver Instructions</p>
                                                       <select name="" className="form-control" id="driver_instructions_for_delivery">
                                                            
                                                       </select>
                                                  </div>
                                             
                                             </div>                                             
                                        </div>

                                        <div className="col-md-12 cleaning-instruction mb-4">
                                             <p>Do you have any specific cleaning instructions?</p>
                                             <textarea name="" rows="3" className="form-control"
                                                  onChange={ e => set_others_instruction(e.target.value) }
                                                  id="other-instructions"
                                             >{others_instruction && others_instruction}</textarea>
                                        </div>

                                        <div className="col-md-12 next-step">
                                             <Link to={`/booking-1/${slug}`} className="back">
                                                  Back
                                             </Link>
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
                                                       <td>{slug}</td>
                                                  </tr>
                                             </tbody>
                                        </table>

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

export default StepTwoComponent;