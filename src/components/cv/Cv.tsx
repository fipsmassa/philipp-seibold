import React from "react";
import "./cv.css";
import Grid from "@mui/material/Grid";

export const Cv = () => {
  return (
    <section className="cv">
      <div className="container">
        <h2 className="container_heading">My CV</h2>
        <div className="card_wrap">
          <div className="card education_card">
            <div className="card_heading">
              <h3>Education</h3>
            </div>
            <div className="education">
              <div className="education_inner">
                <div className="education_logo">
                  <img src="/assets/bachelor.png" width="50" />
                </div>
                <div className="education_text">
                  <p>Bachelor 2018-2021</p>
                  <p>
                    Business Information Systems
                    <br />
                    Duale Hochschule Baden-Württemberg <br /> Final grade: 1.7
                  </p>
                </div>
              </div>
              <div className="education_inner">
                <div className="education_logo">
                  <img src="/assets/apprentice.png" width="50" />
                </div>
                <div className="education_text">
                  <p>Apprenticeship 2015-2018</p>
                  <p>
                    Management Assistant for Marketing Communicationmit with
                    additional qualification "Communications Management"
                    <br />
                    Johann-Friedrich-von-Cotta-Schule Stuttgart
                    <br />
                    Final Grade: 1.3
                  </p>
                </div>
              </div>
              <div className="education_inner">
                <div className="education_logo">
                  <img src="/assets/experience.png" width="50" />
                </div>
                <div className="education_text">
                  <p>Study 2014-2015</p>
                  <p>
                    Management Studies
                    <br />
                    University of Augsburg
                    <br />
                    No degree
                  </p>
                </div>
              </div>
              <div className="education_inner">
                <div className="education_logo">
                  <img src="/assets/hospital.png" width="50" />
                </div>
                <div className="education_text">
                  <p>Social Year 2013-2014</p>
                  <p>University Hospital Ulm</p>
                </div>
              </div>
              <div className="education_inner">
                <div className="education_logo">
                  <img src="/assets/school.png" width="50" />
                </div>
                <div className="education_text">
                  <p>School 2005-2013</p>
                  <p>
                    Final secondary-school exmaniations
                    <br />
                    Albert-Schweizer-Gymnasium Laichingen
                    <br />
                    Final grade: 2.9
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card experience_card">
            <div className="card_heading">
              <h3>Experience</h3>
            </div>
            <div className="experience">
              <div className="experience_inner">
                <div className="experience_logo">
                  <img src="/assets/s_payment.jpg" width="100" />
                </div>
                <div className="experience_text">
                  <p>Software Developer 2021-current @ S-Payment GmbH</p>
                  <p>
                    React development in a scrum based team with usage of
                    TypeScript, Redux, Axios, Keycloak, testing with Jest and
                    React Testing Library as well as component development with
                    Storybook. Furhtermore development, supervision and testing
                    of JEE inventory applications.
                  </p>
                </div>
              </div>
              <div className="experience_inner">
                <div className="experience_logo">
                  <img src="/assets/dsv.png" width="100" />
                </div>
                <div className="experience_text">
                  <p>
                    Dual Student Business Information Systems 2018-2021 @
                    Deutscher Sparkassenverlag GmbH
                  </p>
                  <p>
                    Training in different tools (Sonarqube, Spring), writing of
                    projects reports with practical appliance (focus on unit
                    testing at DSV Service GmbH, focus on microservices at the
                    payment division of the DSV Group), creation of the bachelor
                    thesis with a practical comparison between React, Angular
                    and Vue.js.
                  </p>
                </div>
              </div>
              <div className="experience_inner">
                <div className="experience_logo">
                  <img
                    src="/assets/salesmachine_logo.svg"
                    width="84"
                    className="dark_bg salesmachine_logo"
                  />
                </div>
                <div className="experience_text">
                  <p>
                    Apprentice Management Assistant for Marketing Communication
                    2015-2018 @ SalesMachine GmbH
                  </p>
                  <p>
                    Web development with CMS' like Typo3 and Wordpress, customer
                    consulting, organizing and supervising of website- and
                    shop-projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
