import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'
const handleError = (error) => {
  console.log('Error in %s %s, %s', error.config.method, error.config.url, error.message)
}
const getAll = () => {
  return axios
    .get(baseUrl)
    .then(response => {
      return response.data
    })
    .catch(error => {
      handleError(error)
    })
}
const create = (person) => {
  return axios
    .post(baseUrl, person)
    .then(response => {
      return response.data
    })
    .catch(error => {
      handleError(error)
    })
}
const update = (id, person) => {
  return axios
    .put(baseUrl.concat('/', id), person)
    .then(response => {
      return response.data
    })
    .catch(error => {
      handleError(error)
    })
}
const remove = (id) => {
  return axios
    .delete(baseUrl.concat('/', id))
    .then(response => {
      return response.data
    })
    .catch(error => {
      handleError(error)
    })
}

export default { getAll, create, update, remove }
