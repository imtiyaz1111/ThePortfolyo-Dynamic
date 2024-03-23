import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [aboutData, setAboutData] = useState([]);
  const getAboutData = async () => {
    try {
      const response = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae",
        {}
      );
      if (response.ok) {
        const data = await response.json();
        const aboutData = data.user.about;
        setAboutData(aboutData);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
    getAboutData();
  }, []);
  return (
    <div className="about pb-5" id="about">
      <div className="container" data-aos="zoom-in">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 col-12">
            <figure className="abimg">
              <img
                src="https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1706283290608-n4hq7k"
                alt=""
              />
            </figure>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 col-12">
            <div className="about-details">
              <h1 className="text-white">
                About <span className="aboutspan">ME</span>
              </h1>
              <hr className="abhar" />
              <h3 className="text-white">{aboutData.subTitle}</h3>

              <p className="text-light fs-6">{aboutData.description}</p>
              <div class="hero-btn">
                <button type="button" class="btn">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
