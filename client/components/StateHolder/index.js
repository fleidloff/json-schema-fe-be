import React from "react";
import PropTypes from "prop-types";

export default class StateHolder extends React.Component {
  state = {};

  render() {
    return this.props.onRender({
      state: this.state,
      setState: this.setState.bind(this)
    });
  }
}

StateHolder.propTypes = {
  onRender: PropTypes.func.isRequired
};
