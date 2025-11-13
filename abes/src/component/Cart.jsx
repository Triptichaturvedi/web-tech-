import React from "react";
import "./Cart.css";

function Card(probs) {
  return (
    <div id="card">
      <h1>{probs.name}</h1>
      <img
        src="https://clipart-library.com/images/rcLozaE6i.jpg"
        alt=""
        height={100}
        width={100}
      />
      <h3>{probs.price}</h3>
    </div>
  );
}

export default Card;