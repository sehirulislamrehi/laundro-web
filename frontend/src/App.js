import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import HomeComponent from './Component/Pages/HomeComponent';
import AboutComponent from './Component/Pages/AboutComponent';
import ServicesComponent from './Component/Pages/ServicesComponent';
import ContactComponent from './Component/Pages/ContactComponent';
import ServiceDetailsComponent from "./Component/Pages/ServiceDetailsComponent";
import LoginComponent from "./Component/Pages/Auth/LoginComponent";
import RegisterComponent from "./Component/Pages/Auth/RegisterComponent";
import DashboardComponent from "./Component/Pages/Profile/DashboardComponent";
import MyOrderComponent from "./Component/Pages/Profile/MyOrderComponent";
import AccountComponent from "./Component/Pages/Profile/AccountComponent";
import EditProfileComponent from "./Component/Pages/Profile/EditProfileComponent";
import ChangePasswordComponent from "./Component/Pages/Profile/ChangePasswordComponent";
import StepOneComponent from "./Component/Pages/Booking/StepOneComponent";
import StepTwoComponent from "./Component/Pages/Booking/StepTwoComponent";
import StepThreeComponent from "./Component/Pages/Booking/StepThreeComponent";
import StepFourComponent from "./Component/Pages/Booking/StepFourComponent";
import OrderDetailsComponent from "./Component/Pages/Profile/OrderDetailsComponent";
import NotFoundComponent from "./Component/Pages/NotFoundComponent";
import FaqComponent from "./Component/Pages/FaqComponent";
import CustomPage from "./Component/Pages/CustomPage";
import { useEffect } from "react";
import { useState } from "react";

function App() {

  const [application_data, set_application_data] = useState(null)

     useEffect(() => {

          //get application data
          const get_application_data_url = `${window.url}/application-data`;
          fetch(get_application_data_url,{
               method : "GET"
          })
          .then( response => response.json() )
          .then( response => {
               set_application_data(response.data)
          })
          .catch( response => {
               
          })

     },[])

  return (

    <Router>
      <Switch>

            {/* Home Component */}
            <Route exact path="/">
              <HomeComponent applicationData={application_data}></HomeComponent>
            </Route>

            {/* About Component */}
            <Route path="/about">
              <AboutComponent applicationData={application_data}></AboutComponent>
            </Route>

            {/* Services Component */}
            <Route path="/services">
              <ServicesComponent applicationData={application_data}></ServicesComponent>
            </Route>

            {/* Services Details Component */}
            <Route path="/service-details/:slug">
              <ServiceDetailsComponent applicationData={application_data}></ServiceDetailsComponent>
            </Route>

            {/* ContactComponent Component */}
            <Route path="/contact">
              <ContactComponent applicationData={application_data}></ContactComponent>
            </Route>

            {/* LoginComponent Component */}
            <Route path="/login">
              <LoginComponent applicationData={application_data}></LoginComponent>
            </Route>

            {/* RegisterComponent Component */}
            <Route path="/register">
              <RegisterComponent applicationData={application_data}></RegisterComponent>
            </Route>

            {/* DashbaordComponent Component */}
            <Route path="/dashboard">
              <DashboardComponent applicationData={application_data}></DashboardComponent>
            </Route>

            {/* my order Component */}
            <Route path="/my-order">
              <MyOrderComponent applicationData={application_data}></MyOrderComponent>
            </Route>

            {/* order details Component */}
            <Route path="/order-details/:order_no">
              <OrderDetailsComponent applicationData={application_data}></OrderDetailsComponent>
            </Route>

            {/* account Component */}
            <Route path="/account">
              <AccountComponent applicationData={application_data}></AccountComponent>
            </Route>

            {/* edit profile  */}
            <Route path="/edit-profile">
              <EditProfileComponent applicationData={application_data}></EditProfileComponent>
            </Route>

            {/* change password  */}
            <Route path="/change-password">
              <ChangePasswordComponent applicationData={application_data}></ChangePasswordComponent>
            </Route>

            {/* booking step 1 */}
            <Route path="/booking-1">
              <StepOneComponent applicationData={application_data}></StepOneComponent>
            </Route>

            {/* booking step 2 */}
            <Route path="/booking-2">
              <StepTwoComponent applicationData={application_data}></StepTwoComponent>
            </Route>

            {/* booking step 3 */}
            <Route path="/booking-3">
              <StepThreeComponent applicationData={application_data}></StepThreeComponent>
            </Route>

            {/* booking step 4 */}
            <Route path="/booking-4">
              <StepFourComponent applicationData={application_data}></StepFourComponent>
            </Route>

            {/* FAQ */}
            <Route path="/faq">
              <FaqComponent applicationData={application_data}></FaqComponent>
            </Route>

            {/* pages */}
            <Route path="/pages/:slug">
              <CustomPage applicationData={application_data}></CustomPage>
            </Route>
            
            {/* 404 */}
            <Route path="/404">
              <NotFoundComponent applicationData={application_data}></NotFoundComponent>
            </Route>
            <Redirect to="/404"/>

            

      </Switch>
    </Router>
    
    
  );
}

export default App;
