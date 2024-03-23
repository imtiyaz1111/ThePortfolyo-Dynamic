import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faInstagram,
  faFacebook,
  faLinkedin,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">

        <div className="socialaicon text-center pt-5">
          a{" "}
         
            <FontAwesomeIcon
              className="fotersocialicon"
              icon={faGithub}
            ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="fotersocialicon"
            icon={faFacebook}
          ></FontAwesomeIcon>

            <FontAwesomeIcon
              className="fotersocialicon"
              icon={faInstagram}
            ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="fotersocialicon"
            icon={faTelegram}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="fotersocialicon"
            icon={faTwitter}
          ></FontAwesomeIcon>
        
          <FontAwesomeIcon
            className="fotersocialicon"
            icon={faLinkedin}
          ></FontAwesomeIcon>

          <div class="f-credits pb-5">
            <p className="text-light">
              Copyright ©2024 All rights reserved | This template is made with ❤
              by Imtiyaz Alam
            </p>
          </div>
        </div>
      </div>

  )
}

export default Footer
