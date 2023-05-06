import React from "react";
import MyCircleProgressComponent from "./MyCircleProgressComponent";
import ProgressCircle from "./ProgressCircle";
import "./Skill.css";
import LineProgress from "./LineProgress";

const Skill = () => {
  return (
    <section className="skill__section pb-[100px]">
      <div className="container">
        <div className="skill__inne">
          <div className="section__title relative overflow-hidden pb-14 text-center">
            <h3 className="relative z-10 mb-2 uppercase text-[34px] text-[#fff] font-bold">
              Skills
            </h3>
            <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-[#fff] bg-primary bg-opacity-20">
              <span className="about__animate absolute left-0 top-0 inline-block h-full w-1.5 rounded-full bg-[#72E2AE]"></span>
            </span>
            <span className="pointer-events-none absolute left-1/2 -top-2 z-0 -translate-x-1/2 transform text-9xl font-bold uppercase text-heading text-[#fff] opacity-5">
              My Skills
            </span>
          </div>
          <div className="circle__progress grid place-items-center gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
            {/* <MyCircleProgressComponent></MyCircleProgressComponent> */}

            {[
              { id: 1, percentage: 80, title: "Web Design" },
              { id: 2, percentage: 70, title: "Front-End Development" },
              { id: 3, percentage: 75, title: "WordPress" },
            ].map((i) => (
              <div key={i.id} className="w-[320px] bg-[#1C2336] border-[1px] border-[#4c4a4a] rounded-[5px] p-[20px]">
                <ProgressCircle
                  strokeWidth={10}
                  percentage={i.percentage}
                ></ProgressCircle>

                <h4 className="text-center text-[22px] text-[#fff] font-[500] mt-[20px]">
                  {i.title}
                </h4>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[50px] gap-y-[20px] sm:gap-y-[30px] mt-[50px]">
            {[
              {pers: '90', sub: 'HTML5'}, 
              {pers: '73', sub: 'CSS3'}, 
              {pers: '80', sub: 'JavaScript'}, 
              {pers: '88', sub: 'React/Next Js'},
              {pers: '59', sub: 'Node Js'} , 
              {pers: '82', sub: 'PHP, Laravel'} , 
            ].map(i=>
                <div>
                  <p className="text-[#fff] text-[18px]">{i.sub} {i.pers}%</p>
                  <LineProgress percentage={i.pers}></LineProgress>
                </div>
                )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;