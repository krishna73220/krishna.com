import React from "react";

function Portfolio({ portfolio: { id, name, category, image, slug } }) {
  return (
    <a href={`works/${id}/${slug}`}>
      <div className="portfolio-item">
        <div className="details">
          <h4 className="title">{name}</h4>
          <span className="term">{category.join(",  ")}</span>
        </div>
        <span className="plus-icon">+</span>
        <div className="thumb">
          <img className="img-thumbnail" src={image} alt={name} />
          <div className="mask"></div>
        </div>
      </div>
    </a>
  );
}

export default Portfolio;
