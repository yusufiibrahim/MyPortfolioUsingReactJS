import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

// assets
import Profile from "../../assets/img/profile/yusuf.jpg";

// css
import "./about.css";

const about = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row>
            {/* Profile picture */}
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2">
                <Image
                  className="profile justify-content-end"
                  src={Profile}
                  alt="profile"
                  thumbnail
                  fluid
                />
              </Row>
            </Col>
            {/* About me description */}
            <Col xs={12} md={6}>
              <Row className="align-items-start pt-2 my-details rounded">
                {/* description  */}
                Hi there! I am <strong>&nbsp;Muhammad Yusuf Ibrahim</strong>
                <br />A graduate from the PLN Institute of Technology majoring
                in Informatics Engineering in 2020. Im born and brought up in
                Indonesia.
                <br />
                I have internship experience at Hukumonline.com as Software
                Developer for 3 months, during my internship there I helped
                develop Hukumonline website using NextJS. I was assigned such as
                creating coachmark feature for Pusat Data page and coachmark
                feature for Profile Settings page.
                <br />I can work as team and I love learning about new
                technologies, what problems are they solving and How can I use
                them to build better and scalable products.
                <br /> <br />
                {/* Buttons */}
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="#LinkResume"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://github.com/yusufiibrahim"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-dark">
                        Github
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/muhammad-yusuf-ibrahim-6b1719171/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default about;
