import "./style.less";

import React from "react";
import Form from "react-jsonschema-form";
import { schema } from "../../../schema/Person.schema.js";
import { createPerson } from "./backend";

export default () => (
  <div>
    <div>Hello, Form</div>
    <Form schema={schema}
      onChange={(ev) => console.log("changed", ev)}
      onSubmit={createPerson}
      onError={(ev) => console.log("errors", ev)} />
  </div>
);
