import axios from 'axios';
import { identity } from 'fxjs2';

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  baseURL: 'http://api.beta.projeto.io',
  // timeout: 1000,
});

instance.interceptors.request.use(identity, error => Promise.reject(error));


instance.interceptors.response.use(identity, error => Promise.reject(error));

export default {
  get: (url, params) => {


  },
  post: (url, body) => instance({
    method: 'POST',
    url, data: body
  }),
  put: (url, body) => {

  },
  delete: (url, body) => {

  }

};