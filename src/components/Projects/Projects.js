import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import work1 from "../../Assets/Projects/work1.jpeg";
import work2 from "../../Assets/Projects/work2.jpeg";
import work3 from "../../Assets/Projects/work3.jpeg";
import work4 from "../../Assets/Projects/work4.jpeg";
import work5 from "../../Assets/Projects/work5.jpeg";
import work6 from "../../Assets/Projects/work6.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work1}
              isBlog={false}
              title="Learning Gateway"
              description="Learning Gateway is an application to promote online self learning through tasks and online study groups which can help in creating a healthy environment and help in boosting the morale of students."
              link="https://github.com/arnav1776/Code-Warriors"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work2}
              isBlog={false}
              title="Hogwarts Web App"
              description="This project is made by Harry Potter lovers for Harry Potter lovers. The goal of this project is to test how deep is your knowledge of the Harry Potter Universe. You will be given a series of questions, the more correct answers you answer, the higher your score will be. Do you believe you know the Harry Potter universe?"
              link="https://github.com/arnav1776/Hogwarts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work3}
              isBlog={false}
              title="TicTacToe"
              description="A Simple TicTacToe Game made in Flutter with both single and multiplayer options."
              link="https://github.com/arnav1776/TicTacToe_app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work4}
              isBlog={false}
              title="Whatsapp Clone"
              description="Whatsapp UI Clone made with the help of Flutter."
              link="https://github.com/arnav1776/Whatsapp_clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work5}
              isBlog={false}
              title="Food Delivery Website"
              description="A Food Delivery Website for ordering meals and catering services."
              link="https://github.com/arnav1776/Food_Delivery_website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work6}
              isBlog={false}
              title="Menu_Program"
              description="Menu driven program in python using RHEL-8."
              link="https://github.com/arnav1776/Menu_program"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
