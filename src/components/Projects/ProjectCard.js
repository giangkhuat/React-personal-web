import React, { Component } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import './project.scss'

function ProjectCard(props) {
  return (
      /*
    <Container>
      <Row className="justify-content">
        <Col className="blurb" md={6}>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </Col>
        <Col className="blurb" md={6}>
          <img className="img-fluid" src={props.imgSrc}></img>
        </Col>
      </Row>
    </Container>
*/
    
    <div>
      <Card>
        <Card.Img
          className="blurb card-img-top"
          id="project-card"
          variant="top"
          src={props.imgSrc}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="primary">Explore</Button>
        </Card.Body>
      </Card>
      <p>
        
      </p>
    </div>
    
  );
}
export default ProjectCard;
