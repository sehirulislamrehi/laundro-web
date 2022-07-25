
import { Link } from "react-router-dom";

//import pages

import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";
import Header from "../Include/Header";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loading from "../Include/Loading";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)


const ContactComponent = (props) => {

     {/* window scroll to top */}
     // window.scrollTo(0, 0);

     const dispatch = useDispatch();

     const application_data = useSelector( state => state.applicationData )

     useEffect(() => {

     },[])

     //submit contact message
     const [name, set_name] = useState('')
     const [email, set_email] = useState('')
     const [phone, set_phone] = useState('')
     const [subject, set_subject] = useState('')
     const [message, set_message] = useState('')
     const [ errors, set_error ] = useState(null)

     const doSubmit = () => {
          const loading = document.getElementById("loading-wraper")
          loading.style.display = "block"

          const url = `${window.url}/contact-form`;

          const formData = new FormData();

          formData.append('name',name);
          formData.append('email',email);
          formData.append('phone',phone);
          formData.append('subject',subject);
          formData.append('message',message);

          fetch(url,{
               method : 'POST',
               body : formData,
          })
          .then( response => response.json())
          .then( response => {
               loading.style.display = "none"

               if( response.status == 'success' ){
                    MySwal.fire({
                         title : "Success",
                         text : `${response.data}`,
                    })
               }

               if( response.status == "validation_error" ){
                    const single_error = response.data
                    const distructured_error = {...single_error}
                    set_error(distructured_error)
               }

               if( response.status == "warning" ){
                    MySwal.fire({
                         title : "WARNING",
                         text : `${response.data}`,
                    })
               }
          })
          .catch( response => {
               loading.style.display = "none"
               
          })
     }

     return(
          <div className="id">

               {/* loading */}
               <Loading></Loading>

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
                                                       <p>
                                                            {
                                                                 application_data &&
                                                                 <a href={application_data.email}>{application_data.email}</a>
                                                            }
                                                       </p>
                                                       <h5>Send mail</h5>
                                                  </div>
                                             </li>
                                             <li>
                                                  <div className="icon">
                                                       <i className="fas fa-phone"></i>
                                                  </div>
                                                  <div className="text">
                                                       <p>Call Anytime</p>
                                                       <h5>
                                                            {
                                                                 application_data &&
                                                                 <a href={`tel:+${application_data.phone}`}>{application_data.phone}</a>
                                                            }
                                                       </h5>
                                                  </div>
                                             </li>
                                             <li>
                                                  <div className="icon">
                                                       <i className="fas fa-map"></i>
                                                  </div>
                                                  {
                                                       application_data &&
                                                       <div className="text">
                                                            <h5>{application_data.address}</h5>
                                                            <p>{application_data.city}, {application_data.country}</p>
                                                       </div>
                                                  }
                                             </li>
                                        </ul>
                                   </div>
                                   </div>
                                   <div className="col-xl-8 col-lg-7">
                                   <div className="contact-page-two__right">
                                        <form action="assets/inc/sendemail.php" className="comment-one__form contact-form-validated">
                                             <div className="row">
                                                  <div className="col-xl-6">
                                                       <div className="comment-form__input-box form-group">
                                                            <input type="text" 
                                                                 onChange={ e => set_name(e.target.value) }
                                                            placeholder="Your name" name="name"></input>
                                                            {
                                                                 errors &&
                                                                 <small
                                                                 className="form_error"
                                                                 >
                                                                      {errors.name}
                                                                 </small>
                                                            }
                                                       </div>
                                                  </div>
                                                  <div className="col-xl-6">
                                                       <div className="comment-form__input-box form-group">
                                                            <input type="email"
                                                                 onChange={ e => set_email(e.target.value) }
                                                            placeholder="Email address" name="email"></input>
                                                            {
                                                                 errors &&
                                                                 <small
                                                                 className="form_error"
                                                                 >
                                                                      {errors.email}
                                                                 </small>
                                                            }
                                                       </div>
                                                  </div>
                                                  <div className="col-xl-6">
                                                       <div className="comment-form__input-box form-group">
                                                            <input type="text" 
                                                                 onChange={ e => set_phone(e.target.value) }
                                                            placeholder="Phone number" name="Phone"></input>
                                                            {
                                                                 errors &&
                                                                 <small
                                                                 className="form_error"
                                                                 >
                                                                      {errors.phone}
                                                                 </small>
                                                            }
                                                       </div>
                                                  </div>
                                                  <div className="col-xl-6">
                                                       <div className="comment-form__input-box form-group">
                                                            <input type="text" 
                                                                 onChange={ e => set_subject(e.target.value) }
                                                            placeholder="Subject" name="Subject"></input>
                                                            {
                                                                 errors &&
                                                                 <small
                                                                 className="form_error"
                                                                 >
                                                                      {errors.subject}
                                                                 </small>
                                                            }
                                                       </div>
                                                  </div>
                                             </div>
                                             <div className="row">
                                                  <div className="col-xl-12">
                                                       <div className="comment-form__input-box form-group text-message-box">
                                                            <textarea name="message" 
                                                                 onChange={ e => set_message(e.target.value) }
                                                            placeholder="Write message"></textarea>
                                                            {
                                                                 errors &&
                                                                 <small
                                                                 className="form_error"
                                                                 >
                                                                      {errors.message}
                                                                 </small>
                                                            }
                                                       </div>
                                                       <div className="comment-form__btn-box">
                                                       <button type="button" onClick={doSubmit} className="thm-btn comment-form__btn">Send a Message <i
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

                    <Footer ></Footer>
                    
               </div>

          </div>
     );
}

export default ContactComponent;