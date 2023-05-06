import React from "react";
import Clients from "./Clients";

const Review = () => {
  return (
    <div className="review__section pb-[100px]">
      <div className="container">
        <div className="review__inner">
          <div className="section__title relative overflow-hidden pb-14 text-center">
            <h3 className="relative z-10 mb-2 uppercase text-[34px] text-[#fff] font-bold">
              Clients Reviews
            </h3>
            <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-[#fff] bg-primary bg-opacity-20">
              <span className="about__animate absolute left-0 top-0 inline-block h-full w-1.5 rounded-full bg-[#72E2AE]"></span>
            </span>
            <span className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading text-[#fff] opacity-5">
              REVIEWS
            </span>
          </div>
          <Clients></Clients>
        </div>
      </div>
    </div>
  );
};

export default Review;
