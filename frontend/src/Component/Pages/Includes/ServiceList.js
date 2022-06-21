
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllServices } from "../../../action";


const ServiceList = (props) => {

     //INITIALIZATION
     const dispatch = useDispatch();
     const [service, setService] = useState(null)


     useEffect( () => {

          //get services
          const get_services_url = `${window.url}/get-all-services`;

          fetch(get_services_url,{
               method : "GET"
          })
          .then( response => response.json() )
          .then( response => {
               dispatch(getAllServices(response.data))
          })
          .catch( response => {
               
          })

          if( props.service ){
               setService(props.service.slug)
          }

     },[]);


     const get_all_services = useSelector( state => state.getAllServices )

     return(
          <div className="id">
               {
                    get_all_services && get_all_services.map(item => (
                         (
                              props.service ? 
                              (
                                   (item.slug == props.service.slug) ? 
                                   <li className="active" key={item.id}>
                                        <Link to={`/service-details/${item.slug}`}>
                                             {item.name} 
                                             <span className="fa fa-angle-right"></span>
                                        </Link>
                                   </li> : 
                                   <li key={item.id}>
                                        <Link to={`/service-details/${item.slug}`}>
                                             {item.name} 
                                             <span className="fa fa-angle-right"></span>
                                        </Link>
                                   </li>
                              ) : ''
                         )
                         
                    
                    ))
               }
          </div>
     );
}

export default ServiceList;