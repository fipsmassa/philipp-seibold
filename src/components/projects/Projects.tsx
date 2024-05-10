import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./projects.css";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="container_heading">Some Projects</h2>
        <div className="card_wrap">
          <div className="img_card">
            <div className="img svr"></div>
            <div className="text">
              <h3>SV Remshalden Fußball</h3>
              <p>Wordpress website for local club. Scores and other news.</p>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<ArrowForwardIosIcon />}
                href="https://www.svremshalden-fussball.de"
                target="_blank"
              >
                Visit
              </Button>
            </div>
          </div>
          <div className="img_card">
            <div className="img tfn"></div>
            <div className="text">
              <h3>Taken from None</h3>
              <p>
                Static website for local classic rock band, HTML and CSS only.
              </p>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<ArrowForwardIosIcon />}
                href="https://www.takenfromnone.de"
                target="_blank"
              >
                Visit
              </Button>
            </div>
          </div>
          <div className="img_card">
            <div className="img mfa"></div>
            <div className="text">
              <h3>Mittagstisch für alle</h3>
              <p>PHP based Website, information on public lunch table.</p>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<ArrowForwardIosIcon />}
                href="https://mittagstisch-fuer-alle.de/index.php"
                target="_blank"
              >
                Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
