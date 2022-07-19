import { Link } from "react-router-dom";

import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Header from "../Include/Header";

const FaqComponent = (props) => {
     
     {/* window scroll to top */}
     window.scrollTo(0, 0);

     const openBox = (e) => {
          let all_collapse = document.querySelectorAll(".faq .card .collapse");

          for( let i = 0 ; i < all_collapse.length ; i++ ){
               all_collapse[i].style.display = "none"
          }

          let id = "#"+ e.target.dataset.ariaControls;
          document.querySelector(`.faq .card ${id}`).style.display = "block"
     }

     const [faq, set_faq] = useState(null)

     useEffect(() => {

          //get faq data
          const faq_url = `${window.url}/faq-data`
          fetch(faq_url,{
               method : "GET"
          })
          .then( response => response.json() )
          .then( response => {
               set_faq(response.data)
          })
          .catch( response => {
               
          })

     },[])

     return(
          <div className="id">

               <MobileMenu ></MobileMenu>

               <div className="page-wrapper">

                   <Header ></Header>

                   {/*Page Header Start*/}
                    <section className="page-header">
                         <div className="page-header-bg" style={{
                              backgroundImage : `url(images/page-header-bg.jpg)`
                         }}>
                         </div>
                         <div className="page-header-bubble"><img src="images/page-header-bubble.png" alt=""></img></div>
                         <div className="container">
                         <div className="page-header__inner">
                              <ul className="thm-breadcrumb list-unstyled">
                                   <li><Link to="/">Home</Link></li>
                                   <li><span>/</span></li>
                                   <li>FAQ</li>
                              </ul>
                              <h2>Do you have any question?</h2>
                         </div>
                         </div>
                    </section>
                    {/*Page Header End*/}


                    <section class="faq-section">
                         <div class="container">
                              <div class="row">
                                   <div class="col-md-8 offset-md-2 col-12">
                                        <div class="faq" id="accordion">

                                             {/* item start */}
                                             {
                                                  faq && faq.map( (item,key) => (
                                                  <div class="card">
                                                       <div class="card-header" id="faqHeading-1">
                                                            <div class="mb-0">
                                                                 <h5 class="faq-title" onClick={openBox} data-toggle="collapse" data-target={`faq-${key}`} data-aria-expanded="true" data-aria-controls={`faq-${key}`}>
                                                                      <span class="badge">{key + 1}</span>
                                                                      {item.question}
                                                                 </h5>
                                                            </div>
                                                       </div>
                                                       <div id={`faq-${key}`} class="collapse" aria-labelledby="faqHeading-1" data-parent="#accordion">
                                                            <div class="card-body">
                                                                 <p>
                                                                      {item.answer}
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  ))
                                             }
                                             
                                             {/* item end */}

                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>


                    <Footer ></Footer>
                    
               </div>

          </div>
     );
}

export default FaqComponent;