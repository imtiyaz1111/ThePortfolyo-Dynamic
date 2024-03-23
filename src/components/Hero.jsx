import React, { useState,useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [userData, setUserData] = useState([]);
  const  getUserData= async()=>{
    try {
      const response = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae", {
      });
      if (response.ok) {
        const data = await response.json();
        const userData=data.user.about;
        // console.log(userData)
        setUserData(userData)
   
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    Aos.init({ duration: 2000 });
    getUserData()
  }, []);
  return (
    <>
      <div className="home pt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 col-12">
              <div className="home-deail">
                <div className="main " data-aos="zoom-in">
                  <p className="follw">Follow on</p>

                  <FontAwesomeIcon
                    className="followicon"
                    icon={faGithub}
                  ></FontAwesomeIcon>

                  <FontAwesomeIcon
                    className="followicon"
                    icon={faFacebook}
                  ></FontAwesomeIcon>

                  <FontAwesomeIcon
                    className="followicon"
                    icon={faInstagram}
                  ></FontAwesomeIcon>

                  <h2>
                    {" "}
                    <span className="text-white">Hello,</span> my name is
                  </h2>
                  <h1 className="">
                  {userData.name}  
                  </h1>
                  <h3 className="text-white">I AM <span className="lastname">{userData.title}</span></h3>
                  <p>
                    {userData.address} {userData.description}
                  </p>
                  <div class="hero-btn">
                    {" "}
                    <button type="button" class="btn">
                      Contact me
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-12">
              <figure className="homeimg" data-aos="zoom-in">
                <img src={userData.avatar.url} alt="vsdfsf" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
