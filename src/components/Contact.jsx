import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [contactData, setContactData] = useState([]);
  const getContactData = async () => {
    try {
      const response = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae",
        {}
      );
      if (response.ok) {
        const data = await response.json();
        const contactData = data.user;
        setContactData(contactData);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
    getContactData();
  }, []);
  return (
    <>
      <div className="contact" id="contact">
        <div className="container" data-aos="zoom-in">
          <h1 className="text-white text-center">
            Contact <span className="lastname">Us</span>
          </h1>
          <hr className="w-50 mx-auto abhar" />
          <div className="contact-main">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6 col-12">
                <h2 className="text-white pt-5">
                  Feel free to contact me if any assistance is needed in the
                  future
                </h2>
                <div className="contact-details">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-12">
                      <div className="idel">
                        <div>
                          <FontAwesomeIcon
                            className="contactsocialicon"
                            icon={faLocationDot}
                          ></FontAwesomeIcon>
                        </div>
                        <div>
                          <p className="text-white fs-4">
                            Adress <br />{" "}
                            <span className="fs-6">
                              nothing
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-12">
                      <div className="idel">
                        <div>
                          <FontAwesomeIcon
                            className="contactsocialicon"
                            icon={faPhone}
                          ></FontAwesomeIcon>
                        </div>

                        <div>
                          <p className="text-white fs-4">
                            Phone <br />{" "}
                            <span className="fs-6">
                             62200
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="idel">
                    <div>
                      <FontAwesomeIcon
                        className="contactsocialicon"
                        icon={faEnvelope}
                      ></FontAwesomeIcon>
                    </div>

                    <div>
                      <p className="text-white fs-4">
                        Mail <br />{" "}
                        <span className="fs-6">{contactData.email}</span>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-6 col-12">
                <div className="contact-details">
                  <form id="contactform" method="POST">
                    <div className="mb-3">
                      <label for="username" class="form-label text-light fs-5">
                        Enter your name
                      </label>
                      <input
                        type="text"
                        name="username"
                        class="form-control mb-3 "
                        placeholder="Name"
                      />
                      <label for="email" class="form-label text-light fs-5">
                        Enter your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        class="form-control mb-3"
                        placeholder="Email"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="message" class="form-label text-light fs-5">
                        Enter your message
                      </label>
                      <textarea
                        name="message"
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="4"
                      ></textarea>
                    </div>
                    <div class="hero-btn">
                      {" "}
                      <button type="button" class="btn">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
