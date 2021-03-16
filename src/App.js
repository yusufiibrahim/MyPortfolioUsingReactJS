import React from "react";
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";

// components
import MyNavbar from "./components/myNavbar/myNavbar";
import MyCarousel from "./components/myCarousel/myCarousel";
import TitleMessage from "./components/titleMessage/titleMessage";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";

// css
import "./App.css";

// image
import backgroundImg from "./assets/img/parallex/background.webp";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />

      {/* about me section */}
      <div>
        <Parallax
          blur={{ min: -500, max: 500 }}
          bgImage={backgroundImg}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={1000} left>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>

      {/* skills section */}

      <div>
        <div>
          <Container className="container-box rounded">
            <Fade duration={1000} right>
              <Skills />
            </Fade>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default App;
