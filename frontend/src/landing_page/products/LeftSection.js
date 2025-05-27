import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div classsName="container p-5 mt-5">
      <div classsName="row p-5" style={{ display: "flex" }}>
        <div className="col-lg-6 col-md-12">
          <img src={imageURL} className="p-5 mx-5"></img>
        </div>
        
        <div className="col-lg-5 col-md-12 p-5 mt-5">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div className="mt-3">
            <a href={tryDemo} style = {{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
            <a href={learnMore} style = {{textDecoration:"none", marginLeft:"50px" }}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <div className="mt-3">
            <a href={googlePlay} >
              <img src="media\images\appstoreBadge.svg"></img>
            </a>
            <a href={appStore} style = {{textDecoration:"none", marginLeft:"50px" }}>
              <img src="media\images\googlePlayBadge.svg"></img>
            </a>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default LeftSection;
