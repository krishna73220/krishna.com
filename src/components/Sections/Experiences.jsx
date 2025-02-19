import React from "react";
import Experience from "../Items/Experience";

const experiencesData = [
  {
    id: 1,
    // year: "2019 - Present",
    degree: "Master's of Computer Application",
    content:
      "Completed a Master's of Computer Application (MCA), specializing in software development, computer networks, and database management. Gained advanced technical skills to design, implement, and manage complex software applications across various platforms.",
  },
  {
    id: 2,
    // year: "2018 - 2015",
    degree: "Bachelor’s of Education (Mathematics)",
    content:
      "Completed a Bachelor’s of Education (Mathematics), gaining in-depth knowledge of mathematical concepts and pedagogy. Trained to effectively teach mathematics at various educational levels, focusing on both theory and practical application.",
  },
  {
    id: 3,
    // year: "2016 - 2019",
    degree: "Bachelor’s of Science (Mathematics)",
    content:
      "Completed a Bachelor’s of Science (Mathematics), acquiring a strong foundation in advanced mathematical theories, principles, and problem-solving techniques. Equipped with the skills to analyze and apply mathematical concepts in diverse fields of study.",
  },
];

function Experiences() {
  return (
    <div className="timeline">
      {experiencesData.map((experience) => (
        <Experience experience={experience} key={experience.id} />
      ))}
      <span className="timeline-line"></span>
    </div>
  );
}

export default Experiences;
