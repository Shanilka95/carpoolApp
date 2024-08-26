
import { Login_URL } from '../constant/url';
import httpService from './httpService';

export function loginFunction(data: any) {
  if (data) {
    return httpService.post(Login_URL, data);
  }
  return Promise.reject(new Error('Error'));
}

export function getCatalog() {
  return httpService.get("get_url");
}

