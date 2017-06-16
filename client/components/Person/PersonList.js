import React from "react";
import { getPersons, deletePerson } from "./backend";

export default class extends React.Component {
  state = { persons: [] };

  deletePerson = (id) => {
    deletePerson(id);
    this.setState({
      persons: this.state.persons.filter(({ _id }) => _id !== id)
    });
  };

  componentDidMount() {
    getPersons().then(({ data }) => this.setState({ persons: data }));
  }

  render() {
    const { persons } = this.state;

    return <div>
      {persons ? persons.map(person => (
        <Person key={`Person-${person._id}`} { ...{...person, onDelete: this.deletePerson }} />
      )) : "loading"}
    </div>;
  }
}

const Person = ({ firstName, lastName, age, _id, onDelete }) => (
  <div className="Person">
    {firstName} {lastName} { age && ` (${age})`}
    <button onClick={() => onDelete(_id)}>delete</button>
  </div>
);
