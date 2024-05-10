import React from "react";
import "./cv.css";
import Grid from "@mui/material/Grid";
import SchoolIcon from "@mui/icons-material/School";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

export const Cv = () => {
  return (
    <section className="cv" id="cv">
      <div className="container">
        <h2 className="container_heading">My CV</h2>
        <div className="new_cv">
          <div className="education">
            <div className="card_heading">
              <h3>Education</h3>
              <SchoolIcon className="heading_icon" fontSize="large" />
            </div>
            <ul>
              <li>
                <span>Bachelor of Science Business Information Systems</span>
                <small>Duale Hochschule Baden-Württemberg</small>
                <small>09/2018 - 09/2021</small>
              </li>
              <li>
                <span>
                  Apprenticeship Management Assistant for Marketing
                  Communication with additional qualification "Communications
                  Management"
                </span>
                <small>Johann-Friedrich-von-Cotta-Schule Stuttgart</small>
                <small>09/2015 - 07/2018</small>
              </li>
              <li>
                <span>Management Studies</span>
                <small>University of Augsburg</small>
                <small>10/2014 - 07/2015</small>
              </li>
              <li>
                <span>Social Year </span>
                <small>University Hospital Ulm</small>
                <small>09/2013 - 08/2014</small>
              </li>
              <li>
                <span>Final secondary-school exmaniations</span>
                <small>Albert-Schweizer-Gymnasium Laichingen</small>
                <small>07/2013</small>
              </li>
            </ul>
          </div>
          <div className="experience">
            <div className="card_heading">
              <h3>Experience</h3>
              <HomeRepairServiceIcon
                className="heading_icon"
                fontSize="large"
              />
            </div>
            <ul>
              <li>
                <span>Software Developer</span>
                <small>S-Payment GmbH</small>
                <small>10/2021 - now</small>
                <small>
                  React development in a scrum based team with usage of
                  TypeScript, Redux, Axios, Keycloak, testing with Jest and
                  React Testing Library as well as component development with
                  Storybook. Furthermore development, supervision and testing of
                  JEE inventory applications.
                </small>
              </li>
              <li>
                <span>Dual Student Business Information Systems</span>
                <small>Deutscher Sparkassenverlag GmbH</small>
                <small>09/2018 - 09/2021</small>
                <small>
                  Training in different tools (Sonarqube, Spring), writing of
                  projects reports with practical appliance (focus on unit
                  testing at DSV Service GmbH, focus on microservices at the
                  payment division of the DSV Group), creation of the bachelor
                  thesis with a practical comparison between React, Angular and
                  Vue.js.
                </small>
              </li>
              <li>
                <span>
                  Apprentice Management Assistant for Marketing Communication{" "}
                </span>
                <small>SalesMachine GmbH</small>
                <small>09/2015 - 07/2018</small>
                <small>
                  Web development with CMS' like Typo3 and Wordpress, customer
                  consulting, organizing and supervising of website- and
                  shop-projects.
                </small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
