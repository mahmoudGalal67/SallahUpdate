import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./DynamicSlider.css";

function DynamicSlider({ number }) {
  return (
    <section className="dynamic-slider">
      <div className="wrapper">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide
            className="flex"
            style={
              number === 2
                ? {
                    backgroundImage: "url(/assets/banner-CcPz-bx2.png)",
                    backgroundSize: "cover",
                  }
                : null
            }
          >
            <h2>أفضل التخفيضات 2024</h2>
            <p>
              متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة
              إلى أفضل <br /> التحفيضات على المنتجات , تسوق الان واستمتع بكل
              بالتخفيضات على المنتجات
            </p>
            <a className="custom-link-filled" href="#">
              تسوق الآن
            </a>
          </SwiperSlide>
          <SwiperSlide
            className="flex"
            style={
              number === 2
                ? {
                    backgroundImage: "url(/assets/banner-CcPz-bx2.png)",
                    backgroundSize: "cover",
                  }
                : null
            }
          >
            <h2>أفضل التخفيضات 2024</h2>
            <p>
              متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة
              إلى أفضل <br /> التحفيضات على المنتجات , تسوق الان واستمتع بكل
              بالتخفيضات على المنتجات
            </p>
            <a className="custom-link-filled" href="#">
              تسوق الآن
            </a>
          </SwiperSlide>
          <SwiperSlide
            className="flex"
            style={
              number === 2
                ? {
                    backgroundImage: "url(/assets/banner-CcPz-bx2.png)",
                    backgroundSize: "cover",
                  }
                : null
            }
          >
            <h2>أفضل التخفيضات 2024</h2>
            <p>
              متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة
              إلى أفضل <br /> التحفيضات على المنتجات , تسوق الان واستمتع بكل
              بالتخفيضات على المنتجات
            </p>
            <a className="custom-link-filled" href="#">
              تسوق الآن
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default DynamicSlider;
