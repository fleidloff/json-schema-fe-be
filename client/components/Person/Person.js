import React from "react";
import { schema } from "../../../schema/Person.schema";
import toPropTypes from "../../util/jsonschema-to-proptypes";
import PropTypes from "prop-types";

const Person = ({ firstName, lastName, age, _id, onDelete }) => (
  <div className="Person">
    {firstName} {lastName} { age && ` (${age})`}
    <button onClick={() => onDelete(_id)}>delete</button>
  </div>
);

Person.propTypes = { ...toPropTypes(schema), _id: PropTypes.string.isRequired };

export default Person;
