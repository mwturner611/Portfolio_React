import React from "react";


function OnePortfolio(props){
    return(
    <div className="col-md-4 topMarg">  
                <a target="_blank" href={props.liveLink}>  
                <div className="card imgfade" style={{width: '18rem;'}}>
                    <img className="card-img-top img"  src={props.img} alt="Card image cap"/>
                    <div className="middle">
                    <div>Please click to see more</div>
                    </div>
                    <div className="card-body">
                    <p className="card-text text-center">{props.description}</p>
                    </div>
                    <div className="card-body">
                        <a target="_blank" href={props.github} className="card-link"><i className="fa fa-github fa-2x"></i></a>
                        <a target="_blank" href={props.liveLink} className="card-link">Live Link</a>
                    </div>
                </div>
                </a> 
            </div> )

}


export default OnePortfolio