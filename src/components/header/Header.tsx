import React from "react";
import Button from "@mui/material/Button";
import "./header.css";
import EmailIcon from "@mui/icons-material/Email";

export const Header = () => {
  return (
    <section className="header">
      <nav className="container">
        <span className="logo">{"{ps}"}</span>
        <Button
          variant="contained"
          color="primary"
          href="mailto:info@philipp-seibold.de"
          endIcon={<EmailIcon />}
        >
          Contact
        </Button>
      </nav>
    </section>
  );
};
