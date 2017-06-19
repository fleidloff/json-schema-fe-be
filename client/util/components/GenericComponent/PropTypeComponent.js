import React from "react";
import _get from "lodash/get";

const PropTypeComponent = (schema) => (props) => (
  <div className="GenericComponent">
    {Object.keys(props).map(key => (
      <div key={key}>{toTitle(schema, key)}: {props[key]}</div>
    ))}
  </div>
);

function toTitle(schema, key) {
  const result = _get(schema, `properties.${key}.title`, key);
  if (schema.required.includes(key)) {
    return <b>{result}</b>;
  }
  return result;
}

export default PropTypeComponent;
