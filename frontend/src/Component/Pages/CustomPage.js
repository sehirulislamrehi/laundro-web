

import { Link } from "react-router-dom";
import { useParams } from "react-router";
import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";
import Header from "../Include/Header";


const CustomPage = () => {

     {/* window scroll to top */}
     window.scrollTo(0, 0);

     
     const { slug } =  useParams();

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
                                        {
                                             slug && ( slug == "privacy-policy" ) ? 
                                             <li>Privacy Policy</li>
                                             : ""
                                        }
                                        {
                                             slug && ( slug == "return-and-refund" ) ? 
                                             <li>Return and Refund Policy</li>
                                             : ""
                                        }
                                        {
                                             slug && ( slug == "terms-and-condition" ) ? 
                                             <li>Terms and Condition</li>
                                             : ""
                                        }
                                        
                                   </ul>
                                   {
                                        slug && ( slug == "privacy-policy" ) ? 
                                        <h2>Privacy Policy</h2>
                                        : ""
                                   }
                                   {
                                        slug && ( slug == "return-and-refund" ) ? 
                                        <h2>Return and Refund Policy</h2>
                                        : ""
                                   }
                                   {
                                        slug && ( slug == "terms-and-condition" ) ? 
                                        <h2>Terms and Condition</h2>
                                        : ""
                                   }
                              </div>
                         </div>
                    </section>
                    {/*Page Header End*/}


                    <section class="custom-page-section">
                         <div class="container">
                              <div className="row">
                                   <div className="col-md-12">
                                        <p className="mb-3">
                                        Usage Data is collected automatically when using the Service.

                                             Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.

                                             When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.

                                             We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                                        </p>

                                        <p className="mb-3">
                                        Usage Data is collected automatically when using the Service.

                                             Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.

                                             When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.

                                             We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                                        </p>

                                        <p className="mb-3">
                                        Usage Data is collected automatically when using the Service.

                                             Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.

                                             When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.

                                             We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                                        </p>

                                        <p className="mb-3">
                                        Usage Data is collected automatically when using the Service.

                                             Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.

                                             When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.

                                             We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                                        </p>
                                   </div>
                              </div>                              
                         </div>
                    </section>

                    
                    <Footer></Footer>
               
               </div>

          </div>
     );
}

export default CustomPage;