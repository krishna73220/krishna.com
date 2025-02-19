import React from "react";
import TrackVisibility from "react-on-screen";
import Skill from "../Items/Skill";

const skillData = {
  skillContent:
    "I am a passionate web developer with expertise in modern web technologies and frameworks. My goal is to create visually appealing and highly functional websites. Below are my core technical skills:",
  progressData: [
    {
      id: 1,
      name: "HTML & CSS",
      percentage: 96,
    },
    {
      id: 2,
      name: "javascript",
      percentage: 92,
    },
    {
      id: 3,
      name: "jQuery",
      percentage: 80,
    },
    {
      id: 4,
      name: "react js",
      percentage: 80,
    },
    {
      id: 5,
      name: "Wordpress",
      percentage: 88,
    },
    {
      id: 5,
      name: "MS Office",
      percentage: 80,
    }    
  ],
};

function Skills() {
  return (
    <>
      <p className="mb-0">{skillData.skillContent}</p>
      <div className="mt-5">
        <div className="row -mt-50">
          {skillData.progressData.map((progress) => (
            <div className="col-md-6 mt-50" key={progress.id}>
              <TrackVisibility once>
                <Skill progress={progress} />
              </TrackVisibility>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;
