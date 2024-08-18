import React from "react";
import "./topcom.css";

const TopComponent = () => {
  return (
    <section className="heroContentWrapper">
      <div className="heroContent">
        <div className="heroParagraphsWrapper">
          <div className="heroParagraphs">
            <h1 className="sitBackAnd">
              {`Sit Back and Relax !! Car Service with Free Home Pickup & Drop.`}
            </h1>
            <div className="worriedWithCar">
              Worried with your car servicing and maintenance ???
            </div>
            <div className="connectWithUsWrapper">
              <button
                className="connectWithUsButton"
                onClick={() =>
                  (window.location.href = "https://wa.me/7386565050")
                }
              >
                {" "}
                CONNECT ON WHAT'S APP
                <span className="arrowIcon">➔</span>
              </button>
            </div>
          </div>
          <div className="imageWrapper">
            <img src="./phonet.png" alt="Phone" className="phoneImage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopComponent;
