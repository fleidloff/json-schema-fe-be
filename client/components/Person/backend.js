import axios from "axios";
import { url } from "../../../server/config";

export function createPerson({ formData }) {
  return axios.post(`${url}/Person`, {
    ...formData
  });
}

export function getPersons() {
  return axios.get(`${url}/Person`);
}

export function deletePerson(id) {
  return axios.delete(`${url}/Person/${id}`);
}
