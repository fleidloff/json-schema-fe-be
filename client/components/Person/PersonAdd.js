import "./style.less";

import React from "react";
import Form from "react-jsonschema-form";
import { schema, uiSchema } from "../../../schema/Person.schema.js";
import { createPerson } from "./backend";

export default class extends React.Component {
  state = { formData: {} };

  createPerson = (ev) => {
    this.setState({ formData: {} });
    createPerson(ev);
  };

  updatePerson = ({ formData }) => {
    this.setState({ formData });
  };

  render() {
    return (

      <div>
        <div className="Person-add">
          <Form
            formData={this.state.formData}
            schema={schema}
            uiSchema={uiSchema}
            onChange={this.updatePerson}
            onSubmit={this.createPerson}
            onError={(ev) => console.log("errors", ev)}
          />
        </div>
      </div>
    );
  }
}
