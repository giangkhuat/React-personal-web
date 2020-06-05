import React, { Component } from "react";
import foodpic from "../About/food.JPG";
import ProjectCard from "./ProjectCard";
import Camp from "./camp.png";
import cooking from "./cookingeasy.png";

export const ProjectIntro = [
  <ProjectCard
    title="Travel Journal"
    text="A Express app that allows campers to share and review campgrounds"
    imgSrc={Camp}
  />,
  <ProjectCard
    title="CookingEasy"
    text="A Android application to deliver mealkit boxes"
    imgSrc={cooking}
  />,
  <ProjectCard
    title="Reading"
    imgSrc={foodpic}
    text="“I want a dyke for president. I want a person with AIDS for president and I want a fag for vice president and I want someone with no health insurance and I want someone who grew up in a place where the earth is so saturated with toxic waste that they didn’t have a choice about getting leukemia. I want a president that had an abortion at sixteen and I want a candidate who isn’t the lesser of two evils and I want a president who lost their last lover to AIDS, who still sees that in their eyes every time they lay down to rest, who held their lover in their arms and knew they were dying. I want a president with no air-conditioning, a president who has stood in line at the clinic, at the DMV, at the welfare office, and has been unemployed and laid off and sexually harassed and gaybashed and deported....” ― Zoe Leonard"
  />,
];
