import React from "react";
import _get from "lodash/get";
import GenericComponent from "./index";

const PropTypeComponent = (schema) => (props) => (
  <div className="GenericComponent">
    {Object.keys(props).map(key => (
      <div key={key}>{toTitle(schema, key)}: {format(schema, key, props[key])}</div>
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

function format(schema, key, value) {
  if (typeof _get(schema, `properties.${key}`) === "undefined") {
    return "FIELD DOES NOT EXIST IN JSON SCHEMA";
  }

  if (_get(schema, `properties.${key}.type`, "string") === "boolean") {
    return value ? "true" : "false";
  }

  if (_get(schema, `properties.${key}.type`, "string") === "object") {
    return <GenericComponent className="GenericComponent--sub" {...value}/>;
  }

  return value;
}

export default PropTypeComponent;
