import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowRight, Sparkles } from "lucide-react";
import heroData from "./heroData";

function HeroBanner() {
  return (
    <div className="w-full mt-20 px-4 lg:px-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="rounded-3xl overflow-hidden shadow-2xl"
      >
        {heroData.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={`relative bg-gradient-to-r ${item.color} min-h-[360px] lg:min-h-[390px]`}
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-10 left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 grid lg:grid-cols-2 items-center min-h-[360px] lg:min-h-[390px] px-6 lg:px-14">
                <div className="text-white">

                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-xl px-3 py-1 rounded-full mb-4">
                    <Sparkles size={16} />
                    <span className="text-sm font-medium">
                      {item.badge}
                    </span>
                  </div>

                  <h1 className="text-3xl lg:text-5xl font-black leading-tight max-w-xl">
                    {item.title}
                  </h1>

                  <p className="mt-4 text-sm lg:text-base text-gray-100 max-w-lg leading-7">
                    {item.subtitle}
                  </p>

                  <button className="mt-6 flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-xl">
                    {item.button}
                    <ArrowRight size={18} />
                  </button>

                  <div className="flex gap-8 mt-8">

                    <div>
                      <h2 className="text-2xl font-bold">15K+</h2>
                      <p className="text-sm text-gray-200">
                        Students
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold">98%</h2>
                      <p className="text-sm text-gray-200">
                        ATS Score
                      </p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold">24/7</h2>
                      <p className="text-sm text-gray-200">
                        AI Support
                      </p>
                    </div>

                  </div>

                </div>

                <div className="flex justify-center mt-8 lg:mt-0">

                  <div className="relative">

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[330px] lg:w-[380px] rounded-3xl shadow-2xl"
                    />

                    <div className="absolute -top-5 -left-5 bg-white/20 backdrop-blur-xl rounded-xl px-4 py-3">

                      <h2 className="text-sm text-white font-semibold">
                        ATS Score
                      </h2>

                      <h3 className="text-3xl font-black text-white">
                        98%
                      </h3>

                    </div>

                    <div className="absolute bottom-6 -right-6 bg-white rounded-xl px-5 py-3 shadow-xl">

                      <h2 className="font-semibold text-gray-800 text-sm">
                        Resume Ready
                      </h2>

                    </div>

                  </div>

                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroBanner;