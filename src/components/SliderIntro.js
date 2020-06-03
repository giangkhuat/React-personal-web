import React, { Component } from "react";
import "./slider.scss";
import IntroCard from "./IntroCard";
import foodpic from "../img/food.JPG";
import profilepic from "../img/Giang.JPG";
import birdpic from "../img/bird.JPG";

export const SliderIntro = [
  <IntroCard
    title="About me"
    text="I am from Hanoi, Vietnam. I major in Computer Science in a US
        college, but I do not call myself a computer scientist. Why ?
        Because I think to define is to limit . I care about my family, my
        dog, my health and my friends. I did not use <em>love</em> ?
        Because I am Asian... Just kidding. Love has so many emotions that
        I believe words can't describe."
    imgSrc={profilepic}
  />,
  <IntroCard
    title="Cooking"
    text="I did not actually start cooking until I came to the US when I was
        17. To me, cooking takes courage and commitment. Why ? Because I
        need to have courage to give myself a second chance to try again
        when I fail and no one is around to comfort me (Btw I like sharing
        my food with people so I will not get fat alone) I also do not
        often record the amount I put in, which is probably I fail more
        than usual, but thanks to that I have had many more discoveries :D"
    imgSrc={foodpic}
  />,
  <IntroCard
    title="Reading"
    imgSrc={birdpic}
    text="“I want a dyke for president. I want a person with AIDS for president and I want a fag for vice president and I want someone with no health insurance and I want someone who grew up in a place where the earth is so saturated with toxic waste that they didn’t have a choice about getting leukemia. I want a president that had an abortion at sixteen and I want a candidate who isn’t the lesser of two evils and I want a president who lost their last lover to AIDS, who still sees that in their eyes every time they lay down to rest, who held their lover in their arms and knew they were dying. I want a president with no air-conditioning, a president who has stood in line at the clinic, at the DMV, at the welfare office, and has been unemployed and laid off and sexually harassed and gaybashed and deported....” ― Zoe Leonard"
  />,
];
