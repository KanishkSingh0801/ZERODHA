import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row px-3 mt-5 border-top">
        <h1 className="mt-5 text-center">People</h1>
      </div>
      <div
        className="row px-3 mb-5 align-items-center"
        style={{ lineHeight: "1.6", fontSize: "1em" }}
      >
        {/* Image and Name Section */}
        <div className="col-lg-6 col-md-12 text-muted p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            className="img-fluid"
            style={{ borderRadius: "100%", maxWidth: "250px" }}
            alt="Nithin Kamath"
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>

        {/* Text Content Section */}
        <div className="col-lg-6 col-md-12 text-muted p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Twitter
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
