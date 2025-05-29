import React from "react";

function Universe({imageURL}) {
  return (
    <div classsName="container">
      <div className="row text-center mt-5">
        <h1 className="text-center">The Zerodha Universe</h1>
        <p className="text-center mb-5">
            Extend your trading and investment experience even further with our partner platforms.
        </p>
        <div className="col-lg-4 col-md-6 p-3 mt-4">
          <img src="media/images/smallcaseLogo.png" ></img>
          <p className="text-small text-muted mt-3">Thematic investment platform.</p>
        </div>
        <div className="col-lg-4 col-md-6 p-3 mt-4">
          <img src="media/images/streakLogo.png" style = {{width:"30%"}}></img>
          <p className="text-small text-muted mt-3">Algo & strategy platform.</p>
        </div>
        <div className="col-lg-4 col-md-6 p-3 mt-4">
          <img src="media/images/sensibullLogo.svg" style = {{width:"48%"}}></img>
          <p className="text-small text-muted mt-3">Options trading platform.</p>
        </div>
        <div className="col-lg-4 col-md-6 p-3 mt-4">
          <img src="media/images/zerodhaFundHouse.png" style = {{width:"43%"}}></img>
          <p className="text-small text-muted mt-3">Asset management.</p>
        </div>
        <div className="col-lg-4 col-md-6 p-3 mt-4">
          <img src="media/images/goldenpiLogo.png" style = {{width:"39%"}}></img>
          <p className="text-small text-muted mt-3">TBonds trading platform.</p>
        </div>
        <div className="col-lg-4 col-md-6 p-3 mt-4">
          <img src="media/images/dittoLogo.png" style = {{width:"28%"}}></img>
          <p className="text-small text-muted mt-3">Insurance.</p>
        </div>
        <button className = "p-2 btn btn-primary fs-5 mb-5 mt-3"style = {{width:"20%", margin:"0 auto"}}>Sign up now!</button>
      </div>
    </div>
  );
}

export default Universe;
