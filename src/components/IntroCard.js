import React, { Component } from "react";
import foodpic from "../img/food.JPG";

import { Button, Card, Container, Row, Col } from "react-bootstrap";
/*
How each slide about me will be present
*/

function IntroCard(props) {
  return (
    <Container id="intro-content">
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

    /*
    <div>
      <Card>
        <Card.Img
          id="introCard"
          className=" blurb card-img-top"
          variant="top"
          src={foodpic}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="primary">Explore</Button>
        </Card.Body>
      </Card>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
    </div>
    */
  );
}
export default IntroCard;
