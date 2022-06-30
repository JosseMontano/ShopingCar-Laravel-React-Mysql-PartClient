import React, { useContext, useEffect, useState } from "react";
import { endpoint, axios } from "../../../services/http";
import { indexProducts } from "../../../services/productService";
import { AlertWarning, AlertGood, AlertMoreOrLess } from "../../Alert";
import Loader from "../../loader/Loader";
import "../../Speciallity/FormSpeciallity.scss";
import ThemeContext from "../../../context/ThemeContext";
import { Link, Navigate, useNavigate } from "react-router-dom";


const ShowSpeciallity = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  /* ================================= Variables =================================*/
  const [speciallitys, setSpeciallitys] = useState([]);
  const [search, setSearch] = useState("");
  /* ============================ Variables Alert ============================*/
  const [alertSuccess, setAlertSuccess] = useState(false);

  /* ================================= Methods Crud =================================*/
  /* ============================ Get ============================*/
  const getAllSpeciallitys = async () => {
  const response = await axios.get(indexProducts());
   setSpeciallitys(response.data);
  };
  const deleteProduct = async (id) => {
    await axios.delete(`${endpoint}/producto/${id}`);
    getAllSpeciallitys();
  };
  /* ================================= Methods Search =================================*/
  const handleSearch = (e) => {
    setSearch(e.target.value);
    filtrar(e.target.value);
    if (e.target.value === "") {
      getAllSpeciallitys();
    }
  };
  const filtrar = (termineSearch) => {
    var result = speciallitys.filter((elemento) => {
      if (
        elemento.name_product
          .toString()
          .toLowerCase()
          .includes(termineSearch.toLowerCase())
      ) {
        return elemento;
      }
    });
    setSpeciallitys(result);
  };
 

  const urlimage = 'http://localhost:8000'

const navigate = useNavigate();
  useEffect(() => {
    getAllSpeciallitys();
  }, []);

  return (
    <div className={theme}>
    {alertSuccess ? (<AlertGood />) : (<p style={{display:"none"}}>ok</p>)}
    <Link to={`/bienvenido/productos/add`}>Crear</Link>
      <div className="ContainerSearch">
        <div className="Search">
          <input
            type="search"
            placeholder="Busca tu Archivo"
            id="Buscador"
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>

      <br />
      {speciallitys.length ? (
        <div className="header_fixed">
          <table >
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Foto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {speciallitys.map((speciallity) => (
                <tr key={speciallity.id_product}>
                  <td>{speciallity.name_product}</td>
                  <td>{speciallity.description_product}</td>
                  <td>{speciallity.price_product}Bs</td>
                  <td>{speciallity.amount_product}</td>
                  <td>
                      <img src={urlimage + speciallity.url_foto}></img>
                      </td>
                  <td>

                  <button
                      onClick={() =>
                        deleteProduct(speciallity.id_product)
                      }
                    >
                      🗑️
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Loader />
      )}

    </div>
  );
};

export default ShowSpeciallity;
