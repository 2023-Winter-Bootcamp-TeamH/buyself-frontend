import axios, { AxiosInstance } from 'axios'

export const customAxios: AxiosInstance = axios.create({
  baseURL: 'https://ibuyself.com/api',
})

