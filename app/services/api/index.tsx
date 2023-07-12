import ApiRequest from './config';
import {Config} from '../../libraries';

const BASE_URL = 'https://contact.herokuapp.com/contact'
// const URL ='/contact'

const API = {
  /**
   * ====================================================
   * AUTH
   * ====================================================
   */
  getContact: ApiRequest.get(BASE_URL),
  postContact: ApiRequest.post(BASE_URL),
  deleteContact: ApiRequest.delete(BASE_URL),
  EditContact: ApiRequest.put(BASE_URL),
 
};

export const getServiceAPI =() =>{
  return API
};