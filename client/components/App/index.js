import "./style.less";

import React from "react";
import PersonAdd from "../Person/PersonAdd";
import PersonList from "../Person/PersonList";
import StateHolder from "../StateHolder";

export default () => (
  <div>
    <a href="https://github.com/mozilla-services/react-jsonschema-form">
      https://github.com/mozilla-services/react-jsonschema-form
    </a>
    <StateHolder onRender={({ state, setState }) => (
      <div>
        <PersonAdd { ...{ state, setState }} />
        <PersonList { ...{ state, setState }} />
      </div>
    )}/>
  </div>
);
