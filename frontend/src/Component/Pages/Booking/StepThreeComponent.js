

import { Link } from "react-router-dom";
import { useParams } from "react-router";


//import pages
import DesktopMenu from "../../Include/DesktopMenu";
import MobileMenu from "../../Include/MobileMenu";
import Footer from "../../Include/Footer";

const StepThreeComponent = () => {

     function clickOnItem(e){
          let date = document.querySelectorAll(".choose-date ul li .date");
          
          for( let x in date ){
               if( x <= date.length ){
                    date[x].style.background = "#dbfaff"
               }
          }
          
          e.target.style.background = "#22d3ee"
     }

     function chooseTime(e){
          
          let time = document.querySelectorAll(".choose-time ul li.time");
          
          for( let x in time ){
               if( x <= time.length ){
                    time[x].style.background = "#dbfaff"
               }
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
                                                  <li className="active">Service Details</li>
                                                  <li className="active">Date & Time</li>
                                                  <li>Service Details</li>
                                             </ul>
                                        </div>
                                   </div>

                                   <div className="row booking-card">

                                        <div className="col-md-12 choose-date mb-4">
                                             <p>When would you like your service?</p>
                                             <ul>
                                                  <li>
                                                       <span>Sat</span>
                                                       <span className="date" onClick={clickOnItem}>1</span>
                                                  </li>
                                                  <li>
                                                       <span>Sun</span>
                                                       <span className="date" onClick={clickOnItem}>2</span>
                                                  </li>
                                                  <li>
                                                       <span>Mon</span>
                                                       <span className="date" onClick={clickOnItem}>3</span>
                                                  </li>
                                                  <li>
                                                       <span>Tue</span>
                                                       <span className="date" onClick={clickOnItem}>4</span>
                                                  </li>
                                                  <li>
                                                       <span>Wed</span>
                                                       <span className="date" onClick={clickOnItem}>5</span>
                                                  </li>
                                                  <li>
                                                       <span>Thu</span>
                                                       <span className="date" onClick={clickOnItem}>6</span>
                                                  </li>
                                                  <li>
                                                       <span>Fri</span>
                                                       <span className="date" onClick={clickOnItem}>7</span>
                                                  </li>
                                                  <li>
                                                       <span>Sat</span>
                                                       <span className="date" onClick={clickOnItem}>8</span>
                                                  </li>
                                                  <li>
                                                       <span>Sun</span>
                                                       <span className="date" onClick={clickOnItem}>9</span>
                                                  </li>
                                                  <li>
                                                       <span>Mon</span>
                                                       <span className="date" onClick={clickOnItem}>10</span>
                                                  </li>
                                                  <li>
                                                       <span>Tue</span>
                                                       <span className="date" onClick={clickOnItem}>11</span>
                                                  </li>
                                                  <li>
                                                       <span>Wed</span>
                                                       <span className="date" onClick={clickOnItem}>12</span>
                                                  </li>
                                                  <li>
                                                       <span>Thu</span>
                                                       <span className="date" onClick={clickOnItem}>13</span>
                                                  </li>
                                             </ul>
                                        </div>

                                        <div className="col-md-12 choose-time mb-4">
                                             <p>What time would you like to start your service?</p>
                                             <ul>
                                                  <li onClick={chooseTime} className="time">
                                                       10:00 AM
                                                  </li>
                                                  <li onClick={chooseTime} className="time">
                                                       10:30 AM
                                                  </li>
                                                  <li onClick={chooseTime} className="time">
                                                       11:00 AM
                                                  </li>
                                                  <li onClick={chooseTime} className="time">
                                                       11:30 AM
                                                  </li>
                                                  <li onClick={chooseTime} className="time">
                                                       12:00 PM
                                                  </li>
                                                  <li onClick={chooseTime} className="time">
                                                       12:30 PM
                                                  </li>
                                             </ul>
                                        </div>

                                        <div className="col-md-12 next-step">
                                             <Link to={`/booking-2/${slug}`} className="back">
                                                  Back
                                             </Link>
                                             <Link to={`/booking-4/${slug}`}>
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

export default StepThreeComponent;