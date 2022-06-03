import { useParams } from "react-router-dom";

export const PageIndicator = (props) => {

     const pathname = window.location.pathname
     const {slug} = useParams();

     return(
          <div className="id">
               
                    {
                         pathname && ( pathname == "/booking-1" ) ?
                         <ul className="step-bar">
                              <li className="step-bar__item step-bar__item_active">
                                   <a >
                                        Address
                                   </a>
                              </li>
                              <li className="step-bar__item">
                                   <a >
                                        Collection
                                   </a>
                              </li>
                              <li className="step-bar__item">
                                   <a >
                                        Services
                                   </a>
                              </li>
                              <li className="step-bar__item">
                                   <a >
                                        Contact
                                   </a>
                              </li> 
                         </ul>: ""
                    }

                    {
                         pathname && ( pathname == "/booking-2" ) ?
                         <ul className="step-bar">
                              <li className="step-bar__item step-bar__item_active">
                                   <a >
                                        Address
                                   </a>
                              </li>
                              <li className="step-bar__item step-bar__item_active">
                                   <a >
                                        Collection
                                   </a>
                              </li>
                              <li className="step-bar__item">
                                   <a >
                                        Services
                                   </a>
                              </li>
                              <li className="step-bar__item">
                                   <a >
                                        Contact
                                   </a>
                              </li> 
                         </ul>: ""
                    }

                    {
                         pathname && ( pathname == "/booking-3" ) ?
                         <ul className="step-bar">
                              <li className="step-bar__item step-bar__item_active">
                                   <a >
                                        Address
                                   </a>
                              </li>
                              <li className="step-bar__item step-bar__item_active">
                                   <a >
                                        Collection
                                   </a>
                              </li>
                              <li className="step-bar__item step-bar__item_active">
                                   <a >
                                        Services
                                   </a>
                              </li>
                              <li className="step-bar__item">
                                   <a >
                                        Contact
                                   </a>
                              </li> 
                         </ul>: ""
                    }

                    {
                         pathname && ( pathname == "/booking-4" ) ?
                         <ul className="step-bar">
                              <li className="step-bar__item step-bar__item_active">
                                   <a >
                                        Address
                                   </a>
                              </li>
                              <li className="step-bar__item step-bar__item_active">
                                   <a >
                                        Collection
                                   </a>
                              </li>
                              <li className="step-bar__item step-bar__item_active">
                                   <a >
                                        Services
                                   </a>
                              </li>
                              <li className="step-bar__item step-bar__item_active">
                                   <a >
                                        Contact
                                   </a>
                              </li> 
                         </ul>: ""
                    }
                    
               
          </div>
     );
}