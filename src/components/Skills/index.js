import React from "react";
import bootstrap from "../../Images/Bootstrap.png";
import react from "../../Images/react.png";
import mysql from "../../Images/mySQL.png";
import mongodb from "../../Images/mongodb.png";
import mongoose from "../../Images/mongoose.png";


function Skills(){
    return(
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
    );
}

export default Skills;