import PropTypes from "prop-types";

export default function toPropTypes(schema) {
  if (schema.type !== "object" && typeof schema.properties !== "object") {
    return {};
  }

  return Object.keys(schema.properties).reduce((memo, key) => {
    memo[key] = getPropType(schema.properties[key], schema.required.includes(key));
    return memo;
  }, {});
}


function getPropType(property, required) {
  let type;

  switch(property.type) {
  case "string":
    type = PropTypes.string;
    break;
  case "integer":
    type = PropTypes.number;
    break;
  default:
    type = PropTypes.any;
    break;
  }

  return required ? type.isRequired : type;
}
