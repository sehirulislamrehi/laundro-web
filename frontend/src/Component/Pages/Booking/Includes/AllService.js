import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddService, getAllServices, RemoveService } from "../../../../action";
import { useHistory } from "react-router-dom";



export const AllService = () => {

     const dispatch = useDispatch();
     const history = useHistory();
     const [get_all_services,set_get_all_services] = React.useState(null)
     let service_instruction = document.getElementsByClassName("service-instruction")
     const [service_instructions, set_service_instructions] = useState(null)

     useEffect(() => {

          //get services
          const get_services_url = `${window.url}/get-all-services`;

          fetch(get_services_url,{
               method : "GET"
          })
          .then( response => response.json() )
          .then( response => {
               set_get_all_services(response.data)
          })
          .catch( response => {
               
          })
          
     },[])



     const addService = (e) => {

          let slug = e.target.dataset.slug

          //service details
          const service_details_url = `${window.url}/service-details/${slug}`;

          fetch(service_details_url,{
               method : "GET"
          })
          .then( response => response.json() )
          .then( response => {
               if( response.status == "success" ){
                    if( response.data.service_durations.length == 0 ){
                         dispatch(AddService(response.data))

                         const get_services_url = `${window.url}/get-all-services`;
                         fetch(get_services_url,{
                              method : "GET"
                         })
                         .then( response => response.json() )
                         .then( response => {
                              set_get_all_services(response.data)
                         })
                         .catch( response => {
                              
                         })
                    }
                    else{
                         service_instruction[0].style.display = "block"
                         set_service_instructions(response.data)
                    }
               }
               if( response.status == "warning" ){
                    
               }
               if( response.status == "error" ){
                    
               }
          })
          .catch( response => {
               
          })
     };

     

     const removeService = (e) => {
          let slug = e.target.dataset.slug

          //service details
          const service_details_url = `${window.url}/service-details/${slug}`;

          fetch(service_details_url,{
               method : "GET"
          })
          .then( response => response.json() )
          .then( response => {
               if( response.status == "success" ){
                    dispatch(RemoveService(response.data))
                    const get_services_url = `${window.url}/get-all-services`;
                    fetch(get_services_url,{
                         method : "GET"
                    })
                    .then( response => response.json() )
                    .then( response => {
                         set_get_all_services(response.data)
                    })
                    .catch( response => {
                         
                    })

               }
               if( response.status == "warning" ){
                    
               }
               if( response.status == "error" ){
                    
               }
          })
          .catch( response => {
               
          })
     }

     function closePopup(){
          service_instruction[0].style.display = "none"
     }

     function addInstruction(e){
          let data = {
               instructions_id : "",
               instructions : "",
               price : "",
               id : "",
               name : "",
               slug : "",
          }
          data.instructions_id = e.target.dataset.id
          data.instructions = e.target.dataset.instructions
          data.price = e.target.dataset.price
          data.id = e.target.dataset.service_id
          data.name = e.target.dataset.service_name
          data.slug = e.target.dataset.service_slug

          dispatch(AddService(data))
          const get_services_url = `${window.url}/get-all-services`;
          fetch(get_services_url,{
               method : "GET"
          })
          .then( response => response.json() )
          .then( response => {
               set_get_all_services(response.data)
               service_instruction[0].style.display = "none"
          })
          .catch( response => {
               
          })
          
     }

     return(
          <div className="id">
               {
                    get_all_services && get_all_services.map( item => (
                    <div className="col-md-12 service-item-card" key={item.id} data-slug={item.slug}>
                         <div className="row">

                              {/* icon */}
                              <div className="col-md-1 col-2 service-icon">
                                   <img src={`${window.image_path}/images/service/${item.icon}`} alt=""></img>
                              </div>                                                     

                              {/* service information */}
                              <div className="col-md-9 col-7 service-information">
                                   <p>{item.name}</p>
                                   <Link to={`/service-details/${item.slug}`}>
                                        <i className="fas fa-info-circle" style={{marginRight:"5px"}}></i>
                                        Service Details
                                   </Link>
                              </div> 

                              {/* service buttons */}
                              <div className="col-md-2 col-3 service-buttons">
                                   {
                                        JSON.parse(localStorage.getItem("services")) && 
                                        JSON.parse(localStorage.getItem("services")).find( e => e.slug == item.slug ) ?

                                        <button className="remove-btn" data-slug={item.slug} onClick={removeService}>
                                             <i className="fas fa-times"></i>
                                             Remove
                                        </button> : 

                                        <button className="add-btn" data-slug={item.slug} onClick={addService}>
                                             <i className="fas fa-plus"></i>
                                             Add
                                        </button>
                                        
                                   }
                                   
                              </div> 

                         </div>
                    </div>
                    ))
               }

               {/* service instructions */}
               <div className="col-md-12 service-instruction">
                    <div className="instruction-box">
                         <i className="fas fa-times" onClick={closePopup}></i>
                         <div className="row">

                              {
                                   service_instructions && service_instructions.service_durations.map( item => (
                                        <div className="col-md-3 col-6"
                                             onClick={addInstruction}
                                             data-id={item.id}
                                             data-instructions={item.instructions}
                                             data-price={item.price}
                                             data-service_id={service_instructions.id}
                                             data-service_name={service_instructions.name}
                                             data-service_slug={service_instructions.slug}
                                        >
                                             <div className="item"
                                                  onClick={addInstruction}
                                                  data-id={item.id}
                                                  data-instructions={item.instructions}
                                                  data-price={item.price}
                                                  data-service_id={service_instructions.id}
                                                  data-service_name={service_instructions.name}
                                                  data-service_slug={service_instructions.slug}
                                             >
                                                  <p 
                                                       onClick={addInstruction}
                                                       data-id={item.id}
                                                       data-instructions={item.instructions}
                                                       data-price={item.price}
                                                       data-service_id={service_instructions.id}
                                                       data-service_name={service_instructions.name}
                                                       data-service_slug={service_instructions.slug}
                                                  >{item.instructions}</p>                              
                                                  <p 
                                                       onClick={addInstruction}
                                                       data-id={item.id}
                                                       data-instructions={item.instructions}
                                                       data-price={item.price}
                                                       data-service_id={service_instructions.id}
                                                       data-service_name={service_instructions.name}
                                                       data-service_slug={service_instructions.slug}
                                                  >{item.price} BDT</p> 
                                             </div>                             
                                        </div>
                                   ))
                              }
                              


                         </div>
                    </div>
               </div>

          </div>
     );
}
