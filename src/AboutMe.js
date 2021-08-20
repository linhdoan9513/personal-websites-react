import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutMe = () => {
  return (
    <article className="landing-page">
      <Container fluid>
        <Row>
          <Col lg={{ span: 4 }}>
            <div className="landing-page-content">
              <div className="welcome">
                <h1>Hi There 👋, I'm</h1>
                <h2>
                  linh<span>.</span>
                </h2>
              </div>

              <button className="contact">Get In Touch</button>
            </div>
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default AboutMe;
