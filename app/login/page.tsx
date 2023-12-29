"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ArrowUp from "../../public/arrow-up.svg";
import ArrowDown from "../../public/arrow-down.svg";
import "swiper/css";
import "./Login.css";
import { useState } from "react";
import one from "../../public/images/one.png";
import two from "../../public/images/two.png";
import three from "../../public/images/three.png";
import four from "../../public/images/four.png";
import five from "../../public/images/five.png";
import six from "../../public/images/six.png";
import seven from "../../public/images/seven.png";
import eight from "../../public/images/eight.png";
import nine from "../../public/images/nine.png";
import ten from "../../public/images/ten.png";

const colors = [
  "red",
  "#00d507", // green
  "#00d0ff", // blue
  "transparent",
  "#3e3d3e", // black
  "yellow",
  "#ff00ff", // pink
  "#b900e3", // purple
  "orange",
  "#764235", // brown
  "gray",
];
const avatars = [one, two, three, four, five, six, seven, eight, nine, ten];

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
  if (color && !image) {
    console.log("color is " + color);
    return (
      <div className="single-avatar">
        <div className="color" style={{ backgroundColor: color }}></div>
      </div>
    );
  }
  if (image && color) {
    console.log("image is " + image);
    return (
      <div className="single-avatar">
        <div className="color" style={{ backgroundColor: color }}>
          <Image src={image} alt="img" className="image" />
        </div>
      </div>
    );
  }
}
