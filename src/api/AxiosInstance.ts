import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { APIURL } from './ApiUrl';

const Config: AxiosRequestConfig = {
  timeout: 60000,
  baseURL: APIURL(),
}

const AxiosInstace: AxiosInstance = axios.create(Config);

AxiosInstace.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

AxiosInstace.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});


export default AxiosInstace;