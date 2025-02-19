import React from "react";
import Service from "../Items/Service";

const servicesData = [
  {
    id: 1,
    name: "Development",
    content: "Building modern, responsive, and high-performance websites using the latest technologies to ensure seamless functionality and fast load times across devices.",
    icon: "icon-globe",
  },
  {
    id: 2,
    name: "UI/UX Design",
    content: "Crafting visually appealing, user-centric, and seamless UI/UX designs that not only attract users but also provide them with an intuitive and engaging experience.",
    icon: "icon-chemistry",
  },
  {
    id: 3,
    name: "Support",
    content: "Providing ongoing website maintenance, troubleshooting, and technical support to ensure the site’s smooth operation, performance, and timely updates.",
    icon: "icon-bubbles",
  }
  
];

function Services() {
  return (
    <div className="row -mt-20">
      {servicesData.map((service) => (
        <div className="col-md-4 col-sm-6 mt-20" key={service.id}>
          <Service className='text-justify' service={service} />
        </div>
      ))}
    </div>
  );
}

export default Services;
