import React from "react";
import howsitgrowing from "../../Images/howsitgrowing.JPG";
import weather from "../../Images/weather.JPG";
import burger from "../../Images/burger.JPG";
import demo from "../../Images/demo.gif";
import mars from "../../Images/mars.JPG";
import note from "../../Images/NoteTaker.JPG";

function Portfolio(props){
    return(
        <section id="portfolio">
            
        <div className="container">
            <div className="row justify-content-center pgHeader colorText"><h2>Projects</h2></div>
            <div className="row align-items-center justify-content-center">
            <div className="col-md-4 topMarg">  
                <a target="_blank" href="https://hows-it-growing.herokuapp.com/">  
                <div className="card imgfade" style={{width: '18rem;'}}>
                    <img className="card-img-top img"  src={require("../../Images/howsitgrowing.JPG")} alt="Card image cap"/>
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
    );
}

export default Portfolio;