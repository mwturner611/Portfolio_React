import React from "react";

function Nav(){
    return(
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
    );
}

export default Nav;