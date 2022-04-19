

import { Link } from "react-router-dom";
import { useParams } from "react-router";


//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";

const StepOneComponent = () => {

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
                                                  <li>Service Details</li>
                                                  <li>Date & Time</li>
                                                  <li>Service Details</li>
                                             </ul>
                                        </div>
                                   </div>

                                   <div className="row booking-card">

                                        <div className="col-md-12 title mb-3">
                                             <h4>{slug}</h4>
                                             <p>
                                                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                                             </p>
                                             <img src="/images/booking-1.png" className="img-fluid" alt="" />
                                        </div>

                                        <div className="col-md-12 select-postal-code mb-3">
                                             <label htmlFor="">Enter BD postal code</label>
                                             <input type="text" className="form-control"  />
                                        </div>

                                        <div className="col-md-12 select-address mb-3">
                                             <label htmlFor="">Select your address</label>
                                             <select name="" className="form-control">
                                                  <option value="8166316"> 1st Translation Co Ltd, Gresham House, 24 Holborn Viaduct, LONDON, EC1A 2BN </option>
                                                  <option value="54142703"> Catena Media UK Ltd, Gresham House, 24 Holborn Viaduct, LONDON, EC1A 2BN </option>
                                                  <option value="8166315"> Lisa Tse Ltd, Gresham House, 24 Holborn Viaduct, LONDON, EC1A 2BN </option>
                                                  <option value="8166310"> Max Need Ltd, Gresham House, 24 Holborn Viaduct, LONDON, EC1A 2BN </option>
                                                  <option value="54025645"> R D H Advisory Ltd, Gresham House, 24 Holborn Viaduct, LONDON, EC1A 2BN </option>
                                                  <option value="53255431"> Registered Address Ltd, Gresham House, 24 Holborn Viaduct, LONDON, EC1A 2BN </option>
                                                  <option value="-1"> Not on the list? </option>
                                             </select>
                                        </div>

                                        <div className="col-md-12 select-order-duration mb-3">
                                             <p>How ofter do you need this service?</p>
                                             <ul>
                                                  <li onClick={clickOnDuration}>One Time</li>
                                                  <li onClick={clickOnDuration}>Regular</li>
                                             </ul>
                                        </div>

                                        <div className="col-md-12 next-step">
                                             <Link to={`/booking-2/${slug}`}>
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

export default StepOneComponent;