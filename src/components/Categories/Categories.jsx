import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";

import c1 from "../../../public/Categories/c1.avif";
import c2 from "../../../public/Categories/c2.avif";
import c3 from "../../../public/Categories/c3.avif";
import c4 from "../../../public/Categories/c4.avif";
import c5 from "../../../public/Categories/c5.avif";
import c6 from "../../../public/Categories/c6.avif";
import c7 from "../../../public/Categories/c7.avif";
import c8 from "../../../public/Categories/c8.avif";
import { Link } from "react-router-dom";



const Categories = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-2xl">Shop by Categories</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 3000,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        loop={true}
        className="w-full h-[450px]"
      >
        <SwiperSlide>
          <div className="justify-around h-full items-center flex flex-col  ">
            <Link
              to={"/products/jewelry-and-watches"}
              className="bg-white  w-28 h-28 flex justify-center items-center flex-col"
            >
              <img src={c1} alt="" />
              <span>Jewelry & Watches</span>
            </Link>
            <Link
              to={"/products/sports-and-entertainment"}
              className="bg-white flex-col  w-28 h-28 flex justify-center  gap-4 items-center"
            >
              <img src={c3} alt="" />
              <span>Sports & Entertainment</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="justify-around h-full items-center flex flex-col  ">
            <Link
              to={""}
              className="bg-white  w-28 h-28 flex justify-center items-center flex-col"
            >
              <img src={c4} alt="" />
              <span>Electronics</span>
            </Link>
            <Link
              to={""}
              className="bg-white flex-col  w-28 h-28 flex justify-center  gap-4 items-center"
            >
              <img src={c2} alt="" />
              <span>Beauty & Health</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="justify-around h-full items-center flex flex-col  ">
            <Link
              to={""}
              className="bg-white  w-28 h-28 flex justify-center items-center flex-col"
            >
              <img src={c5} alt="" />
              <span>Women's Clothing</span>
            </Link>
            <Link
              to={""}
              className="bg-white flex-col  w-28 h-28 flex justify-center  gap-4 items-center"
            >
              <img src={c6} alt="" />
              <span> Men's Clothing</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="justify-around h-full items-center flex flex-col  ">
            <Link
              to={""}
              className="bg-white  w-28 h-28 flex justify-center items-center flex-col"
            >
              <img src={c7} alt="" />
              <span> Toys & Games</span>
            </Link>
            <Link
              to={""}
              className="bg-white flex-col  w-28 h-28 flex justify-center  gap-4 items-center"
            >
              <img src={c8} alt="" />
              <span>Furniture</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="justify-around h-full items-center flex flex-col  ">
            <Link
              to={""}
              className="bg-white flex-col  w-28 h-28 flex justify-center  gap-4 items-center"
            >
              <img src={c3} alt="" />
              <span>Sports & Entertainment</span>
            </Link>
            <Link
              to={""}
              className="bg-white  w-28 h-28 flex justify-center items-center flex-col"
            >
              <img src={c1} alt="" />
              <span>Jewelry & Watches</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="justify-around h-full items-center flex flex-col  ">
            <Link
              to={""}
              className="bg-white  w-28 h-28 flex justify-center items-center flex-col"
            >
              <img src={c4} alt="" />
              <span>Electronics</span>
            </Link>
            <Link
              to={""}
              className="bg-white flex-col  w-28 h-28 flex justify-center  gap-4 items-center"
            >
              <img src={c2} alt="" />
              <span>Beauty & Health</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="justify-around h-full items-center flex flex-col  ">
            <Link
              to={""}
              className="bg-white flex-col  w-28 h-28 flex justify-center  gap-4 items-center"
            >
              <img src={c6} alt="" />
              <span> Men's Clothing</span>
            </Link>
            <Link
              to={""}
              className="bg-white  w-28 h-28 flex justify-center items-center flex-col"
            >
              <img src={c5} alt="" />
              <span>Women's Clothing</span>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="justify-around h-full items-center flex flex-col  ">
            <Link
              to={""}
              className="bg-white flex-col  w-28 h-28 flex justify-center  gap-4 items-center"
            >
              <img src={c8} alt="" />
              <span>Furniture</span>
            </Link>
            <Link
              to={""}
              className="bg-white  w-28 h-28 flex justify-center items-center flex-col"
            >
              <img src={c7} alt="" />
              <span> Toys & Games</span>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Categories;
