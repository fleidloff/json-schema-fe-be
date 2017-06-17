import React from "react";
import PropTypes from "prop-types";
import { getPersons, deletePerson } from "./backend";
import Person from "./Person";
import autobind from "autobind";


export default class PersonList extends React.Component {
  @autobind
  deletePerson(id) {
    deletePerson(id);
    this.props.setState({
      persons: this.props.state.persons.filter(({ _id }) => _id !== id)
    });
  }

  componentDidMount() {
    getPersons().then(({ data }) => this.props.setState({ persons: data }));
  }

  render() {
    const { persons } = this.props.state;

    return <div className="Person-list">
      {persons ? persons.map(person => (
        <Person key={`Person-${person._id}`} { ...{...person, onDelete: this.deletePerson }} />
      )) : "loading..."}
    </div>;
  }
}

PersonList.propTypes = {
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired
};
