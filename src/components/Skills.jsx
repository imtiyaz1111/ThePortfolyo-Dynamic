import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  const [skillData, setSkillData] = useState([]);

  const getSkillData = async () => {
    try {
      const response = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      if (response.ok) {
        const data = await response.json();
        const skillsData = data.user.skills;
        // console.log(skillsData);
        setSkillData(skillsData);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
    getSkillData();
  }, []);
  return (
    <div className="service" id="skills">
      <div className="container" data-aos="zoom-in">
        <h1 className="text-white text-center">Skills</h1>
        <hr className="w-50 mx-auto abhar" />
        
        <div className="row">
          {skillData.map((curElem,index) => {
            
            return (
              <div className="col-sm-12 col-md-12 col-lg-4 col-12 pt-5">
                <div className="main_card" key={index}>
                  <figure className="skill-img" data-aos="zoom-in">
                    <img src={curElem.image.url} alt="" />
                    <h1 className="text-white fs-5 skname">{curElem.name}</h1>
                  </figure>
                  <div className="skill-detail">
                    <div
                      className="progress"
                      role="progressbar"
                      aria-label="Example with label"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div
                        className="progress-bar fs-6 "
                        style={{ width: `${curElem.percentage}%` }}
                        data-aos="fade-right"
                      >
                        {curElem.percentage}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
