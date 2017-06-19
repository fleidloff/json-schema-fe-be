import React from "react";
import _omit from "lodash/omit";


export default function withoutProps(...omit) {
  return (Component) => (props) => {
    return <Component {..._omit(props, omit)} />;
  };
}

