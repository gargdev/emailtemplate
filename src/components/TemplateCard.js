import React from "react";
import "../styles/templatecard.css";

function TemplateCard({ template }) {
  return (
    <div className="card">
      <img src={template.image} className="card-img-top" alt={template.title} />
      <div className="card-body">
        <h5 className="card-title">{template.title}</h5>
        <p>{template.description}</p>
      </div>
    </div>
  );
}

export default TemplateCard;
