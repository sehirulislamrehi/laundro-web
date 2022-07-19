
//import pages
import Header from "../Include/Header";
import MobileMenu from "../Include/MobileMenu";
import Footer from "../Include/Footer";


const NotFoundComponent = (props) => {
     return(
          <div className="id">

               <MobileMenu ></MobileMenu>

               <div className="page-wrapper">
                    <Header ></Header>
                    
                    {/* please wait section start */}
                    <section className="please-wait" >
                         <img src="/images/404.png" alt=""/>
                    </section>
                    {/* please wait section end */}

                    <Footer ></Footer>
               </div>

          </div>

     );
};

export default NotFoundComponent;