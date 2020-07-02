import React from "react";

function Wrapper(props){
    return (<section id="portfolio">
          <div className="container">
            <div className="row justify-content-center pgHeader colorText"><h2>Projects</h2></div>
            {props.children}
            </div>
        </section>)
}

export default Wrapper;
