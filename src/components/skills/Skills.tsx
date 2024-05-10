import React, { useState, useEffect, useRef } from "react";
import "./skills.css";
import { NewSkillbar, Skillbar } from "../lib/Skillbar";
import Grid from "@mui/material/Grid";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";
import InventoryIcon from "@mui/icons-material/Inventory";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>My Skills</h2>
        <div className="new_skills">
          <div className="frontend custom_card">
            <div className="card_heading">
              <h3>Frontend</h3>
              <ComputerIcon className="heading_icon" fontSize="large" />
            </div>
            <NewSkillbar name="JavaScript" progress={99} />
            <NewSkillbar name="TypeScript" progress={99} />
            <NewSkillbar name="React" progress={99} />
            <NewSkillbar name="HTML" progress={99} />
            <NewSkillbar name="CSS" progress={99} />
            <NewSkillbar name="Angular" progress={25} />
            <NewSkillbar name="Vue" progress={33} />
            <NewSkillbar name="React Native" progress={33} />
          </div>
          <div className="frontend custom_card">
            <div className="card_heading">
              <h3>Backend</h3>
              <StorageIcon className="heading_icon" fontSize="large" />
            </div>
            <NewSkillbar name="Java" progress={75} />
            <NewSkillbar name="JUnit" progress={50} />
            <NewSkillbar name="Spring" progress={50} />
            <NewSkillbar name="PHP" progress={50} />
            <NewSkillbar name="Node.js" progress={33} />
            <NewSkillbar name="MongoDB" progress={33} />
            <NewSkillbar name="SQL" progress={50} />
            <NewSkillbar name="PostgreSQL" progress={33} />
          </div>
          <div className="frontend custom_card">
            <div className="card_heading">
              <h3>Misc</h3>
              <InventoryIcon className="heading_icon" fontSize="large" />
            </div>
            <NewSkillbar name="Git" progress={85} />
            <NewSkillbar name="GitLab" progress={75} />
            <NewSkillbar name="IntelliJ" progress={90} />
            <NewSkillbar name="VSCode" progress={75} />
            <NewSkillbar name="Storybook" progress={95} />
            <NewSkillbar name="Jest" progress={80} />
            <NewSkillbar name="Testing Library" progress={80} />
            <NewSkillbar name="Cypress" progress={33} />
          </div>
        </div>
      </div>
    </section>
  );
};
