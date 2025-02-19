import React from "react";

function Service({ service: { name, content, icon } }) {
  return (
    <div className="service-item text-center">
      <i className={`${icon} icon-simple`}></i>
      <h4 className="my-3">{name}</h4>
      <p className="mb-0 text-justify">{content}</p>
    </div>
  );
}

export default Service;
