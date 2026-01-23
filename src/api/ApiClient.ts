import axios, {AxiosInstance} from 'axios';
import {API_BASE_URL, API_TIMEOUT} from '@/config/constants';

let apiClient: AxiosInstance;

/**
 * Initialize API client with configuration
 */
export const initializeAPI = (): void => {
  apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: API_TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Add request interceptor
  apiClient.interceptors.request.use(
    config => {
      console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
      return config;
    },
    error => {
      console.error('API Request Error:', error);
      return Promise.reject(error);
    },
  );

  // Add response interceptor
  apiClient.interceptors.response.use(
    response => {
      console.log(`API Response: ${response.status} ${response.config.url}`);
      return response;
    },
    error => {
      console.error('API Response Error:', error.response?.status, error.message);
      return Promise.reject(error);
    },
  );

  console.log('API client initialized');
};

/**
 * Get API client instance
 */
export const getAPIClient = (): AxiosInstance => {
  if (!apiClient) {
    initializeAPI();
  }
  return apiClient;
};

/**
 * Make GET request
 */
export const get = async <T = any>(url: string, config?: any): Promise<T> => {
  const client = getAPIClient();
  const response = await client.get<T>(url, config);
  return response.data;
};

/**
 * Make POST request
 */
export const post = async <T = any>(
  url: string,
  data?: any,
  config?: any,
): Promise<T> => {
  const client = getAPIClient();
  const response = await client.post<T>(url, data, config);
  return response.data;
};

/**
 * Make PUT request
 */
export const put = async <T = any>(
  url: string,
  data?: any,
  config?: any,
): Promise<T> => {
  const client = getAPIClient();
  const response = await client.put<T>(url, data, config);
  return response.data;
};

/**
 * Make DELETE request
 */
export const del = async <T = any>(url: string, config?: any): Promise<T> => {
  const client = getAPIClient();
  const response = await client.delete<T>(url, config);
  return response.data;
};
