

import { Link } from "react-router-dom";
import { useParams } from "react-router";


//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";
import { PageIndicator } from "./Includes/PageIndicator";

const StepFourComponent = () => {

     {/* window scroll to top */}
     window.scrollTo(0, 0);

     const { slug } =  useParams();  
     
     
     function choosePaymentMethod(e){
          let payment_method = document.querySelectorAll(".payment-method ul li.method");
          
          for( let x in payment_method ){
               if( x <= payment_method.length ){
                    payment_method[x].style.background = "#dbfaff"
               }
          }
          e.target.style.background = "#22d3ee"
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

                                        <div className="col-md-12 payment-method mb-4">
                                             <p>Select Payment Method</p>
                                             <ul>
                                                  <li className="method" onClick={choosePaymentMethod}>
                                                       Cash On Delivery
                                                  </li>
                                                  <li className="method" onClick={choosePaymentMethod}>
                                                       Online Payment
                                                  </li>
                                             </ul>
                                        </div>

                                        <div className="col-md-12 customer-information mb-2">
                                             <label>Name</label>
                                             <input type="text" className="form-control" />
                                        </div>

                                        <div className="col-md-12 customer-information mb-2">
                                             <label>Phone</label>
                                             <input type="text" className="form-control" />
                                        </div>

                                        <div className="col-md-12 customer-information mb-2">
                                             <label>Address</label>
                                             <input type="text" className="form-control" />
                                        </div>

                                        <div className="col-md-12 next-step">
                                             <Link to={`/booking-3/${slug}`} className="back">
                                                  Back
                                             </Link>
                                             <Link to='/my-order'>
                                                  Place Order
                                             </Link>
                                        </div>

                                   </div>
                                   
                              </div>

                              <div className="col-md-4 ">
                                   <div className="booking-summary">
                                        <h4>Booking Summary</h4>
                                        <table>
                                             <tbody>
                                                  <tr>
                                                       <td>Service Type</td>
                                                       <td>{slug}</td>
                                                  </tr>
                                                  <tr>
                                                       <td>Material</td>
                                                       <td>Yes</td>
                                                  </tr>
                                                  <tr>
                                                       <td>Duration</td>
                                                       <td>2 Hour</td>
                                                  </tr>
                                                  <tr>
                                                       <td>Number of maids</td>
                                                       <td>1</td>
                                                  </tr>
                                             </tbody>
                                        </table>

                                        <h4 className="mt-3">Date & Times</h4>
                                        <table>
                                             <tbody>
                                                  <tr>
                                                       <td>Sunday, October 14, 2022</td>
                                                  </tr>
                                                  <tr>
                                                       <td>10:00 AM</td>
                                                  </tr>
                                             </tbody>
                                        </table>

                                        <h4 className="mt-3">Address</h4>
                                        <table>
                                             <tbody>
                                                  <tr>
                                                       <td>Mohakhali TB Gate, Dhaka - Bangladesh</td>
                                                  </tr>
                                             </tbody>
                                        </table>

                                        <h4 className="mt-3">Price Details</h4>
                                        <table>
                                             <tbody>
                                                  <tr>
                                                       <td>Service Cose</td>
                                                       <td>100 BDT</td>
                                                  </tr>
                                                  <tr>
                                                       <td>VAT</td>
                                                       <td>10 BDT</td>
                                                  </tr>
                                                  <tr className="total-amount">
                                                       <td>Total</td>
                                                       <td>110 BDT</td>
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

export default StepFourComponent;