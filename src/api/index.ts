import axios, { HeadersDefaults } from 'axios'

import { API_URL } from '@/configuration'

axios.defaults.baseURL = API_URL
axios.defaults.withCredentials = true

interface CustomHeadersDefaults extends HeadersDefaults {
  'Cache-Control': string
}

axios.defaults.headers = {
  'Cache-Control': 'no-cache'
} as CustomHeadersDefaults

export default {}
