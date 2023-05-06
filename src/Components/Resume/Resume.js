import React from "react";
import Education from "./Education";
import Experience from "./Experience";


const Resume = () => {
    

  return (
    <div className="resume__section pb-[100px]">
      <div className="container">
        <div className="resume__inner">
          <div className="section__title relative overflow-hidden pb-14 text-center">
            <h3 className="relative z-10 mb-2 uppercase text-[34px] text-[#fff] font-bold">
              Resume
            </h3>
            <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-[#fff] bg-primary bg-opacity-20">
              <span className="about__animate absolute left-0 top-0 inline-block h-full w-1.5 rounded-full bg-[#72E2AE]"></span>
            </span>
            <span className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading text-[#fff] opacity-5">
              Resume
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-[30px]">
            <Education></Education>
            <Experience></Experience>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
