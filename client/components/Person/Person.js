import React from "react";
import { schema } from "../../../schema/Person.schema";
import toPropTypes from "../../util/jsonschema-to-proptypes";
import PropTypes from "prop-types";
import GComp from "../../util/components/GenericComponent";
import _omit from "lodash/omit";

const Person = ({ firstName, lastName, age, _id, onDelete }) => (
  <div className="Person">
    {firstName} {lastName} { age && ` (${age})`}
    <button onClick={() => onDelete(_id)}>delete</button>
  </div>
);
Person.propTypes = { ...toPropTypes(schema), _id: PropTypes.string.isRequired };

const GPerson = GComp;
GPerson.propTypes = { ...toPropTypes(schema), _id: PropTypes.string.isRequired };

function withoutProps(Component, ...omit) {
  return (props) => {
    return <Component {..._omit(props, omit)} />;
  };
}

function withDelete(Component) {
  const WithDeleteComponent = ({ onDelete, _id, ...props }) => (
    <div className="GenericComponent--withDelete">
      <Component {...props} />
      <button onClick={() => onDelete(_id)}>delete</button>
    </div>
  );
  WithDeleteComponent.propTypes = {
    ...toPropTypes(schema),
    _id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  return WithDeleteComponent;
}

export default withoutProps(withDelete(GPerson), "__v");
