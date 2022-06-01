import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

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

function App() {
  return (

    <Router>
      <Switch>

            {/* Home Component */}
            <Route exact path="/">
              <HomeComponent></HomeComponent>
            </Route>

            {/* About Component */}
            <Route path="/about">
              <AboutComponent></AboutComponent>
            </Route>

            {/* Services Component */}
            <Route path="/services">
              <ServicesComponent></ServicesComponent>
            </Route>

            {/* Services Details Component */}
            <Route path="/service-details/:slug">
              <ServiceDetailsComponent></ServiceDetailsComponent>
            </Route>

            {/* ContactComponent Component */}
            <Route path="/contact">
              <ContactComponent></ContactComponent>
            </Route>

            {/* LoginComponent Component */}
            <Route path="/login">
              <LoginComponent></LoginComponent>
            </Route>

            {/* RegisterComponent Component */}
            <Route path="/register">
              <RegisterComponent></RegisterComponent>
            </Route>

            {/* DashbaordComponent Component */}
            <Route path="/dashboard">
              <DashboardComponent></DashboardComponent>
            </Route>

            {/* my order Component */}
            <Route path="/my-order">
              <MyOrderComponent></MyOrderComponent>
            </Route>

            {/* order details Component */}
            <Route path="/order-details">
              <OrderDetailsComponent></OrderDetailsComponent>
            </Route>

            {/* account Component */}
            <Route path="/account">
              <AccountComponent></AccountComponent>
            </Route>

            {/* edit profile  */}
            <Route path="/edit-profile">
              <EditProfileComponent></EditProfileComponent>
            </Route>

            {/* change password  */}
            <Route path="/change-password">
              <ChangePasswordComponent></ChangePasswordComponent>
            </Route>

            {/* booking step 1 */}
            <Route path="/booking-1">
              <StepOneComponent></StepOneComponent>
            </Route>

            {/* booking step 2 */}
            <Route path="/booking-2">
              <StepTwoComponent></StepTwoComponent>
            </Route>

            {/* booking step 3 */}
            <Route path="/booking-3">
              <StepThreeComponent></StepThreeComponent>
            </Route>

            {/* booking step 4 */}
            <Route path="/booking-4">
              <StepFourComponent></StepFourComponent>
            </Route>

      </Switch>
    </Router>
    
    
  );
}

export default App;
