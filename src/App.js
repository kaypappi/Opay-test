import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import HomeComponent from './components/HomeComponent'
import SignIn from './components/Auth/signin'
import SignUp from './components/Auth/signup'
import SideNav from './components/navbar/sidenav'
import './materialize.min.css'


function App() {
  return (
    <Router>
      <div className="App">
      <Route path='/'component={Navbar}></Route>
      <Route path='/'component={SideNav}></Route>
      <Switch>
        <Route exact path='/' component={HomeComponent}></Route>
        <Route exact path='/signin' component={SignIn}></Route>
        <Route exact path='/signup' component={SignUp}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
