import axios from "axios";

export function createPerson({ formData }) {
  axios.post("http://localhost:8080/api/v1/Person", {
    ...formData
  });
}
