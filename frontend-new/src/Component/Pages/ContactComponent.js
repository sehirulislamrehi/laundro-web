
import { Link } from "react-router-dom";

//import pages

import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";
import Header from "../Include/Header";


const ContactComponent = () => {

     {/* window scroll to top */}
     window.scrollTo(0, 0);

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
                                   <li>Contact</li>
                              </ul>
                              <h2>Contact</h2>
                         </div>
                         </div>
                    </section>
                    {/*Page Header End*/}

                    {/*Contact Page Two Start*/}
                    <section className="contact-page-two">
                         <div className="container">
                              <div className="row">
                                   <div className="col-xl-4 col-lg-5">
                                   <div className="contact-page-two__left">
                                        <div className="section-title text-left">
                                             <span className="section-title__tagline">Contact Now</span>
                                             <h2 className="section-title__title">Feel Free to Write us</h2>
                                        </div>
                                        <ul className="list-unstyled contact-page-two__info">
                                             <li>
                                                  <div className="icon">
                                                       <i className="fas fa-envelope"></i>
                                                  </div>
                                                  <div className="text">
                                                       <p><a href="mailto:brote@company.com">brote@company.com</a></p>
                                                       <h5>Send mail</h5>
                                                  </div>
                                             </li>
                                             <li>
                                                  <div className="icon">
                                                       <i className="fas fa-phone"></i>
                                                  </div>
                                                  <div className="text">
                                                       <p>Call Anytime</p>
                                                       <h5><a href="tel:2300068603">+23 (000) 68 603</a></h5>
                                                  </div>
                                             </li>
                                             <li>
                                                  <div className="icon">
                                                       <i className="fas fa-map"></i>
                                                  </div>
                                                  <div className="text">
                                                       <p>88 Kilda Broklyn Road</p>
                                                       <h5>New York, USA</h5>
                                                  </div>
                                             </li>
                                        </ul>
                                   </div>
                                   </div>
                                   <div className="col-xl-8 col-lg-7">
                                   <div className="contact-page-two__right">
                                        <form action="assets/inc/sendemail.php" className="comment-one__form contact-form-validated">
                                             <div className="row">
                                                  <div className="col-xl-6">
                                                       <div className="comment-form__input-box">
                                                       <input type="text" placeholder="Your name" name="name"></input>
                                                       </div>
                                                  </div>
                                                  <div className="col-xl-6">
                                                       <div className="comment-form__input-box">
                                                       <input type="email" placeholder="Email address" name="email"></input>
                                                       </div>
                                                  </div>
                                                  <div className="col-xl-6">
                                                       <div className="comment-form__input-box">
                                                       <input type="text" placeholder="Phone number" name="Phone"></input>
                                                       </div>
                                                  </div>
                                                  <div className="col-xl-6">
                                                       <div className="comment-form__input-box">
                                                       <input type="text" placeholder="Subject" name="Subject"></input>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="row">
                                                  <div className="col-xl-12">
                                                       <div className="comment-form__input-box text-message-box">
                                                       <textarea name="message" placeholder="Write message"></textarea>
                                                       </div>
                                                       <div className="comment-form__btn-box">
                                                       <button type="submit" className="thm-btn comment-form__btn">Send a Message <i
                                                                 className="fa fa-angle-right"></i></button>
                                                       </div>
                                                  </div>
                                             </div>
                                        </form>
                                   </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/*Contact Page Two End*/}

                    <Footer></Footer>
                    
               </div>

          </div>
     );
}

export default ContactComponent;