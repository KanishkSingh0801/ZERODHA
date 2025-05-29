import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container p-5 mt-5">
      <div className="row p-2">
        <div className="col-lg-5 col-md-12 p-5 mt-5">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div className="mt-3">
            <a
              href={learnMore}
              style={{ textDecoration: "none" }}
            >
              Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <img src={imageURL} className="p-5 ms-5"></img>
        </div>
        
      </div>
    </div>
  );
}

export default RightSection;
