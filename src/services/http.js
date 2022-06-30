import axios from "axios";
/*
export default function http(){
    baseUrl:'http://127.0.0.1:8000/api';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'application/json'
      }
}
*/
const endpoint = 'http://localhost:8000/api'
const themeDefault = 'dark'
const namesOfModes = ['dark', 'moonlight', 'eclipse', 'light']

export { endpoint, themeDefault, namesOfModes, axios }