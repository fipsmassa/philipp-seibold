import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import "./header.css";
import EmailIcon from "@mui/icons-material/Email";

export const Header = () => {
  const [shrinkNavbar, setShrinkNavbar] = useState(false);
  const [responsiveNavActive, setResponsiveNavActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
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
    setResponsiveNavActive(false);
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

  const onBurgerClickHandler = () => {
    setResponsiveNavActive(!responsiveNavActive);
  };

  return (
    <section className={shrinkNavbar ? "header shrink" : "header"}>
      <nav className="container">
        <div className="burger_wrapper">
          <div
            className={responsiveNavActive ? "burger active" : "burger"}
            onClick={onBurgerClickHandler}
          >
            <span className="top_bun"></span>
            <span className="patty"></span>
            <span className="bottom_bun"></span>
          </div>
        </div>
        <div className="logo_wrapper">
          <span className="logo">{"<PS />"}</span>
        </div>
        <div className="navigation_wrapper">
          <ul className="navigation desktop-navigation">
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
        </div>
        <div className="contact_wrapper">
          <Button
            variant="contained"
            color="secondary"
            href="mailto:info@philipp-seibold.de"
            size={shrinkNavbar ? "small" : "large"}
            endIcon={<EmailIcon />}
          >
            Contact
          </Button>
        </div>
      </nav>
      <div
        className={
          responsiveNavActive
            ? "responsive-navigation active"
            : "responsive-navigation"
        }
      >
        <div className="container">
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
        </div>
      </div>
    </section>
  );
};
