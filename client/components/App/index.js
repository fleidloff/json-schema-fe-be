import "./style.less";

import React from "react";
import PersonAdd from "../Person/PersonAdd";
import PersonList from "../Person/PersonList";

export default () => (
  <div>
    <a href="https://github.com/mozilla-services/react-jsonschema-form">
      https://github.com/mozilla-services/react-jsonschema-form
    </a>
    <PersonAdd />
    <PersonList />
  </div>
);
