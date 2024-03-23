import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  const [timelineData, setTimelineData] = useState([]);

  const getTimelineData = async () => {
    try {
      const response = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      if (response.ok) {
        const data = await response.json();
        const timelineData = data.user.timeline;
        // console.log(timelineData);
        setTimelineData(timelineData);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
    getTimelineData();
  }, []);
  return (
    <div className="service" id="timeline">
      <div className="container" data-aos="zoom-in">
        <h1 className="text-white text-center">Timelins</h1>
        <hr className="w-50 mx-auto abhar" />
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-12 pt-5">
            <div className="education">
              <h1 className="text-white text-center">Education</h1>
              <div class="accordion mt-5" id="accordionExample">
               {
                timelineData.map((curEle)=>{
                  const {company_name,summary,jobTitle,jobLocation,bulletPoints,_id}=curEle;
                  return (
                    <div class="accordion-item" key={_id}>
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                       {company_name}
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body text-white">
                       <h2>{jobTitle} <br /> <span className="fs-5">{jobLocation}</span>
                       </h2>
                       
                       <p>{summary}</p>
                       <p>{bulletPoints}</p>
                      </div>
                    </div>
                  </div>
                  )
                })
               }
                
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-12 pt-5">
            <div className="exprience">
              <h1 className="text-white text-center">Experience</h1>
              <div class="accordion mt-5" id="accordionExample">
               {
                timelineData.map((curEle)=>{
                  const {company_name,summary,jobTitle,jobLocation,bulletPoints,_id}=curEle;
                  return (
                    <div class="accordion-item" key={_id}>
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                       {company_name}
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body text-white">
                       <h2>{jobTitle} <br /> <span className="fs-5">{jobLocation}</span>
                       </h2>
                       
                       <p>{summary}</p>
                       <p>{bulletPoints}</p>
                      </div>
                    </div>
                  </div>
                  )
                })
               }
                
              </div>
            </div>
          </div>
        </div>
        {/* <VerticalTimeline>
          {timelineData.map((curEle) => {
            const { company_name, summary, jobTitle, _id } = curEle;
            return (
              <VerticalTimelineElement key={_id} iconStyle={faPlus}>
                <div className="timelines">
                  <h3 className="title">{jobTitle}</h3>
                  <h2 className="subtitle">{company_name}</h2>
                  <p className="desc">{summary}</p>
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline> */}
      </div>
    </div>
  );
};

export default Timeline;
