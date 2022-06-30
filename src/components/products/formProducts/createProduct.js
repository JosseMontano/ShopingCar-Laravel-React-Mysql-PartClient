import { endpoint, axios } from "../../../services/http";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert";
const CreateProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  const [archivos, setArchivos] = useState("");
  const navigate = useNavigate();

  const selectedHandler = (e) => {
    setArchivos(e.target.files[0]);
  };

  const insertFiles = async (e) => {
    e.preventDefault();

    const f = new FormData();
    f.append("url_foto", archivos);
    f.append("name_product", name);
    f.append("description_product", description);
    f.append("price_product", price);
    f.append("amount_product", amount);
    await axios.post(`${endpoint}/producto`, f, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    Swal({
      title: "Correcto",
      text: "Su registro el producto",
      icon: "success",
      button: "acceptar",
      timer: "3000",
    });
    //navigate("/");
  //  setArchivos(null);
  };

  return (
    <div>
      <form onSubmit={insertFiles}>
        <article className="ContainerCard">
          <div className="card">
            <h2>Formulario Productos</h2>

            <label className="input">
              <input
                className="input__field"
                type="text"
                placeholder=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="input__label">Nombre</span>
            </label>
<br/>
            <label className="input">
              <input
                className="input__field"
                type="text"
                placeholder=" "
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <span className="input__label">Descripcion</span>
        </label>
        <br/> 
      <label className="input">
              <input
                className="input__field"
                type="text"
                placeholder=" "
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <span className="input__label">Precio</span>
              </label>
              <br/> 
              <label className="input">
              <input
                className="input__field"
                type="text"
                placeholder=" "
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <span className="input__label">Cantidad</span>
              </label>

            <input
              className="input__field"
              type="file"
              onChange={selectedHandler}
            />
            <span className="input__label">Nombre</span>

            <div className="button-group">
              <button type="submit">Guardar</button>
            </div>
          </div>
        </article>
      </form>
    </div>
  );
};

export default CreateProduct;
