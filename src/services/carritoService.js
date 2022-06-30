import { endpoint, axios } from './http';

const indexCarrito = function (){
  return `${endpoint}/carrito`;
};


export {axios,indexCarrito}