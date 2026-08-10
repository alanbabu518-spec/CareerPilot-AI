import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import img1 from "../assets/CareerPilot.img1.png";
import img2 from "../assets/CareerPilot.img2.png";
import img3 from "../assets/CareerPilot.img3.jpg";
import img4 from "../assets/CareerPilot.img4.jpg";

export default function HeroSlider() {
  return (
    <div className="w-full flex justify-end">

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full max-w-[550px] h-[550px]"
      >
        <SwiperSlide>
          <img
            src={img1}
            alt=""
            className="w-full h-full object-contain"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={img2}
            alt=""
            className="w-full h-full object-contain"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={img3}
            alt=""
            className="w-full h-full object-contain"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={img4}
            alt=""
            className="w-full h-full object-contain"
          />
          
        </SwiperSlide>
        

      </Swiper>
      
    </div>
  );
}