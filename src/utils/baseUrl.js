import axios from "axios" 
import { host } from "./API_urls" 
import { getStorage, getStorageR, setStorage } from "./storage" 
import { postRequest } from "./request" 
import { refresh_token } from "./API_urls" 
 
const instance = axios.create({ 
  baseURL: host + '/api/v1/', 
}); 
 
instance.interceptors.request.use( 
  (config) => { 
    const token = getStorage(); 
    if (token) { 
      config.headers.Authorization = `Bearer ${token}`; 
    } 
    return config; 
  }, 
  (error) => Promise.reject(error) 
); 
 
 
instance.interceptors.response.use( 
  (response) => response, 
  async (error) => { 
    const originalRequest = error.config; 
 
    if ((error.response.status === 403 || error.response.code === 'token_not_valid') && !originalRequest._retry) { 
      originalRequest._retry = true; 
 
      try { 
        const refresh = getStorageR(); 
        const response = await postRequest(refresh_token, { refresh }); 
        const { access } = response.data; 
        setStorage(access); 
        originalRequest.headers.Authorization = `Bearer ${access}`; 
        return axios(originalRequest); 
      } catch (error) { 
        error.toLogin = true 
        return Promise.reject(error); 
      } 
    } 
 
    return Promise.reject(error); 
  } 
); 
 
export const  headerConfig = () => { 
  return { 
    Authorization: `Bearer ${getStorage()}`, 
    "Content-Type": "application/json", 
  } 
} 
 
export default instance;