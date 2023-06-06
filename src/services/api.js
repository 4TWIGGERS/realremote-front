import axios from 'axios';

import { FormatTemplate } from '../utils/index';
import ENDPOINTS from './endpoints';

const makeRequest = async ({ uri, kwds, ...rest }) => {
   return await axios({
      url: kwds ? FormatTemplate(uri, kwds) : uri,
      ...rest,
   });
};

const API = new Proxy(ENDPOINTS, {
   get: (target, prop) => (args) => {
      if (target.hasOwnProperty(prop)) {
         return makeRequest({ ...target[prop], ...args });
      } else {
         throw new Error(`Invalid key "${prop}"! Please make sure key exists in endpoints.js file`);
      }
   },
});

export default API;
