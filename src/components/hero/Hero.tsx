import React from "react";
import "./hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container wrapper">
        <div className="intro">
          <h1>Hi, I'm Philipp 👋 </h1>
          <p>
            I'm a frontend developer based in Stuttgart, Germany, specialized in
            crafting web applications. Let's bring your digital dreams to life!
          </p>
        </div>
        <div className="avatar"></div>
      </div>
    </section>
  );
};
