import axios from 'axios'
import apiUrl from '../../config.json'
//axios.defaults.baseURL = process.env.React_APP_API_URL
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'
axios.defaults.baseUrl = apiUrl

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response && error.response.status >= 400 && error.response.status < 500

  if (!expectedError) {
    console.log('error must be logged :', error)
    console.error('Unexpected error occurred !' + error)
  }

  return Promise.reject(error)
})

function setJwt(jwt) {
  axios.defaults.headers.common['x-auth-token'] = jwt
}

const exportedObject = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
}

export default exportedObject
