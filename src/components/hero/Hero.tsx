import React from "react";
import "./hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container wrapper">
        <div className="avatar">
          <img src="/assets/avatar.png" width="250" />
        </div>
        <div className="intro">
          <h1>Hi, I'm Philipp, a passionate developer! </h1>
        </div>
      </div>
    </section>
  );
};
