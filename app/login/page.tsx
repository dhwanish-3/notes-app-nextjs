"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ArrowUp from "../../public/arrow-up.svg";
import ArrowDown from "../../public/arrow-down.svg";
import "swiper/css";
import "./Login.css";
import { useEffect, useState } from "react";

const colors = [
  "red",
  "green",
  "blue",
  "white",
  "black",
  "yellow",
  "pink",
  "purple",
  "orange",
  "brown",
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
  return (
    <div className="avatar-popup">
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
                    <SingleAvatar image={avatar} />
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
                    <SingleAvatar color={color} />
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
  const [centreColor, setCentreColor] = useState(colors[1]);

  useEffect(() => {
    console.log("useEffect");
    if (image) {
      console.log("image");
      const updateColor = () => {
        console.log("updateColor");
        let element = document.querySelector(".swiper-slide-active .color");
        console.log(element);
        if (element) {
          let style = window.getComputedStyle(element);
          let newColor = style.getPropertyValue("background-color");
          setCentreColor(newColor);
          console.log(centreColor);
        }
      };
      document.addEventListener("DOMContentLoaded", updateColor);
      return () => {
        document.removeEventListener("DOMContentLoaded", updateColor);
      };
    }
  }, []);

  if (color) {
    return (
      <div className="single-avatar">
        <div className="color" style={{ backgroundColor: color }}></div>
      </div>
    );
  }
  if (image) {
    return (
      <div className="single-avatar">
        <div className="color" style={{ backgroundColor: centreColor }}>
          <Image src={image} alt="img" />
        </div>
      </div>
    );
  }
}
