import React from "react";
import { schema } from "../../../schema/Person.schema";
import toPropTypes from "../../util/jsonschema-to-proptypes";
import PropTypes from "prop-types";
import PropTypeComponent from "../../util/components/GenericComponent/PropTypeComponent";
import withoutProps from "../../util/components/GenericComponent/withoutProps";

const GPerson = PropTypeComponent(schema);
GPerson.propTypes = { ...toPropTypes(schema) };

function withDelete(Component) {
  const WithDeleteComponent = ({ onDelete, _id, ...props }) => (
    <div className="GenericComponent--withDelete">
      <Component {...props} />
      <button onClick={() => onDelete(_id)}>delete</button>
    </div>
  );
  WithDeleteComponent.propTypes = {
    ...Component.propTypes,
    _id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  return WithDeleteComponent;
}

export default withDelete(withoutProps("__v")(GPerson));
