import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import HomeComponent from './Component/Pages/HomeComponent';
import AboutComponent from './Component/Pages/AboutComponent';
import ServicesComponent from './Component/Pages/ServicesComponent';
import ContactComponent from './Component/Pages/ContactComponent';
import ServiceDetailsComponent from "./Component/Pages/ServiceDetailsComponent";
import LoginComponent from "./Component/Pages/Auth/LoginComponent";
import RegisterComponent from "./Component/Pages/Auth/RegisterComponent";
import DashboardComponent from "./Component/Pages/Profile/DashboardComponent";

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

      </Switch>
    </Router>
    
    
  );
}

export default App;
