import React, {Component} from 'react';
import './App.css';
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

class App extends Component {
 
  render () {
    return(
    <div>
    
     <Nav />
    
    <div id="fullpage">
        
        <Home />
        <About />
        <Skills /> 
        <Portfolio/>
        
                
    </div>
    </div>
    );
  }
}

export default App;
