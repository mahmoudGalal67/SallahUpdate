import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./DynamicProducts.css";

function DynamicProducts() {
  return (
    <section className="dynamic-products">
      <div className="header">
        <h2>وصل حديثا</h2>
        <p>تسوق احدث المنتجات المميزة المضافة جديد</p>
      </div>
      <Swiper
        breakpoints={{
          768: {
            slidesPerView: 1,
          },
          1080: {
            slidesPerView: 4,
          },
          1400: {
            slidesPerView: 4,
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
          <div className="product">
            <img src="product-four.53caa46f9c4cb8111b24.png" alt="" />
            <div className="title">ساعات</div>
            <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
            <p className="info">سوار رياضي اسود - عادي.</p>
            <div className="price-wrapper">
              <div className="old">350.00 ر.س</div>
              <div className="new">250.00 رس</div>
            </div>
            <div className="links-wrapper">
              <a className="fav flex" href="">
                <img src="heart.svg" alt="" />
              </a>
              <button className="cart">
                <span>+</span>
                Add to cart
              </button>
            </div>
            <div className="offer">خصم 25%</div>
            <div className="special">جديد</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="product">
            <img src="product-four.53caa46f9c4cb8111b24.png" alt="" />
            <div className="title">ساعات</div>
            <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
            <p className="info">سوار رياضي اسود - عادي.</p>
            <div className="price-wrapper">
              <div className="old">350.00 ر.س</div>
              <div className="new">250.00 رس</div>
            </div>
            <div className="links-wrapper">
              <a className="fav flex" href="">
                <img src="heart.svg" alt="" />
              </a>
              <button className="cart">
                <span>+</span>
                Add to cart
              </button>
            </div>
            <div className="offer">خصم 25%</div>
            <div className="special">جديد</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="product">
            <img src="product-four.53caa46f9c4cb8111b24.png" alt="" />
            <div className="title">ساعات</div>
            <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
            <p className="info">سوار رياضي اسود - عادي.</p>
            <div className="price-wrapper">
              <div className="old">350.00 ر.س</div>
              <div className="new">250.00 رس</div>
            </div>
            <div className="links-wrapper">
              <a className="fav flex" href="">
                <img src="heart.svg" alt="" />
              </a>
              <button className="cart">
                <span>+</span>
                Add to cart
              </button>
            </div>
            <div className="offer">خصم 25%</div>
            <div className="special">جديد</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="product">
            <img src="product-four.53caa46f9c4cb8111b24.png" alt="" />
            <div className="title">ساعات</div>
            <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
            <p className="info">سوار رياضي اسود - عادي.</p>
            <div className="price-wrapper">
              <div className="old">350.00 ر.س</div>
              <div className="new">250.00 رس</div>
            </div>
            <div className="links-wrapper">
              <a className="fav flex" href="">
                <img src="heart.svg" alt="" />
              </a>
              <button className="cart">
                <span>+</span>
                Add to cart
              </button>
            </div>
            <div className="offer">خصم 25%</div>
            <div className="special">جديد</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="product">
            <img src="product-four.53caa46f9c4cb8111b24.png" alt="" />
            <div className="title">ساعات</div>
            <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
            <p className="info">سوار رياضي اسود - عادي.</p>
            <div className="price-wrapper">
              <div className="old">350.00 ر.س</div>
              <div className="new">250.00 رس</div>
            </div>
            <div className="links-wrapper">
              <a className="fav flex" href="">
                <img src="heart.svg" alt="" />
              </a>
              <button className="cart">
                <span>+</span>
                Add to cart
              </button>
            </div>
            <div className="offer">خصم 25%</div>
            <div className="special">جديد</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="product">
            <img src="product-four.53caa46f9c4cb8111b24.png" alt="" />
            <div className="title">ساعات</div>
            <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
            <p className="info">سوار رياضي اسود - عادي.</p>
            <div className="price-wrapper">
              <div className="old">350.00 ر.س</div>
              <div className="new">250.00 رس</div>
            </div>
            <div className="links-wrapper">
              <a className="fav flex" href="">
                <img src="heart.svg" alt="" />
              </a>
              <button className="cart">
                <span>+</span>
                Add to cart
              </button>
            </div>
            <div className="offer">خصم 25%</div>
            <div className="special">جديد</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="product">
            <img src="product-four.53caa46f9c4cb8111b24.png" alt="" />
            <div className="title">ساعات</div>
            <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
            <p className="info">سوار رياضي اسود - عادي.</p>
            <div className="price-wrapper">
              <div className="old">350.00 ر.س</div>
              <div className="new">250.00 رس</div>
            </div>
            <div className="links-wrapper">
              <a className="fav flex" href="">
                <img src="heart.svg" alt="" />
              </a>
              <button className="cart">
                <span>+</span>
                Add to cart
              </button>
            </div>
            <div className="offer">خصم 25%</div>
            <div className="special">جديد</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <div className="product">
            <img src="product-four.53caa46f9c4cb8111b24.png" alt="" />
            <div className="title">ساعات</div>
            <p className="desc">ساعة ذكية جديدة من سلسلة 8</p>
            <p className="info">سوار رياضي اسود - عادي.</p>
            <div className="price-wrapper">
              <div className="old">350.00 ر.س</div>
              <div className="new">250.00 رس</div>
            </div>
            <div className="links-wrapper">
              <a className="fav flex" href="">
                <img src="heart.svg" alt="" />
              </a>
              <button className="cart">
                <span>+</span>
                Add to cart
              </button>
            </div>
            <div className="offer">خصم 25%</div>
            <div className="special">جديد</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default DynamicProducts;
