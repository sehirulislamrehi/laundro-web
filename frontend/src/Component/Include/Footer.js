
const Footer = () => {
     return(
          <div className="id">
               <footer className="bixol-footer" style={{
                    backgroundImage : `url("/images/footer-bg.jpg")`
               }}>
                    <a href="index.html" className="bixol-footer-logo"><img src="/images/logo.png" alt="" /></a>
                    <div className="container">
                         <div className="row">
                              <div className="col-lg-3 col-md-6 col-sm-6">
                                   <div className="bixol-footer-widget">
                                        <h4>We are <span>Laundro!</span></h4>
                                        <p>
                                             We work with a passion of taking challenges and creating new
                                             ones in advertising sector.
                                        </p>
                                        <div className="footer-office-time">
                                             <h6>Open Hours:</h6>
                                             <span>Mon - Sat: 8am - 5pm,</span>
                                             <span>Sunday: CLOSED</span>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-6">
                                   <div className="bixol-footer-widget">
                                        <h4>Newsletter</h4>
                                        <p>Subscribe our newsletter to get our latest update & news</p>
                                        <div className="bixol-footer-form">
                                             <form action="#">
                                                  <input type="email" placeholder="Your mail adress" />
                                                  <button type="submit">
                                                       <i className="far fa-paper-plane"></i>
                                                  </button>
                                             </form>
                                        </div>
                                        <div className="bixol-footer-social">
                                             <a href="" className="facebook"><i className="fab fa-facebook-f"></i></a>
                                             <a href="" className="twitter"><i className="fab fa-twitter"></i></a>
                                             <a href="" className="dribbble"><i className="fab fa-dribbble"></i></a>
                                             <a href="" className="behance"><i className="fab fa-behance"></i></a>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-6">
                                   <div className="bixol-footer-widget">
                                        <h4>Official info</h4>
                                        <div className="bixol-footer-address">
                                             <ul>
                                                  <li>
                                                       <i className="fas fa-map-marker-alt"></i>
                                                       30 Commercial Road
                                                       <br />Fratton, Australia
                                                  </li>
                                                  <li><i className="fas fa-phone"></i>+8801858361812</li>
                                                  <li>
                                                       <i className="fas fa-envelope"></i>mdsehirulislamrehi@gmail.com<br />info@laundro.com
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                              <div className="col-lg-3 col-md-6 col-sm-6">
                                   <div className="bixol-footer-widget">
                                        <h4>Instagram</h4>
                                        <div className="bixol-insta-widget">
                                             <ul>
                                                  <li>
                                                       <a href="#"><i className="fab fa-instagram"></i></a>
                                                       <img src="/images/insta-1.jpg" alt="" />
                                                  </li>
                                                  <li>
                                                       <a href="#"><i className="fab fa-instagram"></i></a>
                                                       <img src="/images/insta-2.jpg" alt="" />
                                                  </li>
                                                  <li>
                                                       <a href="#"><i className="fab fa-instagram"></i></a>
                                                       <img src="/images/insta-3.jpg" alt="" />
                                                  </li>
                                                  <li>
                                                       <a href="#"><i className="fab fa-instagram"></i></a>
                                                       <img src="/images/insta-4.jpg" alt="" />
                                                  </li>
                                                  <li>
                                                       <a href="#"><i className="fab fa-instagram"></i></a>
                                                       <img src="/images/insta-5.jpg" alt="" />
                                                  </li>
                                                  <li>
                                                       <a href="#"><i className="fab fa-instagram"></i></a>
                                                       <img src="/images/insta-6.jpg" alt="" />
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="footer-copyright">
                         <p>2022 &copy; All rights reserved by <a href="https://sehirulislamrehi.com/" target="blank">Rehi</a></p>
                    </div>
               </footer>
          </div>
     );
}

export default Footer;