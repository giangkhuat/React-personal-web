import React, { Component } from "react";
import profilepic from "../img/Giang.JPG";
import { Container, Row, Col } from "react-bootstrap";
import Social from "./Social";
import IntroCard from "../components/IntroCard";
import Carousel from "../components/Carousel";
import { SliderIntro } from "../components/SliderIntro";

function About() {
  /*
      <Container>
        <Row className="justify-content">
          <Col className="blurb" md={6}>
            <h2>About me</h2>
            <p>
              I am from Hanoi, Vietnam. I major in Computer Science in a US
              college, but I do not call myself a computer scientist. Why ?
              Because I think to define is to limit . I care about my family, my
              dog, my health and my friends. I did not use <em>love</em> ?
              Because I am Asian... Just kidding. Love has so many emotions that
              I believe words can't describe.
            </p>
          </Col>
          <Col className="blurb" md={6}>
            <img className="img-fluid" src={profilepic}></img>
          </Col>
        </Row>
        <Row className="justify-content">
          <Col md={6}>
            <img className="img-fluid" src={foodpic}></img>
          </Col>
          <Col md={6}>
            <h2>Cooking</h2>
            <p>
              I did not actually start cooking until I came to the US when I was
              17. To me, cooking takes courage and commitment. Why ? Because I
              need to have courage to give myself a second chance to try again
              when I fail and no one is around to comfort me (Btw I like sharing
              my food with people so I will not get fat alone) I also do not
              often record the amount I put in, which is probably I fail more
              than usual, but thanks to that I have had many more discoveries :D
            </p>
          </Col>
        </Row>
      </Container>
      */
  return (
    <div className="condiv" id="content">
      <Carousel inputText={SliderIntro} />
    </div>
  );
}

export default About;
