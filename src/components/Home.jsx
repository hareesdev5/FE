import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  return (
    <div className="container div-home" id="Home-style">
      <div className="d-flex justify-content-between m-3 ">
        <div className=" align-content-center div-content ">
          <img
            className="div-pro"
            src="https://e0.pxfuel.com/wallpapers/656/547/desktop-wallpaper-itachi-throne-know-it-info-itachi-sitting.jpg"
          />
          <br />
          <p>You Already Under my Genjutsu</p>
        </div>
        <div>
          <i
            className="fa-solid fa-power-off"
            style={{ color: "#e72a2a", cursor: "pointer" }}
            onClick={() => navigate("/")}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Home;
