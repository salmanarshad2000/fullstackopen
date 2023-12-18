import axios from "axios";

const baseUrl = "http://localhost:3001/persons";
const getAll = () => {
  return axios
    .get(baseUrl)
    .then((response) => {
      return response.data;
    });
};
const create = (person) => {
  return axios
    .post(baseUrl, person)
    .then((response) => {
      return response.data;
    });
};
const update = (id, person) => {
  return axios
    .put(baseUrl.concat("/", id), person)
    .then((response) => {
      return response.data;
    });
};
const remove = (id) => {
  return axios
    .delete(baseUrl.concat("/", id))
    .then((response) => {
      return response.data;
    });
};

export default { getAll, create, update, remove };
