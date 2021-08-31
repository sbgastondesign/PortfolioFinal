import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import battleship from '../assets/battleship.png';
import budget from '../assets/transaction2.png';
import fitness from '../assets/fitness-tracker.png';
import schedule from '../assets/scheduler.png';

// import ProjectCard from "./ProjectCards";
import '../styles/Project.css';
// By importing the Section.css file, it is added to the DOM whenever this component loads
// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding
// We use JSX curly braces to evaluate the style object on the JSX tag


function Project() {
    return (
        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <Project
                            img src={schedule} className="projectImage"
                            title="Work Scheduler"
                            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
                            link="https://sbgastondesign.github.io/WorkDayScheduler_Homework_5/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <Project
                            img src={battleship} className="projectImage"
                            title="Battleship"
                            description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
                            link="https://sbgastondesign.github.io/battleshipproject/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <Project
                            img src={budget} className="projectImage"
                            title="Budget Tracker"
                            description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
                            link="https://sbgastondesign.github.io/BudgetTracker/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <Project
                            img src={fitness} className="projectImage"
                            title="Fitness Tracker"
                            description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
                            link="https://sbgastondesign.github.io/Fitness-Tracker/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Project;