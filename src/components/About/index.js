import React from "react";
import turner from "../../Images/Turner.jpg";

function About(){
    return(
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
    );
}

export default About;