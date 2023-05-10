import React from "react";
import "./skillbar.css";

interface skillbarProps {
  name: String;
  level: 1 | 2 | 3 | 4 | 5;
}

export const Skillbar = ({ name, level }: skillbarProps) => {
  return (
    <div className="skill">
      <p>{name}</p>
      <div className="skill_level">
        <span className={`level first ${level >= 1 ? "filled" : ""}`}></span>
        <span className={`level mid ${level >= 2 ? "filled" : ""}`}></span>
        <span className={`level mid ${level >= 3 ? "filled" : ""}`}></span>
        <span className={`level mid ${level >= 4 ? "filled" : ""}`}></span>
        <span className={`level last ${level == 5 ? "filled" : ""}`}></span>
      </div>
    </div>
  );
};
