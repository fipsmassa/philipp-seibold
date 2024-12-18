import React from "react";
import EngineeringIcon from "@mui/icons-material/Engineering";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import "./blog.css";

export const Blog = () => {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <h2 className="container_heading">
          My Blog (or Docs, whatever you want to call it)
        </h2>
        <div className="blog_content">
          <h3>Check it out!</h3>
          <a href="https://blog.philipp-seibold.de">
            <RocketLaunchIcon className="blog_icon" />
          </a>
        </div>
      </div>
    </section>
  );
};
