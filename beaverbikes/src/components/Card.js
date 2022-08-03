import React from "react";

const Card = ({icon, title, description}) => {
  return (
    <div className="card-container">
      <i className={icon} />
      <h3>{title}</h3>
      <p>
       {description}
      </p>
    </div>
  );
};

export default Card;
