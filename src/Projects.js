import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Projects = () => {
  return (
    <article>
      <Container fluid="true">
        <h2>Projects.</h2>
        <Row>
          <Col lg={{ span: 8 }}>
            <div className="project-image">
              <img src="./assets/cryptotracker.png" alt="cryptotracker" />
            </div>
          </Col>
          <Col lg={{ span: 4 }}>
            <p className="project-header">Featured Project</p>
            <h4 className="project-title">
              {/* <a href="#">Cryptotracker</a> */}
            </h4>
            <div className="project-content">
              <div className="project-description">
                <p>
                  Doan Thuy Linh Doan Thuy Linh Doan Thuy Linh Doan Thuy Linh
                </p>
              </div>
              <ul className="project-tech-list">
                <li>React</li>
                <li>Chart.js</li>
                <li>Coin Gecko API</li>
              </ul>
              <div className="project-links">
                {/* <a href=""></a>
                <a href=""></a> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default Projects;
