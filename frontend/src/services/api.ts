import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080',
})

export async function checkBackendHealth() {
  const response = await api.get('/actuator/health')

  return response.data
}

export default api