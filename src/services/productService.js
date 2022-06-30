import { endpoint, axios } from './http';

const indexProducts = function (){
  return `${endpoint}/producto`;
};


export {axios,indexProducts}