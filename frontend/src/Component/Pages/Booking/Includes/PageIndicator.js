import { useParams } from "react-router-dom";

export const PageIndicator = (props) => {

     const pathname = window.location.pathname
     const {slug} = useParams();

     return(
          <div className="id">
               <ul id="progressbar">
                    {
                         ( pathname == `/booking-1` ) 
                         ?
                         <li className="active">Frequency</li> 
                         :
                         <li>Frequency</li>
                    }
                    {
                         ( pathname == `/booking-2` ) 
                         ?
                         <li className="active">Date & Time</li>
                         :
                         <li>Date & Time</li>
                    }
                    {
                         ( pathname == `/booking-3` ) 
                         ?
                         <li className="active">Select Service</li> 
                         :
                         <li>Select Service</li>
                    }
                    {
                         ( pathname == `/booking-4` ) 
                         ?
                         <li className="active">Service Details</li> 
                         :
                         <li>Service Details</li>
                    }
               </ul>
          </div>
     );
}