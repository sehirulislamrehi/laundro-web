

import { Link } from "react-router-dom";
import { useParams } from "react-router";


//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";

const StepTwoComponent = () => {

     {/* window scroll to top */}
     window.scrollTo(0, 0);

     function clickOnDuration(e){
          if( e.target.previousElementSibling ){
               e.target.previousElementSibling.style.background = "#efefef"
          }
          if( e.target.nextElementSibling ){
               e.target.nextElementSibling.style.background = "#efefef"
          }
          e.target.style.background = "#22d3ee"
     }

     //item plus
     function itemPlus(e){
          if( e.target.parentElement.dataset.id == 1 ){
               e.target.previousElementSibling.innerHTML = parseInt(e.target.previousElementSibling.innerHTML) + 1
          }
          else{
               e.target.parentElement.previousElementSibling.innerHTML = parseInt(e.target.parentElement.previousElementSibling.innerHTML) + 1
          }
     }

     //item minus
     function itemMinus(e){
          if( e.target.parentElement.dataset.id == 1 ){
               if( e.target.nextElementSibling.innerHTML == 1 ){
                    alert("Minumim value is 1")
               }
               else{
                    e.target.nextElementSibling.innerHTML = parseInt(e.target.nextElementSibling.innerHTML) - 1
               }
          }
          else{
               if( e.target.parentElement.nextElementSibling.innerHTML == 1 ){
                    alert("Minumim value is 1")
               }
               else{
                    e.target.parentElement.nextElementSibling.innerHTML = parseInt(e.target.parentElement.nextElementSibling.innerHTML) - 1
               }
          }
     }

     const { slug } =  useParams();     

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
                                             <ul id="progressbar">
                                                  <li className="active">Frequency</li>
                                                  <li className="active">Service Details</li>
                                                  <li>Date & Time</li>
                                                  <li>Service Details</li>
                                             </ul>
                                        </div>
                                   </div>

                                   <div className="row booking-card">

                                        <div className="col-md-12 how-many-hour mb-4">
                                             <p>How many hour do you need your professional to stay?</p>
                                             <ul data-id="1">
                                                  <li onClick={itemMinus}>
                                                       <i className="fas fa-minus"></i>
                                                  </li>
                                                  <li>
                                                       1
                                                  </li>
                                                  <li onClick={itemPlus}>
                                                       <i className="fas fa-plus"></i>
                                                  </li>
                                             </ul>
                                        </div>

                                        <div className="col-md-12 how-many-hour mb-4">
                                             <p>How many professionals do you need?</p>
                                             <ul data-id="1">
                                                  <li onClick={itemMinus}>
                                                       <i className="fas fa-minus"></i>
                                                  </li>
                                                  <li>
                                                       1
                                                  </li>
                                                  <li onClick={itemPlus}>
                                                       <i className="fas fa-plus"></i>
                                                  </li>
                                             </ul>
                                        </div>

                                        <div className="col-md-12 select-order-duration mb-4">
                                             <p>Do you require cleaning materials?</p>
                                             <ul>
                                                  <li onClick={clickOnDuration}>No, Thanks</li>
                                                  <li onClick={clickOnDuration}>Yes, Please</li>
                                             </ul>
                                        </div>

                                        <div className="col-md-12 cleaning-instruction mb-4">
                                             <p>Do you have any specific cleaning instructions?</p>
                                             <textarea name="" rows="3" className="form-control"></textarea>
                                        </div>

                                        <div className="col-md-12 next-step">
                                             <Link to={`/booking-1/${slug}`} className="back">
                                                  Back
                                             </Link>
                                             <Link to={`/booking-3/${slug}`}>
                                                  Proceed
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

export default StepTwoComponent;