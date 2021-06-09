//import './App.css';
import React, { Component } from 'react';
import Contact from './contact';
import About from './About';
import './App.css';
// import './server';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './footer'; //Include Footer
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './footer'; //Include Footer
import Home from './home';


import {BrowserRouter as Router, Route} from 'react-router-dom';
import Viewattra from './Viewattra';
import addAttract from './addAttract';
// import Burger from './components/Burger/Burger';





class App extends React.Component {
  
  
  render() {
    return (
     <Router>
      <div className="maincontainer">
        {/* <Burger/> */}
        <Route exact path='/about' component={About} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/Contact' component ={Contact}/>
        <Route exact path='/attractions' component ={Viewattra}/>        
        <Route exact path ='/add' component= {addAttract}/>



        
      {/* </div> */}
        <Footer />
      </div>
    </Router>

   
   )}
}







export default App;
