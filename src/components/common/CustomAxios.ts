import axios, { AxiosInstance } from 'axios'

export const customAxios: AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1/api',
})

