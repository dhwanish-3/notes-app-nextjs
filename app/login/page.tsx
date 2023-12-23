"use client";

import { Swiper, SwiperSlide } from "swiper/react";
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
  const avatars = ["img1", "img2", "img3"];
  return (
    <div className="login popup">
      <span>Login</span>

      <div className="username">
        <input type="text" required placeholder="Enter username" />
      </div>
      <button className="username-submit">Submit</button>
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
        <img src="image" alt="img" />
      </div>
    );
  }
}