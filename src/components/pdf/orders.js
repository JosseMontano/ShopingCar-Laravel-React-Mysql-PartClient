import React from 'react'
import { endpoint, axios } from "../../services/http";

  const getPdfSpeciallitys = function(usuario) {
  axios({
      url: `http://127.0.0.1:8000/api/order-pdf/${usuario}`, //your url
      method: 'GET',
      responseType: 'blob', // important
  }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      window.open(url,'_blank');
  });
}

export default getPdfSpeciallitys;