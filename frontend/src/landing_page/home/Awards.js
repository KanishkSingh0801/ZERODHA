import React from "react";

function Awards() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-lg-6 col-md-12 p-4 text-center">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6 col-md-12 p-4">
          <h2 className="mb-4">Largest Stock Broker in India</h2>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Government securities</li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <div className="mt-4 text-center">
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              className="img-fluid"
              style={{ maxWidth: "90%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
