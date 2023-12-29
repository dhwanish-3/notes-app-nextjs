"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ArrowUp from "../../public/arrow-up.svg";
import ArrowDown from "../../public/arrow-down.svg";
import "swiper/css";
import "./Login.css";
import { useState } from "react";

const colors = [
  "red",
  "#00d507", // green
  "#00d0ff", // blue
  "transparent",
  "#3e3d3e",
  "yellow",
  "#ff00ff",
  "#b900e3", // purple
  "orange",
  "#764235", // brown
  "gray",
];
const avatars = [
  ArrowDown,
  ArrowDown,
  ArrowDown,
  ArrowDown,
  ArrowDown,
  ArrowDown,
  ArrowDown,
  ArrowDown,
];

export default function LoginPopUp() {
  const [centreColor, setCentreColor] = useState("red");

  return (
    <div className="avatar-popup show">
      <div className="login">
        <span>Login</span>
        <div className="avatar-picker">
          <Image src={ArrowDown} alt="" />
          <div className="avatar-slider">
            <Swiper
              centeredSlides={true}
              loop={true}
              spaceBetween={0}
              effect="coverflow"
              grabCursor={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={{
                el: ".swiper-pagination",
              }}
            >
              {avatars.map((avatar, id) => {
                return (
                  <SwiperSlide key={id}>
                    <SingleAvatar image={avatar} color={centreColor} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="avatar-slider">
            <Swiper
              centeredSlides={true}
              loop={true}
              spaceBetween={0}
              effect="coverflow"
              grabCursor={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 300,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={{
                el: ".swiper-pagination",
              }}
            >
              {colors.map((color, id) => {
                return (
                  <SwiperSlide key={id}>
                    {({ isActive }) => {
                      if (isActive) {
                        setCentreColor(color);
                      }
                      return <SingleAvatar color={color} />;
                    }}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <Image src={ArrowUp} alt="" />
        </div>
        <div className="username">
          <input type="text" required placeholder="Enter username" />
        </div>
        <button className="username-submit">Submit</button>
      </div>
    </div>
  );
}

function SingleAvatar({ color, image }: any) {
  if (color) {
    return (
      <div className="single-avatar">
        <div className="color" style={{ backgroundColor: color }}></div>
      </div>
    );
  }
  if (image && color) {
    return (
      <div className="single-avatar">
        <div className="color" style={{ backgroundColor: color }}>
          <Image src={image} alt="img" />
        </div>
      </div>
    );
  }
}
