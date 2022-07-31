
import { Link } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


//import pages
import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllServices } from "../../action";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useHistory } from "react-router-dom";
import Header from "../Include/Header";
import Loading from "../Include/Loading";
const MySwal = withReactContent(Swal)


const HomeComponent = (props) => {

     {/* window scroll to top */}
     // window.scrollTo(0, 0);

     //INITIALIZATION
     const dispatch = useDispatch();

     const testimonial_options = {
          loop: true,
          margin: 0,
          nav: false,
          dots: true,
          responsive: {
               0: {
                    items: 1,
               },
               400: {
                    items: 1,
               },
               600: {
                    items: 1,
               },
               700: {
                    items: 2,
               },
               1000: {
                    items: 2,
               }
          },
     };
          
     const service_name = [];
     const service_slug = [];
     const [code, set_code] = useState(null)
     const [service, set_service] = useState(null)
     const [banner, set_banner] = useState(null)
     const [application_data, set_application_data] = useState(null)

     

     useEffect(() => {

          if( props.applicationData ){
               set_application_data(props.applicationData)
          }

          //get services
          const get_services_url = `${window.url}/get-all-services`;
          
          fetch(get_services_url,{
               method : "GET"
          })
          .then( response => response.json() )
          .then( response => {
               dispatch(getAllServices(response.data))
          })
          .catch( response => {
               
          })

          //get banner data
          const get_banner_url = `${window.url}/banner-data`
          fetch(get_banner_url,{
               method : "GET"
          })
          .then( response => response.json() )
          .then( response => {
               set_banner(response.data)
          })
          .catch( response => {
               
          })

     },[]);
     
     const get_all_services = useSelector( state => state.getAllServices )

     const history = useHistory()

     const bookNow = () => {
          if( !code ){
               MySwal.fire({
                    title : "",
                    text : "Enter a postal code",
               })
          }
          if( !service ){
               MySwal.fire({
                    title : "",
                    text : "Select a service",
               })
          }
          else{
               get_all_services.map( item => {
                    if( item.slug == service ){
                         let services_data = [];
                         let serviceSample = {
                              id : "",
                              name : "",
                              slug : "",
                              instruction : "",
                              instructions_id : "",
                              price : ""
                         }
                         serviceSample.id = item.id
                         serviceSample.name = item.name
                         serviceSample.slug = item.slug
                         serviceSample.price = item.price
                         serviceSample.instruction = null 
                         serviceSample.instructions_id = null 
                         services_data.push(serviceSample);
                         localStorage.setItem("services", JSON.stringify(services_data));

                         let step_one_data = {
                              postal_code : code,
                              address_id : null,
                              address_in_details : null,
                              address_type : null,
                         }
                         localStorage.setItem("step_one_data", JSON.stringify(step_one_data));

                         history.push("/booking-1")

                    }
               })
          }
     }


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
                    set_name('')
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

               <MobileMenu></MobileMenu>

               <div className="page-wrapper">

                    <Header></Header>
                    
                   

                    {/*Main Slider Start*/}
                    <section className="main-slider clearfix" id="home">

                    {
                         banner && 
                         <OwlCarousel className='owl-theme banner-carousel swiper-container thm-swiper__slider' 
                              loop="false" 
                              items="1"
                              nav="true"
                              dots="false"
                         >

                              {/* item start */}
                              { banner.map( item => (
                                   <div className="item">
                                        <div className="swiper-slide">
                                             <div className="image-layer"
                                                  style={{
                                                       backgroundImage : `url(${window.image_path}/images/banners/${item.image})`
                                                  }}></div>
                                             {/* /.image-layer */}

                                             <div className="main-slider-bubble">
                                                  <div className="main-slider-bubble-bg"
                                                  style={{
                                                       backgroundImage : `url(images/banner/main-slider-bubble-bg.png)`
                                                  }}></div>
                                             </div>

                                             <div className="main-slider-star-1 zoominout">
                                                  <img src="images/banner/main-slider-star-1.png" alt=""></img>
                                             </div>
                                             <div className="main-slider-star-2 zoominout-2">
                                                  <img src="images/banner/main-slider-star-2.png" alt=""></img>
                                             </div>
                                             <div className="main-slider-star-3 zoominout">
                                                  <img src="images/banner/main-slider-star-3.png" alt=""></img>
                                             </div>


                                             <div className="container">
                                                  <div className="row">
                                                       <div className="col-xl-12">
                                                            <div className="main-slider__content">
                                                                 <p className="main-slider__sub-title">{item.title}</p>
                                                                 <h2 className="main-slider__title">
                                                                     {item.short_description}
                                                                 </h2>
                                                                 <div className="main-slider__btn-box">
                                                                      <a href={item.banner_link} className="thm-btn main-slider__btn">
                                                                           {item.button_text} 
                                                                           <i className="fa fa-angle-right"></i>
                                                                      </a>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   ))
                              }
                              {/* item end */}

                         </OwlCarousel>
                    }
                    

                    </section>
                    {/*Main Slider End*/}

                    {/* Book Service Section start */}
                    <section className="book-service">
                         <div className="container">
                              <div className="row book-service-row">

                                   {/* section title */}
                                   <div className="col-md-12 section-title mb-3">
                                        <h4>Fill All Information Details to Consult With Us To Get Sevices From Us</h4>
                                   </div>

                                   {/* form part */}
                                   <div className="col-md-12 section-form">
                                        <form action="">
                                             <div className="row">

                                                  {/* name */}
                                                  <div className="col-md-5 col-12 form-group">
                                                       <input style={{
                                                            height: "55px",
                                                            marginTop: "0px"
                                                       }} type="text" className="form-control" placeholder="Enter your postal code"
                                                            onChange={ e => set_code(e.target.value)}
                                                       />                                                 
                                                  </div>

                                                  {/* service */}
                                                  <div className="col-md-5 col-12 form-group"> 
                                                       <select className="form-control"
                                                            onChange={ e => set_service(e.target.value) }
                                                       >
                                                            <option defaultValue disabled>Select Service</option>
                                                            {
                                                                 get_all_services && get_all_services.map( item => (
                                                                      (
                                                                           (item.service_durations.length == 0) ? <option value={item.slug}>{item.name}</option> : ""
                                                                      )
                                                                 ))
                                                            }
                                                       </select>                                        
                                                  </div>

                                                  {/* button */}
                                                  <div className="col-md-2 col-12 form-group">
                                                       <button className="book-now" type="button" onClick={bookNow}>
                                                            Book Now
                                                       </button>                                              
                                                  </div>


                                             </div>
                                        </form>
                                   </div>

                              </div>
                         </div>
                    </section>
                    {/* Book Service Section end */}

                    {/*Feature One Start*/}
                    <section className="feature-one">
                         <div className="container">
                              <div className="row">

                                   {/*Feature One single Start*/}
                                   {
                                        get_all_services && get_all_services.map(item => (
                                        <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="100ms" key={item.slug}>
                                             <div className="feature-one__single">
                                                  <div className="feature-one-single-bg"
                                                  style={{
                                                       backgroundImage : `url(${window.image_path}/images/service/${item.image})`
                                                  }}>
                                                  </div>
                                                  <div className="feature-one__icon">
                                                       <img src={`${window.image_path}/images/service/${item.icon}`} alt=""></img>
                                                       <div className="feature-one__icon-shape">
                                                            <img src="images/services/feature-one-icon-shape.png" alt=""></img>
                                                       </div>
                                                  </div>
                                                  <div className="feature-one__title-box">
                                                       <div className="feature-one__title-border"></div>
                                                       <h3 className="feature-one__title"><Link to={`/service-details/${item.slug}`}>{item.name}</Link></h3>
                                                  </div>
                                                  <p className="feature-one__text">{item.short_description.substring(0, 100)}...</p>
                                                  <div className="feature-one__btn-box">
                                                       <Link to={`/service-details/${item.slug}`} className="feature-one__btn">View more</Link>
                                                  </div>
                                             </div>
                                        </div>
                                        ))
                                   }
                                   
                                   {/*Feature One single End*/}

                              </div>
                         </div>
                    </section>
                    {/*Feature One End*/}

                    {/*Welcome One Start*/}
                    <section className="welcome-one" id="about">
                         <div className="container">
                              <div className="row">
                                   <div className="col-xl-6">
                                        <div className="welcome-one__left">
                                             <div className="welcome-one__bg"
                                             style={{
                                                  backgroundImage : `url(images/welcome-one-bg.png)`
                                             }}></div>
                                             <div className="welcome-one__main-box wow fadeInUp" data-wow-delay="100ms"
                                                  data-wow-duration="2500ms">
                                                  <div className="welcome-one__circle-one"></div>
                                                  <div className="welcome-one__img-1">
                                                       <img src="images/welcome-one-img-1.png" alt=""></img>
                                                       <div className="welcome-one__small-img-1 float-bob-x">
                                                            <img src="images/welcome-one-small-img-1.jpg" alt=""></img>
                                                       </div>
                                                       <div className="welcome-one__small-img-2 float-bob-y">
                                                            <img src="images/welcome-one-small-img-2.jpg" alt=""></img>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-xl-6">
                                        <div className="welcome-one__right">
                                             <div className="section-title text-left">
                                                  <span className="section-title__tagline">About Us</span>
                                                  <h2 className="section-title__title">Welcome to Best Cleaning Company</h2>
                                             </div>
                                             <p className="welcome-one__text-1">Lorem ipsum is simply free text dolor sit am adipi we help
                                                  you ensure everyone.</p>
                                             <p className="welcome-one__text-2">Lorem ipsum is simply free text dolor sit am adipi we help
                                                  you ensure everyone. Tincidunt elit magnis nulla facilisis sagittis maecenas. Sapien
                                                  nunced amet dolores sit ipsum velit purus aliq massa fringilla leo.</p>
                                             <div className="welcome-one__points-box">
                                                  <ul className="list-unstyled welcome-one__points">
                                                       <li>
                                                            <div className="icon">
                                                                 <i className="fas fa-check"></i>
                                                            </div>
                                                            <div className="text">
                                                                 <p>We are Committed</p>
                                                            </div>
                                                       </li>
                                                       <li>
                                                            <div className="icon">
                                                                 <i className="fas fa-check"></i>
                                                            </div>
                                                            <div className="text">
                                                                 <p>Highly Rated Cleaning</p>
                                                            </div>
                                                       </li>
                                                  </ul>
                                                  <ul className="list-unstyled welcome-one__points welcome-one__points-two">
                                                       <li>
                                                            <div className="icon">
                                                                 <i className="fas fa-check"></i>
                                                            </div>
                                                            <div className="text">
                                                                 <p>Insured & Bonded</p>
                                                            </div>
                                                       </li>
                                                       <li>
                                                            <div className="icon">
                                                                 <i className="fas fa-check"></i>
                                                            </div>
                                                            <div className="text">
                                                                 <p>Trusted Professionals</p>
                                                            </div>
                                                       </li>
                                                  </ul>
                                             </div>
                                             <div className="welcome-one__btn-call-box">
                                                  <div className="welcome-one__btn-box">
                                                       <a href="contact-page-1.html" className="thm-btn welcome-one__btn">
                                                            Contact us 
                                                            <i className="fa fa-angle-right"></i>
                                                       </a>
                                                  </div>
                                                  <div className="welcome-one__call-box">
                                                       <div className="welcome-one__call-icon">
                                                            <i className="fas fa-phone"></i>
                                                       </div>
                                                       <div className="welcome-one__call-content">
                                                            <p className="welcome-one__call-sub-title">Call Anytime</p>
                                                            <h5 className="welcome-one__call-number">
                                                                 <a href="tel:2300068603">+23 (000) 68603</a>
                                                            </h5>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/*Welcome One End*/}

                    {/*Services One Start*/}
                    <section className="services-one" id="services">
                         <div className="container">
                              <div className="section-title text-center">
                                   <span className="section-title__tagline">What We’re Offering</span>
                                   <h2 className="section-title__title">Providing the Best Services <br></br> for Our Customers</h2>
                              </div>

                              <div className="row">

                                   {/*Services One Single Start*/}
                                   {
                                        get_all_services && get_all_services.map(item => (
                                             <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay="100ms" key={item.id}>
                                                  <div className="services-one__single">
                                                       <div className="services-one__single-top-bubble"
                                                       style={{
                                                            backgroundImage : `url(images/services/services-one-single-top-bubble.png)`
                                                       }}>
                                                       </div>
                                                       <div className="services-one__icon">
                                                            <img src={`${window.image_path}/images/service/${item.icon}`} alt=""></img>
                                                       </div>
                                                       <div className="services-one__single-inner">
                                                            <div className="services-one__title-box">
                                                                 <h3 className="services-one__title">
                                                                      <Link to={`/service-details/${item.slug}`}>
                                                                           {item.name}
                                                                      </Link>
                                                                 </h3>
                                                            </div>
                                                            <div className="services-one__text-box">
                                                                 <p className="services-one__text">
                                                                 {item.short_description.substring(0, 100)}...
                                                                 </p>
                                                            </div>
                                                       </div>
                                                       <div className="services-one__overly-box"
                                                       style={{
                                                            backgroundImage : `url(images/services/services-one-single-overlay-bg-1.png)`
                                                       }}>
                                                       </div>
                                                  </div>
                                             </div>
                                        ))
                                   }
                                   {/*Services One Single End*/}

                                   
                              </div>
                         </div>
                    </section>
                    {/*Services One End*/}

                    {/*Counter One Start*/}
                    <section className="counter-one">
                         <div className="container">
                              <div className="counter-one__inner wow fadeInUp" data-wow-delay="100ms">
                                   <div className="counter-one-bg-1"
                                   style={{
                                        backgroundImage: `url(images/counter-one-bg-1.png)`
                                   }}>
                                   </div>
                                   <div className="counter-one-bg-2"
                                   style={{
                                        backgroundImage: `url(images/counter-one-bg-2.png)`
                                   }}>
                                   </div>
                                   <ul className="list-unstyled counter-one__list">
                                   <li>
                                        <div className="counter-one__icon">
                                             <i className="fas fa-users"></i>
                                        </div>
                                        <div className="counter-one__count-box">
                                             <div className="counter-one__count-box-inner">
                                                  <h3 className="odometer" data-count="2562">00</h3>
                                                  <span className="counter-one__plus">+</span>
                                             </div>
                                             <p className="counter-one__text">Satisfied Clients</p>
                                        </div>
                                   </li>
                                   <li>
                                        <div className="counter-one__icon">
                                             <i className="fas fa-project-diagram"></i>
                                        </div>
                                        <div className="counter-one__count-box">
                                             <div className="counter-one__count-box-inner">
                                                  <h3 className="odometer" data-count="562">00</h3>
                                                  <span className="counter-one__plus">+</span>
                                             </div>
                                             <p className="counter-one__text">Active Project</p>
                                        </div>
                                   </li>
                                   <li>
                                        <div className="counter-one__icon">
                                             <i className="fas fa-award"></i>
                                        </div>
                                        <div className="counter-one__count-box">
                                             <div className="counter-one__count-box-inner">
                                                  <h3 className="odometer" data-count="33">00</h3>
                                                  <span className="counter-one__plus">+</span>
                                             </div>
                                             <p className="counter-one__text">Winning Award</p>
                                        </div>
                                   </li>
                                   <li>
                                        <div className="counter-one__icon">
                                             <i className="fab fa-teamspeak"></i>
                                        </div>
                                        <div className="counter-one__count-box">
                                             <div className="counter-one__count-box-inner">
                                                  <h3 className="odometer" data-count="552">00</h3>
                                                  <span className="counter-one__plus">+</span>
                                             </div>
                                             <p className="counter-one__text">Expert Teams</p>
                                        </div>
                                   </li>
                                   </ul>
                              </div>
                         </div>
                    </section>
                    {/*Counter One End*/}

                    {/*Testimonial One Start*/}
                    <section className="testimonial-one" id="testimonial">
                         <div className="testimonial-shape wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms"
                              style={{
                                   backgroundImage: `url(images/testimonial-shape.png)`
                              }}>
                         </div>
                         <div className="container">
                              <div className="section-title text-left">
                                   <span className="section-title__tagline">What They’re Saying</span>
                                   <h2 className="section-title__title">Some Feedbacks <br></br> from Our Customers</h2>
                              </div>
                              <div className="row">
                                   <div className="col-xl-12">

                                        <div className="testimonial-one__inner">

                                        <OwlCarousel className='owl-theme thm-owl__carousel testimonial-one__carousel' 
                                             {...testimonial_options}
                                        >
                                             {/*Testimonial One Single Start*/}
                                             <div className="item">
                                                  <div className="testimonial-one__single">
                                                       <p className="testimonial-one__text">Lorem ipsum dolor sit amet, consectetur elit sed,
                                                            adipisicing do eiusmod tempor incididunt labore et dolore Lorem ipsum dolor
                                                            consectetur adipisicing elit, sed do eiusmod</p>
                                                       <div className="testimonial-one__client-details">
                                                            <h3 className="testimonial-one__client-name">Kevin Martin</h3>
                                                            <p className="testimonial-one__client-sub-title">Marketing Manager</p>
                                                       </div>
                                                       <div className="testimonial-one__client-img">
                                                            <img src="images/testimonial-1-1.jpg" alt=""></img>
                                                            <div className="testimonial-one__client-img-boxs"></div>
                                                       </div>
                                                       <div className="testimonial-one__quote">
                                                            <i className="fas fa-quote-right"></i>
                                                       </div>
                                                  </div>
                                             </div>
                                             {/*Testimonial One Single End*/}

                                             {/*Testimonial One Single Start*/}
                                             <div className="item">
                                                  <div className="testimonial-one__single">
                                                       <p className="testimonial-one__text">Lorem ipsum dolor sit amet, consectetur elit sed,
                                                            adipisicing do eiusmod tempor incididunt labore et dolore Lorem ipsum dolor
                                                            consectetur adipisicing elit, sed do eiusmod</p>
                                                       <div className="testimonial-one__client-details">
                                                            <h3 className="testimonial-one__client-name">Jessica Brown</h3>
                                                            <p className="testimonial-one__client-sub-title">Marketing Manager</p>
                                                       </div>
                                                       <div className="testimonial-one__client-img">
                                                            <img src="images/testimonial-1-2.jpg" alt=""></img>
                                                            <div className="testimonial-one__client-img-boxs"></div>
                                                       </div>
                                                       <div className="testimonial-one__quote">
                                                            <i className="fas fa-quote-right"></i>
                                                       </div>
                                                  </div>
                                             </div>
                                             {/*Testimonial One Single End*/}

                                        </OwlCarousel>

                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/*Testimonial One End*/}

                    {/*Contact One Start*/}
                    <section className="contact-one" id="contact">
                         <div className="contact-one-shape-4 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                              <img src="images/contact-one-shape-4.png" alt=""></img>
                         </div>
                         <div className="contact-one__container">
                              <div className="container">
                                   <div className="row">
                                   <div className="col-xl-7 col-lg-7">
                                        <div className="contact-one__left">
                                             <div className="section-title text-left">
                                                  <span className="section-title__tagline">Get a Free Estimate</span>
                                                  <h2 className="section-title__title">Contact for Services</h2>
                                             </div>
                                             <form action="assets/inc/sendemail.php" className="contact-one__form contact-form-validated">
                                                  <div className="row">

                                                       {/* name */}
                                                       <div className="col-xl-6 col-lg-6 col-md-6">
                                                            <div className="contact-one__form-input-box form-group">
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

                                                       {/* email */}
                                                       <div className="col-xl-6 col-lg-6 col-md-6">
                                                            <div className="contact-one__form-input-box form-group">
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

                                                       {/* phone */}
                                                       <div className="col-xl-6 col-lg-6 col-md-6">
                                                            <div className="contact-one__form-input-box form-group">
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

                                                       {/* subject */}
                                                       <div className="col-xl-6 col-lg-6 col-md-6">
                                                            <div className="contact-one__form-input-box form-group ">
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
                                                            <div className="contact-one__form-input-box text-message-box">
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
                                                            <div className="contact-one__btn-box">
                                                                 <button type="button" onClick={doSubmit} className="thm-btn contact-one__btn">
                                                                      Send a message <i className="fa fa-angle-right"></i>
                                                                 </button>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </form>
                                        </div>
                                   </div>
                                   <div className="col-xl-5 col-lg-5">
                                        <div className="contact-one__right">
                                             <div className="contact-one-shape-1"></div>
                                             <div className="contact-one-shape-2"></div>
                                             <div className="contact-one-shape-3"></div>
                                             <div className="contact-one__img">
                                                  <img src="images/contact-one-img-1.jpg" alt=""></img>
                                             </div>
                                             <div className="contact-one__call">
                                                  <div className="contact-one__call-icon">
                                                       <span className="icon-phone-call"></span>
                                                  </div>
                                                  <div className="contact-one__call-content">
                                                       <p className="contact-one__call-sub-title">Call Anytime</p>
                                                       <h5 className="contact-one__call-number"><a href="tel:2300068603">+23 (000) 68
                                                            603</a></h5>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/*Contact One End*/}

                    <Footer></Footer>
                    
               </div>

          </div>
     );
}

export default HomeComponent;