import { useParams } from "react-router-dom";

export const PageIndicator = (props) => {

     const pathname = window.location.pathname
     const {slug} = useParams();

     return(
          <div className="id">
               <ul id="progressbar">
                    {
                         ( pathname == `/booking-1/${slug}` ) 
                         ?
                         <li className="active">Frequency</li> 
                         :
                         <li>Frequency</li>
                    }
                    {
                         ( pathname == `/booking-2/${slug}` ) 
                         ?
                         <li className="active">Date & Time</li>
                         :
                         <li>Date & Time</li>
                    }
                    {
                         ( pathname == `/booking-3/${slug}` ) 
                         ?
                         <li className="active">Select Service</li> 
                         :
                         <li>Select Service</li>
                    }
                    {
                         ( pathname == `/booking-4/${slug}` ) 
                         ?
                         <li className="active">Service Details</li> 
                         :
                         <li>Service Details</li>
                    }
               </ul>
          </div>
     );
}