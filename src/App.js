import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/navbar-footer/Footer';
import Auth from './components/page/auth/Auth';
import ChangePass from './components/page/auth/ChangePass';
import Navbar from './components/navbar-footer/Navbar';
import Product from './components/page/landing-page/Terpopuler';
import './assets/scss/main.scss';
import NotFound from './components/page/landing-page/NotFound';
import LandingPage from './components/page/landing-page/LandingPage';

const DefaultRoute = ({component: Component, ...rest}) => {
  return(
    <Route {...rest} render = {props => (
      <div>  
        <Navbar />
        <Component {...props}/>
        <Footer />/>
      </div>
    )} />
  )
}
const CrazyRoute = ({component: Component, ...rest}) => {
  return(
    <Route {...rest} render={props => (
      <div>  
        <Component {...props}/>
      </div>
    )} />
  )
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <DefaultRoute exact path="/" component={LandingPage}/>
          <DefaultRoute path="/product-invest" component={Product}/>

          {/* <Route path="/forgot" component={Forgot}/> */}
          
          <CrazyRoute path="/login" component={Auth}/>
          <CrazyRoute path="/password/reset=:token" component={ChangePass}/>
          <CrazyRoute component={NotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
