import React, { useContext, useEffect, useState } from "react";
import { endpoint, axios } from "../../../services/http";
import { indexCarrito } from "../../../services/carritoService";
import { AlertWarning, AlertGood, AlertMoreOrLess } from "../../Alert";
import Loader from "../../loader/Loader";
import "../../Speciallity/FormSpeciallity.scss";
import ThemeContext from "../../../context/ThemeContext";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

const ShowSpeciallity = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  /* ================================= Variables =================================*/
  const [productsCar, setProductCar] = useState([]);
  const [priceCar, setPriceCar] = useState([]);
  /* ============================ Variables Alert ============================*/
  const [alertSuccess, setAlertSuccess] = useState(false);

  const { nameuser } = useParams();

  /* ================================= Methods Crud =================================*/
  /* ============================ Get ============================*/
  const getAllProductsCar = async () => {
    const response = await axios.get(`${endpoint}/carrito/${nameuser}`);
    setProductCar(response.data[0].carts);
    setPriceCar(response.data[0].amountToPayGet);
   
  };
  /* ============================ delete ============================*/
  const deleteProductCar = async (id) => {
    await axios.delete(`${endpoint}/carrito/${id}`);
    getAllProductsCar();
  };

  const urlimage = "http://localhost:8000";
  const total = 0;
  const navigate = useNavigate();
  useEffect(() => {
    getAllProductsCar();
  }, []);




  const stylesLink = {
    display: "block",
    color: "green",
    textAlign: "right",
    textDecoration: "none",
    marginRight: "30px",
  };

  return (
    <div className={theme}>
      {alertSuccess ? <AlertGood /> : <p style={{ display: "none" }}>ok</p>}

      <br />
      {productsCar.length ? (
        <div className="header_fixed">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Borrar</th>
              </tr>
            </thead>
            <tbody>
              {productsCar.map((productCar) => (
                <tr key={productCar.id_product}>
                  <td>{productCar.name_product}</td>
                  <td>{productCar.description_product}</td>
                  <td>{productCar.price_product}Bs</td>
                  <td>{productCar.amount_cart}</td>
                  <td>
                    <button
                      onClick={() =>
                        deleteProductCar(productCar.id_cart)
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
      <Link to={`/bienvenido/pagar/${priceCar}`} style={stylesLink}>
        El total a pagar es : {priceCar}
      </Link>
    </div>
  );
};

export default ShowSpeciallity;
