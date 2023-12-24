"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ArrowUp from "../../public/arrow-up.svg";
import ArrowDown from "../../public/arrow-down.svg";
import "swiper/css";
import "./Login.css";

export default function LoginPopUp() {
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
  return (
    <div className="background">
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
                {avatars.map((avatar) => {
                  return (
                    <SwiperSlide>
                      <SingleAvatar image={avatar} color={colors[2]} />
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
                {colors.map((color) => {
                  return (
                    <SwiperSlide>
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
  if (image) {
    return (
      <div className="single-avatar">
        <div className="color" style={{ backgroundColor: color }}></div>
        <Image src={image} alt="img" />
      </div>
    );
  }
}
