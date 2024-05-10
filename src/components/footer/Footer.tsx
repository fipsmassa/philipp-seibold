import React from "react";
import "./footer.css";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";

interface EmojiProps {
  label: string;
  symbol: string;
}

const Emoji = (props: EmojiProps) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

export const Footer = () => {
  return (
    <section className="footer">
      <div className="container centered">
        <p>
          Coding with <Emoji label="heart" symbol="❤️" />
        </p>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<EmailIcon />}
          href="mailto:info@philipp-seibold.de"
        >
          Contact
        </Button>
        <p>Handcrafted by me © 2024</p>
      </div>
    </section>
  );
};
