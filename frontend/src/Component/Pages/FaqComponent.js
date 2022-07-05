import { Link } from "react-router-dom";

import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Header from "../Include/Header";

const FaqComponent = () => {
     

     const openBox = (e) => {
          let all_collapse = document.querySelectorAll(".faq .card .collapse");

          for( let i = 0 ; i < all_collapse.length ; i++ ){
               all_collapse[i].style.display = "none"
          }

          let id = "#"+ e.target.dataset.ariaControls;
          document.querySelector(`.faq .card ${id}`).style.display = "block"
     }

     return(
          <div className="id">

               <MobileMenu></MobileMenu>

               <div className="page-wrapper">

                   <Header></Header>

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
                                             <div class="card">
                                                  <div class="card-header" id="faqHeading-1">
                                                       <div class="mb-0">
                                                            <h5 class="faq-title" onClick={openBox} data-toggle="collapse" data-target="#faqCollapse-1" data-aria-expanded="true" data-aria-controls="faqCollapse-1">
                                                                 <span class="badge">1</span>
                                                                 Do you wash my clothes together with other people's clothes?
                                                            </h5>
                                                       </div>
                                                  </div>
                                                  <div id="faqCollapse-1" class="collapse" aria-labelledby="faqHeading-" data-parent="#accordion">
                                                       <div class="card-body">
                                                            <p>
                                                                 Absolutely not. Each order is washed separately so no need to worry about that. Your clothes are safe with us!
                                                            </p>
                                                       </div>
                                                  </div>
                                             </div>
                                             {/* item end */}

                                             {/* item start */}
                                             <div class="card">
                                                  <div class="card-header" id="faqHeading-2">
                                                       <div class="mb-0">
                                                            <h5 class="faq-title" onClick={openBox} data-toggle="collapse" data-target="#faqCollapse-2" data-aria-expanded="true" data-aria-controls="faqCollapse-2">
                                                                 <span class="badge">1</span>
                                                                 Where do you clean my clothes?
                                                            </h5>
                                                       </div>
                                                  </div>
                                                  <div id="faqCollapse-2" class="collapse" aria-labelledby="faqHeading-2" data-parent="#accordion">
                                                       <div class="card-body">
                                                            <p>
                                                                 After your items are collected by our driver, they are taken to one of our trusted partner facilities to ensure your items are treated with the utmost care. We take pride in supporting local businesses and minimizing the carbon emissions from transport.
                                                            </p>
                                                       </div>
                                                  </div>
                                             </div>
                                             {/* item end */}

                                             {/* item start */}
                                             <div class="card">
                                                  <div class="card-header" id="faqHeading-3">
                                                       <div class="mb-0">
                                                            <h5 class="faq-title" onClick={openBox} data-toggle="collapse" data-target="#faqCollapse-3" data-aria-expanded="true" data-aria-controls="faqCollapse-3">
                                                                 <span class="badge">1</span>
                                                                 What is the turnaround time?
                                                            </h5>
                                                       </div>
                                                  </div>
                                                  <div id="faqCollapse-3" class="collapse" aria-labelledby="faqHeading-3" data-parent="#accordion">
                                                       <div class="card-body">
                                                            <p>
                                                                 You will be happy to know that last month we have delivered 98.7% of all standard laundry and dry cleaning within 24 hours.
                                                            </p>
                                                       </div>
                                                  </div>
                                             </div>
                                             {/* item end */}

                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>


                    <Footer></Footer>
                    
               </div>

          </div>
     );
}

export default FaqComponent;