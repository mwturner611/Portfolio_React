import React from 'react';
import './App.css';
import turner from "./Images/Turner.jpg";
import bootstrap from "./Images/Bootstrap.png";
import react from "./Images/react.png";
import mysql from "./Images/mySQL.png";
import mongodb from "./Images/mongodb.png";
import mongoose from "./Images/mongoose.png";
import howsitgrowing from "./Images/howsitgrowing.JPG";
import weather from "./Images/weather.JPG";
import burger from "./Images/burger.JPG";
import demo from "./Images/demo.gif";
import mars from "./Images/mars.JPG";
import note from "./Images/NoteTaker.JPG";


function App() {
  return (
    <div>
    
     <header id="home" className="container-flex fixed-top">
    
        <div className="dropdown show float-right">
            <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Contact Me
            </a>
          
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" target="_blank" href="mailto:mwturner611@gmail.com">Email: mwturner611@gmail.com</a>
              <a className="dropdown-item" target="_blank" href="https://www.linkedin.com/in/matt-turner-ba328211a/">LinkedIn</a>
              <a className="dropdown-item" target="_blank" href="https://github.com/mwturner611">Github</a>
              <a className="dropdown-item" target="_blank" href="https://drive.google.com/file/d/1QCiuGbfZzCHkoTmAaynAgrOwAaxXnOlQ/view?usp=sharing">Resume</a>
            </div>
        </div>

    
        <nav className="navbar navbar-expand-lg navbar-light navcol">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link" href="#home">Home</a>
                <a className="nav-item nav-link" href="#bio">AboutMe</a>
                <a className="nav-item nav-link" href="#tech">Tech Skills</a>
                <a className="nav-item nav-link" href="#portfolio">Projects</a>
              </div>
            </div>
        </nav>
    </header>
    
    <div id="fullpage">
        
        <section id="home">
            
        <h1 className="whiteText" id="typeText">
            Hi I'm Matt Turner.<span className="blink_me"><a href="#bio"><i className="fas fa-arrow-circle-down"></i> </a></span></h1>            
            
        </section>
        
        
        <section id="bio">
            <div className="container align-items-center h-100">
            
                <div className="row align-items-center h-100">
                    <div class ="col-md-4 topMarg">
                        <img src={turner} className="img-fluid centerpad" alt="pic of Matt"/>
                    </div>

                    <div class ="col-lg-8">
                        <div className="card centerpad">
                            <div className="card-header">
                            <h3 className="colorText">About Me</h3> 
                            </div>

                            <div className="card-body">
                                <blockquote className="blockquote mb-0">
                                    <p>I like to work with code with the people it's benefiting in mind. I'm a web developer who's driven to solve the problem for the end user. I seek to bring clarity and resolution with my development.</p>
                                </blockquote>
                                <a className="littleIcon" target="_blank" href="mailto:mwturner611@gmail.com">Email</a> <a className="littleIcon" target="_blank" href="https://www.linkedin.com/in/matt-turner-ba328211a/">LinkedIn</a> <a className="littleIcon" target="_blank" href="https://github.com/mwturner611"><i className="fa fa-github fa-2x"></i></a> <a className="littleIcon" target="_blank" href="https://drive.google.com/file/d/1QCiuGbfZzCHkoTmAaynAgrOwAaxXnOlQ/view?usp=sharing">Resume</a>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="tech">
            
            <div className="container align-items-center h-100">
                <div className="row justify-content-center pgHeader whiteText"><h2>Skills</h2></div>
                               
                <div className="row align-items-center h-100 skillRow">
                    
                    <div className="col-md-4 skillBox">
                        <div className="card skills" style={{width: '18rem;'}}>
                            <div className="card-header">
                              Front-End
                            </div>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item"><i className="fab fa-html5 fa-1x"></i> HTML</li>
                              <li className="list-group-item"><i className="fab fa-css3 fa-1x"></i> CSS</li>
                              <li className="list-group-item"><img src={react} height="22px" width="22px" alt="React.js"/> React.js</li>
                              <li className="list-group-item"><img src={bootstrap} height="14px" width="14px" alt="Bootstrap"/> Bootstrap</li>
                              <li className="list-group-item"><i className="fab fa-js fa-1x"></i> JavaScript</li>
                              <li className="list-group-item">JQuery</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 skillBox">
                        <div className="card skills" style={{width: '18rem;'}}>
                            <div className="card-header">
                                Back-End
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"><i className="fab fa-node-js fa-1x"></i> NodeJS</li>
                                <li className="list-group-item">Express <i className="fab fa-js fa-1x"></i></li>
                                <li className="list-group-item"><img src={mysql} height="14px" width="14px" alt="MySQL"/> MySQL</li>
                                <li className="list-group-item"><img src={mongodb} height="14px" width="14px" alt="MongoDB"/> MongoDB</li>
                                <li className="list-group-item"><img src={mongoose} height="20px" width="20px" alt="Mongoose"/>  Mongoose</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 skillBox">
                        <div className="card skills" style={{width: '18rem;'}}>
                            <div className="card-header">
                                Other Skills
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Github</li>
                                <li className="list-group-item">Concepts I'm Familiar with<ul>
                                    <li>Object Oriented Programming</li>
                                    <li>Test Driven Development</li>
                                    <li>Scrum</li>
                                  </ul>
                                </li>
                                

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="portfolio">
            
            <div className="container">
                <div className="row justify-content-center pgHeader colorText"><h2>Projects</h2></div>
                <div className="row align-items-center justify-content-center">
                <div className="col-md-4 topMarg">  
                    <a target="_blank" href="https://hows-it-growing.herokuapp.com/">  
                    <div className="card imgfade" style={{width: '18rem;'}}>
                        <img className="card-img-top img"  src={howsitgrowing} alt="Card image cap"/>
                        <div className="middle">
                        <div>Please click to see more</div>
                        </div>
                        <div className="card-body">
                        <p className="card-text text-center">This app allows you to give your plants the TLC they deserve (and not die)</p>
                        </div>
                        <div className="card-body">
                            <a target="_blank" href="https://github.com/mwturner611/Hows_It_Growing" className="card-link"><i className="fa fa-github fa-2x"></i></a>
                            <a target="_blank" href="https://hows-it-growing.herokuapp.com/" className="card-link">Live Link</a>
                        </div>
                    </div>
                    </a> 
                </div> 
                    <div className="col-md-4 topMarg">    
                        <a target="_blank" href="https://mwturner611.github.io/Weather-Dashboard/">
                        <div className="card imgfade" style={{width: '18rem;'}}>
                        <img className="card-img-top img" src={weather} alt="Card image cap"/>
                        <div className="middle">
                            <div>Please click to see more</div>
                        </div>
                        <div className="card-body">
                            <p className="card-text text-center">This page allows you to search the weather by city</p>
                        </div>
                        <div className="card-body">
                            <a target="_blank" href="https://github.com/mwturner611/Weather-Dashboard" className="card-link"><i className="fa fa-github fa-2x"></i></a>
                            <a target="_blank" href="https://mwturner611.github.io/Weather-Dashboard/" className="card-link">Live Link</a>
                        </div>
                        </div>
                        </a>
                    </div>

                    <div className="col-md-4 topMarg">
                        <a target="_blank" href="https://burger-quest.herokuapp.com/">
                        <div className="card imgfade" style={{width: '18rem;'}}>
                        <img className="card-img-top img" src={burger} alt="Card image cap"/>
                        <div className="middle">
                            <div>Please click to see more</div>
                        </div>
                        <div className="card-body">
                            <p className="card-text text-center">This app helps you track burgers you want to eat and mark them off as they're eaten.</p>
                        </div>
                        <div className="card-body">
                            <a target="_blank" href="https://github.com/mwturner611/Burger_Quest" className="card-link"><i className="fa fa-github fa-2x"></i></a>
                            <a target="_blank" href="https://burger-quest.herokuapp.com/" className="card-link">Live Link</a>
                        </div>          
                        </div>
                        </a>
                    </div>
                </div>

                <div className="row align-items-center justify-content-center">
                    <div className="col-md-4 topMarg">
                        <a target="_blank" href="https://github.com/mwturner611/Employee_Tracker">
                        <div className="card imgfade" style={{width: '18rem;'}}>
                            <img className="card-img-top img" src={demo} alt="Card image cap"/>
                            <div className="middle">
                            <div>Please click to see more</div>
                            </div>
                            <div className="card-body">
                            <p className="card-text text-center">A simple command line application to draw employee info from a MySQL database</p>
                            </div>
                            <div className="card-body">
                                <a target="_blank" href="https://github.com/mwturner611/Employee_Tracker" className="card-link"><i className="fa fa-github fa-2x"></i></a>
                            </div>  
                        </div>
                        </a>
                    </div>
                    <div className="col-md-4 topMarg">  
                        <a target="_blank" href="https://mwturner611.github.io/Life_On_Mars/">  
                        <div className="card imgfade" style={{width: '18rem;'}}>
                            <img className="card-img-top img" src={mars} alt="Card image cap"/>
                            <div className="middle">
                            <div>Please click to see more</div>
                            </div>
                            <div className="card-body">
                            <p className="card-text text-center">This is a site on Mars calling on two Nasa API's.</p>
                            </div>
                            <div className="card-body">
                                <a target="_blank" href="https://github.com/mwturner611/Life_On_Mars" className="card-link"><i className="fa fa-github fa-2x"></i></a>
                                <a target="_blank" href="https://mwturner611.github.io/Life_On_Mars/" className="card-link">Live Link</a>
                            </div>     
                        </div>
                        </a>
                    </div>
                    <div className="col-md-4 topMarg">
                        <a target="_blank" href="https://note-taker-611.herokuapp.com/">
                            <div className="card imgfade" style={{width: '18rem;'}}>
                                <img className="card-img-top img" src={note} alt="Note Taker"/>
                                <div className="middle">
                                    <div>Please click to see more</div>
                                </div>
                                <div className="card-body">
                                    <p className="card-text text-center">This application uses express to save and retrieve note data from a JSON file</p>
                                </div>
                                <div className="card-body">
                                    <a target="_blank" href="https://github.com/mwturner611/Note_Taker" className="card-link"><i className="fa fa-github fa-2x"></i></a>
                                    <a target="_blank" href="https://note-taker-611.herokuapp.com/" className="card-link">Live Link</a>
                                </div>   
                            </div>
                        </a>
                    </div>
                    
                </div>  
            </div>
        </section>
                
    </div>
    </div>
  );
}

export default App;
