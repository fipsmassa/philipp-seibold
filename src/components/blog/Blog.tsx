import React from "react";
import EngineeringIcon from "@mui/icons-material/Engineering";
import "./blog.css";

export const Blog = () => {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <h2 className="container_heading">My Blog</h2>
        <div className="blog_content">
          <h3>Currently under construction</h3>
          <EngineeringIcon className="blog_icon" />
        </div>
      </div>
    </section>
  );
};
