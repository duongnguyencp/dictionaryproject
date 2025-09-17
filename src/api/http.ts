import axios, { AxiosError } from 'axios'
const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
})

function toAxiosError(error: any): AxiosError {
  if (axios.isAxiosError(error)) return error

  const generic = new AxiosError('Unknown error', 'UNKNOWN_ERROR')
  generic.stack = (error as Error).stack
  return generic
}

// Optional: response interceptor
http.interceptors.response.use(
  (res) => res,
  (err) => {
    // Add global error handling if needed
    let axios_error = toAxiosError(err)
    return Promise.reject(axios_error)
  },
)

export default http
