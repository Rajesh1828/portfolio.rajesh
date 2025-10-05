import React from "react";
import "./Loader.css";
import { assets } from "../assets/assets";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <div className="box">
          <div className="logo">
            <img
              src={assets.code}
              alt="Dad The Ad Logo"
            />
          </div>
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
};

export default Loader;
