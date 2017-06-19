import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const Component = ({ className, ...props }) => (
  <div className={classNames("GenericComponent", className)}>
    {Object.keys(props).map(key => {
      if (typeof props[key] === "object") {
        return <div className="GenericComponent--sub" {...{ key }} >
          {key}: <Component {...props[key]} />
        </div>;
      }
      return <div {...{ key }} >{key}: {props[key]}</div>;
    }
    )}
  </div>
);

Component.propTypes = {
  className: PropTypes.string
};

export default Component;
