import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// css
import "./contact.css";

const contact = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            {/* email */}
            <div className="m-2">
              <a
                href="mailto:yusufflorineus@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-danger"
                  title="yusufflorineus@gmail.com"
                >
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            {/* linkedin */}
            <div className="m-2">
              <a
                href="https://www.linkedin.com/in/muhammad-yusuf-ibrahim-6b1719171/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-primary" title="Visit my LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            {/* github */}
            <div className="m-2">
              <a
                href="https://github.com/yusufiibrahim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> Github
                </Button>
              </a>
            </div>
            {/* instagram */}
            <div className="m-2">
              <a
                href="https://www.instagram.com/yusufiibrahim/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline-success"
                  title="My other projects"
                  id="instagram"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default contact;
