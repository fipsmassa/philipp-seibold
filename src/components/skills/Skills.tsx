import React from "react";
import "./skills.css";
import { Skillbar } from "../lib/Skillbar";
import Grid from "@mui/material/Grid";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";
import InventoryIcon from "@mui/icons-material/Inventory";

export const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <div className="skill_cards">
          <h2 className="container_heading">My skills</h2>
          <div className="card_wrap">
            <div className="card">
              <div className="card_heading">
                <h3>Frontend</h3>
                <ComputerIcon className="heading_icon" fontSize="large" />
              </div>
              <Skillbar name={"JavaScript"} level={5} />
              <Skillbar name={"TypeScript"} level={4} />
              <Skillbar name={"React"} level={4} />
              <Skillbar name={"Redux"} level={3} />
              <Skillbar name={"HTML"} level={5} />
              <Skillbar name={"CSS"} level={4} />
              <Skillbar name={"Angular"} level={2} />
              <Skillbar name={"Vue"} level={2} />
            </div>
            <div className="card">
              <div className="card_heading">
                <h3>Backend</h3>
                <StorageIcon className="heading_icon" fontSize="large" />
              </div>
              <Skillbar name={"Java"} level={3} />
              <Skillbar name={"Spring"} level={1} />
              <Skillbar name={"PHP"} level={2} />
              <Skillbar name={"Node.js"} level={2} />
              <Skillbar name={"MongoDB"} level={2} />
              <Skillbar name={"SQL"} level={2} />
            </div>
            <div className="card">
              <div className="card_heading">
                <h3>Misc</h3>
                <InventoryIcon className="heading_icon" fontSize="large" />
              </div>
              <Skillbar name={"GIT"} level={4} />
              <Skillbar name={"GitLab"} level={4} />
              <Skillbar name={"IntelliJ"} level={4} />
              <Skillbar name={"VS Code"} level={4} />
              <Skillbar name={"Storybook"} level={3} />
              <Skillbar name={"Motivation"} level={5} />
              <Skillbar name={"Learning"} level={5} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
