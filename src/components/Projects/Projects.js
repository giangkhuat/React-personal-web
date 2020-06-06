import React, { Component } from "react";
import Carousel from "../Carousel/Carousel"
import {ProjectIntro }from "./ProjectIntro"

function Projects() {
       /*
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
      */
  return (
    <div className="condiv" id="content">
      <div id="project-carousel" >
      <Carousel inputText={ProjectIntro} />
    
      </div>
      
    </div>
  );
}

export default Projects;
