import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import "./header.css";
import EmailIcon from "@mui/icons-material/Email";

export const Header = () => {
  const [shrinkNavbar, setShrinkNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrinkNavbar(true);
      } else {
        setShrinkNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const headerOffset = 50;
    const element = document.getElementById(id);
    if (element) {
      let elementPosition = element.getBoundingClientRect().top;
      let offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={shrinkNavbar ? "header shrink" : "header"}>
      <nav className="container">
        <span className="logo">{"<PS />"}</span>
        <ul className="navigation">
          <li>
            <a onClick={() => scrollToSection("skills")}>Skills</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("cv")}>CV</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("projects")}>Sample Projects</a>
          </li>
          <li>
            <a onClick={() => scrollToSection("blog")}>Blog</a>
          </li>
        </ul>
        <Button
          variant="contained"
          color="secondary"
          href="mailto:info@philipp-seibold.de"
          size={shrinkNavbar ? "small" : "large"}
          endIcon={<EmailIcon />}
        >
          Contact
        </Button>
      </nav>
    </section>
  );
};
