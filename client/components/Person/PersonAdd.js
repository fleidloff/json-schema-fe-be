import "./style.less";

import React from "react";
import PropTypes from "prop-types";
import Form from "react-jsonschema-form";
import { schema, uiSchema } from "../../../schema/Person.schema.js";
import { createPerson } from "./backend";
import autobind from "autobind";

export default class PersonAdd extends React.Component {
  @autobind
  createPerson(ev) {
    createPerson(ev).then(({ data }) => {
      this.props.setState((prevState) => ({
        persons: [...prevState.persons, data ]
      }));
    });
  }

  render() {
    return (
      <div className="Person-add">
        <Form
          {...{ schema, uiSchema }}
          onSubmit={withRemoveErrors(this.createPerson)}
        />
      </div>
    );
  }
}

PersonAdd.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired
};

function withRemoveErrors(func) {
  return (ev) => {
    ev.errors = [];
    ev.errorSchema = {};
    return func(ev);
  };
}

