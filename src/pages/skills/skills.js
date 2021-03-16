import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

// css
import "./skills.css";

// skills data
import { skillsData } from "./skillsData";

const skills = () => {
  return (
    <div id="skills" className="pt-3 pb-3">
      <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
      <CardDeck>
        <Row className="d-flex justify-content-around">
          {console.log(skillsData)}
          {/* Frontend */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center card-title">
                  Frontend
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skillsData.frontend.map((skillData, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skillData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skillData.imgSrc}
                          alt={skillData.imgAltText}
                          rounded
                          className="image-style m-1"
                        />
                        {skillData.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages, Hosting Platforms & Version Control*/}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Programming Languages
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skillsData.programmingLanguages.map((skillData, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skillData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skillData.imgSrc}
                          alt={skillData.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skillData.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Hosting Platforms */}
            <Card className="focus mt-2 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Hosting Platforms
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skillsData.hostingPlatforms.map((skillData, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skillData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skillData.imgSrc}
                          alt={skillData.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skillData.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Version Control */}
            <Card className="focus mt-2 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Version Control
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skillsData.versionControl.map((skillData, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skillData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skillData.imgSrc}
                          alt={skillData.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skillData.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Operating Systems & Databases */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Operating Systems
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skillsData.operatingSystems.map((skillData, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skillData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skillData.imgSrc}
                          alt={skillData.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skillData.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Databases
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skillsData.databases.map((skillData, index) => (
                    <span className="p-2" key={index}>
                      <a
                        className="text-dark text-decoration-none"
                        href={skillData.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={skillData.imgSrc}
                          alt={skillData.imgAltText}
                          rounded
                          className="image-style m-1"
                        ></Image>{" "}
                        {skillData.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default skills;
