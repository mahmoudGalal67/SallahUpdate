import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./SpecialProducts.css";

function SpecialProducts() {
  return (
    <section className="special-products">
      <div className="header">
        <h2>
          تسوق حسب الفئات
          <br />
          منتجات مميزة
        </h2>
        <p>تسوق احدث المنتجات المميزة المضافة جديد</p>
      </div>
      <Swiper
        breakpoints={{
          300: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1080: {
            slidesPerView: 5,
          },
          1400: {
            slidesPerView: 7,
          },
        }}
        spaceBetween={0}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation]}
      >
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-five.e66ce738bffa6aaf958c.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-four.3db25da181c49bcaebe2.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-six.ed945e6792303c18eb29.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-three.a8677ef7c1b649af5964.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-two.62ac60c5df7f33dbf884.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-five.e66ce738bffa6aaf958c.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-four.3db25da181c49bcaebe2.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-six.ed945e6792303c18eb29.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-three.a8677ef7c1b649af5964.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-two.62ac60c5df7f33dbf884.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-five.e66ce738bffa6aaf958c.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-four.3db25da181c49bcaebe2.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-six.ed945e6792303c18eb29.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-three.a8677ef7c1b649af5964.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-two.62ac60c5df7f33dbf884.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-five.e66ce738bffa6aaf958c.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-four.3db25da181c49bcaebe2.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-six.ed945e6792303c18eb29.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-three.a8677ef7c1b649af5964.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-two.62ac60c5df7f33dbf884.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-five.e66ce738bffa6aaf958c.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-four.3db25da181c49bcaebe2.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-six.ed945e6792303c18eb29.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-three.a8677ef7c1b649af5964.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="img-wrapper">
            <img src="categ-two.62ac60c5df7f33dbf884.png" alt="" />
          </div>
          <h3>أجهزة لابتوب</h3>
          <p>150 منتج</p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default SpecialProducts;
