import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const [serviceData, setServiceData] = useState([]);

  const getServiceData = async () => {
    try {
      const response = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      if (response.ok) {
        const data = await response.json();
        const servicesData = data.user.services;
        // console.log(servicesData);
        setServiceData(servicesData);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
    getServiceData();
  }, []);

  return (
    <div className="service" id="service">
      <div className="container" data-aos="zoom-in">
        <h1 className="text-white text-center">Services</h1>
        <hr className="w-50 mx-auto abhar" />
       
        <div className="row">
          {serviceData.map((curElem,index) => {
          
            return (
              <div className="col-sm-12 col-md-12 col-lg-4 col-12 pt-5">
                <div className="main_card" key={index}>
                  <figure className="card-img" data-aos="zoom-in">
                    <img src={curElem.image.url} alt="" />
                  </figure>
                  <div className="card-body" data-aos="zoom-in">
                    <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-6 col-12 pt-5">
                        <h5 className="card-title text-light">{curElem.name}</h5>
                      </div>
                      <div className="col-sm-12 col-md-12 col-lg-6 col-12 pt-5">
                        <h5 className="card-title text-light">
                          Price: <span className="lastname">{curElem.charge}</span>{" "}
                        </h5>
                      </div>
                    </div>
                    <p className="card-text text-light">{curElem.desc}</p>
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

export default Services;
