import { endpoint, axios } from "../../../services/http";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  
  const navigate = useNavigate();
  const { id } = useParams();
  const [archivos, setArchivos] = useState("");

  const getProductById = async () => {
    const response = await axios.get(`${endpoint}/producto/${id}`);
    setName(response.data[0].name_product);
    setDescription(response.data[0].description_product);
    setPrice(response.data[0].price_product);
    setAmount(response.data[0].amount_product);
    setArchivos(response.data[0].url_foto);
    console.log(response.data[0].url_foto)
  };

  useEffect(() => {
    getProductById();
  }, []);


  const selectedHandler=e=>{
    setArchivos(e.target.files[0]);
}


  const update = async (e) => {
    e.preventDefault();
    const f = new FormData();
    f.append("url_foto", archivos);
    f.append("name_product", name);
    f.append("description_product", description);
    f.append("price_product", price);
    f.append("amount_product", amount);
    await axios.put(`${endpoint}/producto/${id}`, f, {
      headers: { "Content-Type": "multipart/form-data", "Accept":"application/json" },
    });
    //navigate("/");


  };

  return (
    <div>
      <h3>Edit Product</h3>
      <form onSubmit={update}>
        <div className="mb-3">
          <label className="form-label">nombre</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
          />
          <br/>
          <label className="form-label">Description</label>
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="text"
            className="form-control"
          />

          <input
            className="input__field"
            type="file"
            onChange={selectedHandler}
          />
          <span className="input__label">Nombre</span>
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
