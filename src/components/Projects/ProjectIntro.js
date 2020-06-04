import React, { Component } from "react";
import foodpic from "../About/food.JPG"
import ProjectCard from "./ProjectCard"
import Camp from "./camp.png"
import cooking from "./cookingeasy.png"

export const ProjectIntro = [
  <ProjectCard
    title="Travel Journal"
    text="A Express app that allows campers to share and review campgrounds"
    imgSrc={Camp}
  />,
  <ProjectCard
    title="CookingEasy"
    text="I did not actually start cooking until I came to the US when I was
        17. To me, cooking takes courage and commitment. Why ? Because I
        need to have courage to give myself a second chance to try again
        when I fail and no one is around to comfort me (Btw I like sharing
        my food with people so I will not get fat alone) I also do not
        often record the amount I put in, which is probably I fail more
        than usual, but thanks to that I have had many more discoveries :D"
    imgSrc={cooking}
  />,
  <ProjectCard
    title="Reading"
    imgSrc={foodpic}
    text="“I want a dyke for president. I want a person with AIDS for president and I want a fag for vice president and I want someone with no health insurance and I want someone who grew up in a place where the earth is so saturated with toxic waste that they didn’t have a choice about getting leukemia. I want a president that had an abortion at sixteen and I want a candidate who isn’t the lesser of two evils and I want a president who lost their last lover to AIDS, who still sees that in their eyes every time they lay down to rest, who held their lover in their arms and knew they were dying. I want a president with no air-conditioning, a president who has stood in line at the clinic, at the DMV, at the welfare office, and has been unemployed and laid off and sexually harassed and gaybashed and deported....” ― Zoe Leonard"
  />,
];
