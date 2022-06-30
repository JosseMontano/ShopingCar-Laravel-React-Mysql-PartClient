import { endpoint, axios } from './http';

const indexDoctor = function (){
  return `${endpoint}/doctor`;
};



export {axios,indexDoctor}