import { endpoint, axios } from './http';

const indexSpeciallity = function (){
  return `${endpoint}/especialidad`;
};

const storeSpeciallity = async(varname_speciallity) => {
  const v1 = {
    name_speciallity: varname_speciallity,
  }
  return await axios.post(`${endpoint}/especialidad`, v1)
};


export {axios,indexSpeciallity, storeSpeciallity}