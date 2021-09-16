import axios from 'axios'

const Api = axios.create({
  baseURL: 'https://listtaskback.herokuapp.com/',
})

export default Api;