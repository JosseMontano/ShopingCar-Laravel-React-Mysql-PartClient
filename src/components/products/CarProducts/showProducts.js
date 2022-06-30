import React, { useContext, useEffect, useState } from "react";
import { endpoint, axios } from "../../../services/http";
import { indexProducts } from "../../../services/productService";
import { AlertWarning, AlertGood, AlertMoreOrLess } from "../../Alert";
import Loader from "../../loader/Loader";
import "../../Speciallity/FormSpeciallity.scss";
import ThemeContext from "../../../context/ThemeContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./showProducts.scss";
import AuthContext from "../../../context/authContext";

const ShowSpeciallity = () => {
  const { auth, handleAuth, nameUser, nameRole } = useContext(AuthContext);

  const { theme, handleTheme } = useContext(ThemeContext);
  /* ================================= Variables =================================*/
  const [speciallitys, setSpeciallitys] = useState([]);
  const [search, setSearch] = useState("");
  const [amount, setAmount] = useState(1);
  /* ============================ Variables Alert ============================*/
  const [alertSuccess, setAlertSuccess] = useState(false);

  /* ================================= Methods Crud =================================*/
  /* ============================ Get ============================*/
  const getAllSpeciallitys = async () => {
    const response = await axios.get(indexProducts());
    setSpeciallitys(response.data);
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

  const urlimage = "http://localhost:8000";

  const navigate = useNavigate();
  useEffect(() => {
    getAllSpeciallitys();
  }, []);

  return (
    <div className={theme}>
      <div className="ContainerSearch">
        <div className="Search" style={{ margin: "20px 60px" }}>
          <input
            type="search"
            placeholder="Busca tu Archivo"
            id="Buscador"
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="container">
        {speciallitys.map((speciallity) => (
          <>
            <div className="card" key={speciallity.id_product}>
              <img src={urlimage + speciallity.url_foto} />
              <h4>{speciallity.name_product}</h4>
              <p>
                {speciallity.description_product}{" "}
                <b>
                  el precio es de {speciallity.price_product}Bs, se cuenta con{" "}
                  <b>{speciallity.amount_product} unidades</b>
                </b>
              </p>

              <div className="footerCar">
                <input type="number" className="input"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <Link
                  to={`/bienvenido/Seleccionarproductos/add/${speciallity.id_product}/${amount}`}
                >
                  Agregar
                </Link>

              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ShowSpeciallity;
