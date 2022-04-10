import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import HomeComponent from './Component/Pages/HomeComponent';
import AboutComponent from './Component/Pages/AboutComponent';

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

      </Switch>
    </Router>
    
    
  );
}

export default App;
