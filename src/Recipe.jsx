import React, { Component } from "react";

const Recipe = props => {
  return (
    <div className="style">
      <h1>{props.title}</h1>
      <ul>
        {props.ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{props.calories}</p>
      <img src={props.image} alt="" className="image" />
    </div>
  );
};

export default Recipe;
