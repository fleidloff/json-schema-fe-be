import axios from "axios";

export function createPerson({ formData }) {
  return axios.post("http://localhost:8080/api/v1/Person", {
    ...formData
  });
}

export function getPersons() {
  return axios.get("http://localhost:8080/api/v1/Person");
}

export function deletePerson(id) {
  return axios.delete(`http://localhost:8080/api/v1/Person/${id}`);
}
