import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
    const [projectData, setProjectData] = useState([]);
    const getProjectData = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        if (response.ok) {
          const data = await response.json();
          const projectsData = data.user.projects;
          // console.log(projectsData);
          setProjectData(projectsData);
        } else {
          console.error("Error fetching user data");
        }
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      Aos.init({ duration: 2000 });
      getProjectData();
    }, []);
  
  return (
    <div className="service" id="project">
    <div className="container" data-aos="zoom-in">
      <h1 className="text-white text-center">Projects</h1>
      <hr className="w-50 mx-auto abhar" />
      <p className="text-light text-center fs-6">
        This is my project that i made and there are four category you can see
        that every project are dynamic as well as responsive.
      </p>
      <div className="row">
        {projectData.map((curElem,index) => {
         
          return (
            <div className="col-sm-12 col-md-12 col-lg-4 col-12 pt-5">
              <div className="main_card" key={index}>
                <figure className="card-img" data-aos="zoom-in">
                  <img src={curElem.image.url} alt="" />
                </figure>
                <div className="card-body" data-aos="zoom-in">
                  
                 <h3 className="text-white">{curElem.title}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  )
}

export default Projects
