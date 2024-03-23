import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination} from "swiper/modules";

const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  const getTestimonialData = async () => {
    try {
      const response = await fetch(
        "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
      );
      if (response.ok) {
        const data = await response.json();
        const testimonialData = data.user.testimonials;
        console.log(testimonialData);
        setTestimonialData(testimonialData);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
    getTestimonialData();
  }, []);

  return (
    <>
      <div className="service" id="testimonial">
        <div className="container" data-aos="zoom-in">
          <h1 className="text-white text-center">Testimonial</h1>
          <hr className="w-50 mx-auto abhar" />
          <Swiper
            
            slidesPerView={2}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonialData.map((curEle, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="review">
                    <div className="top">
                      <div className="image">
                        <img src={curEle.image.url} alt="" />
                      </div>
                      <div className="text">
                        <h1 className="text-white fs-4">{curEle.name}</h1>
                        <p className="text-white ">{curEle.position}</p>
                      </div>
                    </div>
                    <div className="buttom">
                      <p className="text-white">{curEle.review}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
