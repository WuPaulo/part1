import React from "react";

const Part = (props) => {
  return (
    <div>
      <p>
        {props.parts} {props.exercises}
      </p>
    </div>
  );
};

export default Part;
