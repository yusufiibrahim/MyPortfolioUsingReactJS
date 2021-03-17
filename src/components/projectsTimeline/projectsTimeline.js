import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

// Projects Image
import Img_TodoList from "../../assets/img/projects/todo-list.png";
import Img_FoodSearchingApp from "../../assets/img/projects/food-searching-app.png";
import Img_CoachmarkPusatData from "../../assets/img/projects/coachmark-pusat-data.png";
import Img_CoachmarkAccount from "../../assets/img/projects/coachmark-account.png";

// Skills
import LOGO_REACT from "../../assets/img/skills/react.svg";
import LOGO_HTML5 from "../../assets/img/skills/html-5.svg";
import LOGO_CSS3 from "../../assets/img/skills/css3.svg";
import LOGO_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import LOGO_GIT from "../../assets/img/skills/github-api.svg";
import LOGO_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";

// Css
import "./projectsTimeline.css";

const projectsTimeline = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          {/* TODO-LIST */}
          <ImageEvent
            date="28/09/2020"
            className="text-center"
            text="ReactJS To-Do-List App"
            src={Img_TodoList}
            alt="React ToDoList App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a Todo App created
                        with React that keeps a track of your Todos
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Keeps track of your Todos</li>
                          <li>Powered by React</li>
                          <li>Responsive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={LOGO_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={LOGO_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={LOGO_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              ReactJS
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="#" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/yusufiibrahim/react-todo-list"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* FOOD-SEARCHING-APP */}
          <ImageEvent
            date="04/10/2020"
            className="text-center"
            text="Food-Searching-App with ReactJS"
            src={Img_FoodSearchingApp}
            alt="Food Searching App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This application is useful
                        for searching for recipes for food or drinks. This
                        application was created using ReactJS and using Edamam
                        API
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Can search for food or beverage recipes listed in
                            Edamam API
                          </li>
                          <li>Real-time using Edamam API</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={LOGO_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={LOGO_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={LOGO_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              ReactJS
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="#" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/yusufiibrahim/react-food-searching-app"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Coachmark Pusat Data */}
          <ImageEvent
            date="23/11/2020"
            className="text-center"
            text="Coachmark feature for Pusat Data page on the Hukumonline.com website"
            src={Img_CoachmarkPusatData}
            alt="Coachmark Pusat Data"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This coachmark feature is
                        intended to guide visitors or customers of Hukumonline
                        products to make it easier to access the features on
                        Pusat Data page.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Describes the document category menu</li>
                          <li>
                            Inform that the central regulation can be seen
                            through a collection of industrial sectors and legal
                            sectors
                          </li>
                          <li>
                            Informs that to view the sub-categories of rules it
                            is only necessary to click on the folder in the
                            rules category
                          </li>
                          <li>
                            Informs the number of regulations in Indonesian and
                            English in each category
                          </li>
                          <li>Informs the latest regulatory recommendations</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={LOGO_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={LOGO_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={LOGO_BOOTSTRAP4}
                                alt="BOOTSTRAP4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              BOOTSTRAP4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={LOGO_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              ReactJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/207px-Nextjs-logo.svg.png"
                                alt="NextJS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              NextJS
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://hukumonline.com/pusatdata/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton>
                <UrlButton href="#" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* COACHMARK PROFILE SETTINGS PAGE */}
          <ImageEvent
            date="25/01/2021"
            className="text-center"
            text="Coachmark feature for Profile Settings page on the Hukumonline.com website"
            src={Img_CoachmarkAccount}
            alt="Coachmark Profile Settings"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This coachmark feature is
                        intended to guide visitors or customers of Hukumonline
                        products to make it easier to access the features on
                        Profile Settings page.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>
                            Inform that every customer can manage personal data
                            through the profile menu
                          </li>
                          <li>
                            Inform that each customer can set a password and
                            social media accounts
                          </li>
                          <li>
                            Inform that each customer can set product
                            preferences
                          </li>
                          <li>
                            Inform each customer about the type of package taken
                            and the active period of the package
                          </li>
                          <li>
                            Inform each customer about the legal product
                            purchase transaction list page
                          </li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={LOGO_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={LOGO_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={LOGO_BOOTSTRAP4}
                                alt="BOOTSTRAP4"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              BOOTSTRAP4
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={LOGO_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              ReactJS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/207px-Nextjs-logo.svg.png"
                                alt="NextJS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              NextJS
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton href="#" target="_blank">
                  SEE LIVE
                </UrlButton>
                <UrlButton href="#" target="_blank">
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default projectsTimeline;
