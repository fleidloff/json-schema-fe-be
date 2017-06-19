import React from "react";

const Component = (props) => (
  <div className="GenericComponent">
    {Object.keys(props).map(key => (
      <div {...{ key }} >{key}: {props[key]}</div>
    ))}
  </div>
);

export default Component;
