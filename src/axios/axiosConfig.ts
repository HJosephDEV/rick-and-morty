import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

interface MyConfig extends AxiosRequestConfig {
  baseURL: string;
  timeout?: number;
}

function createAxios(config: MyConfig): AxiosInstance {
  const http = axios.create(config);

  http.interceptors.request.use((config) => {
    return config;
  });

  return http;
}

const http = createAxios({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? '',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default http;
