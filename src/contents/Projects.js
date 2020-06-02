import React, { Component } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import profilepic from "../img/Giang.JPG";
import foodpic from "../img/food.JPG";

function Projects() {
  return (
    <div className="condiv" id="content">
      <Container>
        <Row className="justify-content">
          <Col className="blurb align-items-stretch" md={12} lg={4}>
            <Card
              containerStyle={{
                borderWidth: 5,
                borderColor: "transparent",
                elevation: 2.9,
              }}
            >
              <Card.Img className="card-img-top" variant="top" src={foodpic} />
              <Card.Body>
                <Card.Title>Travel Journal</Card.Title>
                <Card.Text>
                  A Node.js application for campers to review campgrounds
                </Card.Text>
                <Button className="btn btn-outline-success btn-sm">
                  Explore
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="blurb align-items-stretch" md={12} lg={4}>
            <Card>
              <Card.Img className="card-img-top" variant="top" src={foodpic} />
              <Card.Body>
                <Card.Title>Travel Journal</Card.Title>
                <Card.Text>
                  A Node.js application for campers to review campgrounds
                </Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="blurb align-items-stretch" md={12} lg={4}>
            <Card>
              <Card.Img className="card-img-top" variant="top" src={foodpic} />
              <Card.Body>
                <Card.Title>Travel Journal</Card.Title>
                <Card.Text>
                  A Node.js application for campers to review campgrounds
                </Card.Text>
                <Button variant="primary">Explore</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
