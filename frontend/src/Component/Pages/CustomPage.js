

import { Link } from "react-router-dom";
import { useParams } from "react-router";
import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";
import Header from "../Include/Header";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { useSelector } from "react-redux";

const CustomPage = (props) => {

     {/* window scroll to top */}
     window.scrollTo(0, 0);

     const application_data = useSelector( state => state.applicationData )
     
     const { slug } =  useParams();
     const [page_data, set_page_data] = useState(null)

     //page details
     const page_details_url = `${window.url}/custom-page-details/${slug}`;

     useEffect( () => {

          fetch(page_details_url,{
               method : "GET"
          })
          .then( response => response.json() )
          .then( response => {
               if( response.status == "success" ){
                    set_page_data(response.data)
               }
               
          })
          .catch( response => {
               
          })

     },[page_details_url]);

     return(
          <div className="id">

               <MobileMenu ></MobileMenu>

               <div className="page-wrapper">

                    <Header ></Header>

                    {/*Page Header Start*/}
                    <section className="page-header">
                         {
                              application_data && 
                              <div className="page-header-bg" 
                              style={{
                                   backgroundImage : `url(${window.image_path}/images/info/${application_data.breadcum_image})`
                              }}>
                              </div>
                         }
                         <div className="page-header-bubble"><img src="images/page-header-bubble.png" alt=""></img></div>
                         <div className="container">
                              <div className="page-header__inner">
                                   <ul className="thm-breadcrumb list-unstyled">
                                        <li><Link to="/">Home</Link></li>
                                        <li><span>/</span></li>
                                        {
                                             page_data && 
                                             <li>{page_data.name}</li>
                                        }
                                   </ul>
                                   {
                                        page_data && 
                                        <h2>{page_data.name}</h2>
                                   }
                              </div>
                         </div>
                    </section>
                    {/*Page Header End*/}


                    <section class="custom-page-section">
                         <div class="container">
                              <div className="row">
                                   <div className="col-md-12">
                                        {
                                             page_data &&
                                             <div className="pera-txt mt-20" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(page_data.content) }}></div>
                                        }
                                   </div>
                              </div>                              
                         </div>
                    </section>

                    
                    <Footer ></Footer>
               
               </div>

          </div>
     );
}

export default CustomPage;