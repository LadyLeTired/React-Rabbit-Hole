import React from "react";
import teaSet from "../../public/images/teaset.jpg";

const TeaOfChoice = props => {
  return (
    <div>
      <h1>Voila! Your Tea!</h1>
      <h3>{props.tea}</h3>
      <img src={teaSet} />
      <p>Come again, {props.name}!</p>
    </div>
  );
};

export default TeaOfChoice;
