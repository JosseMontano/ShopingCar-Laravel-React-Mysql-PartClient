import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/authContext";
import "./pay.scss";
import { endpoint, axios } from "../../services/http";
import Swal from "sweetalert";
const PayProduct = () => {
  const navigate = useNavigate();
  const { total } = useParams();
  const { compra } = useParams();
  const { auth, handleAuth, nameUser, nameRole } = useContext(AuthContext);
  const [details, setDetails] = useState([]);

  /* ============================ Get ============================*/
  const getDeailProductsCar = async () => {
    const response = await axios.get(`${endpoint}/carrito-detail/${nameUser}`);
    setDetails(response.data[0].carts);
  };

  const pay = async (e) => {
    e.preventDefault();
    await axios.post(`${endpoint}/order/${nameUser}/${total}`);
    Swal({
      title: "Felicidades",
      text: "Acaba de comprar los productos",
      icon: "success",
      button: "acceptar",
      timer: "3000",
    });
    navigate("/bienvenido");
  };

  useEffect(() => {
    getDeailProductsCar();
  }, []);

  return (
    <div className="containerPay">
      <div className="cardPay">
        <button className="proceed" onClick={pay}>
          <svg className="sendicon" width="24" height="24" viewBox="0 0 24 24">
            <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
          </svg>
        </button>
        <img
          src="https://seeklogo.com/images/V/VISA-logo-62D5B26FE1-seeklogo.com.png"
          className="logo-card"
        />
        <label>Card number:</label>
        <input
          id="user"
          type="text"
          className="input cardnumber"
          placeholder="1234 5678 9101 1121"
        />
        <label>Name:</label>
        <input className="input name" placeholder="Edgar Pérez" />
        <label className="toleft">CCV:</label>
        <input className="input toleft ccv" placeholder="321" />
      </div>
      <div className="receipt">
        <div className="col">
          <p>
            Costo: <span className="cost">{total}Bs</span>
          </p>
        </div>
        <div className="col">
          <p>
            Usuario: <span className="seller">{nameUser}</span>
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default PayProduct;

