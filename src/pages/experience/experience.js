import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import LOGO_MARKPLUS from "../../assets/img/experience/markplus-logo.png";

// css
import "./experience.css";

const experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      {/* Hukumonline */}
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src="https://static.hukumonline.com/frontend/skins/kaze/default/img/hukumonline-logo.png"
                  alt="Hukumonline Logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Software Developer (Internship)
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Frontend Developer
                    </strong>
                    <br />
                    <strong>Technology:</strong> Javascript &amp; ReactJS/NextJS
                    <br />
                    <strong>Duration:</strong> November 2020 - February 2021
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Developed &amp; enhanced</strong> new
                        user-facing features using NextJS
                      </li>
                      <li>
                        <strong>Collaborate</strong> with back-end developers
                        and web designers to improve usability
                      </li>
                      <li>
                        <strong>Created</strong> a Coachmark feature for Pusat
                        Data page &amp; Profile Settings page
                      </li>
                      <li>
                        <strong>Agile Scrum methodology</strong>
                      </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      {/* Markplus */}
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={LOGO_MARKPLUS}
                  alt="Markplus Logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Assistant Trainer
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Assistant Trainer
                    </strong>
                    <br />
                    <strong>Technology:</strong> Microsoft SQL 2019
                    <br />
                    <strong>Duration:</strong> October 2020
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Assisting trainers</strong> in explaining
                        learning materials about Microsoft SQL 2019 to
                        participants who do not understand the learning material
                        described by the trainer
                      </li>
                      <li>
                        <strong>Assist</strong> training participants in fixing
                        SQL syntax errors in writing during the training
                      </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      {/* CKB */}
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src="https://www.ckb.co.id/site/uploads/logo/5a67db7e72c82-logo.png"
                  alt="Markplus Logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Business Process Improvement (Internship)
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Helpdesk Business Process Improvement
                    </strong>
                    <br />
                    <strong>Technology:</strong> Microsoft Excel &amp; Photoshop
                    <br />
                    <strong>Duration:</strong> January 2020 - April 2020
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Follow up </strong> to the Ramco team if a
                        related user experiences an error when using the ERP
                        Logistics system
                      </li>
                      <li>
                        <strong>Provided</strong> feedback to related users if
                        the Ramco team has handled issues that occur in the ERP
                        Logistics system
                      </li>
                      <li>
                        <strong>Recapitulate </strong> issues that occur in the
                        ERP Logistics system
                      </li>
                      <li>
                        <strong>Created</strong> a newsletter design for the
                        Business Process Improvement team
                      </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      {/* IT-PLN */}
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src="https://itpln.ac.id/assets/front-end/img/logo/sttpln1.png"
                  alt="Markplus Logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Opensource Laboratory Assistant
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Laboratory Assistant
                    </strong>
                    <br />
                    <strong>Technology:</strong> Linux
                    <br />
                    <strong>Duration:</strong> September 2018 - December 2019
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li>
                        <strong>Assisting</strong> students learning basic of
                        Linux
                      </li>
                      <li>
                        <strong>Maintain</strong> Laboratory
                      </li>
                      <li>
                        <strong>Annually</strong> cleaning up the hardwares
                      </li>
                      <li>
                        <strong>Maintain </strong> computer performance
                      </li>
                      <li>
                        <strong>Set up </strong> LAN connection and local web
                        server
                      </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default experience;
