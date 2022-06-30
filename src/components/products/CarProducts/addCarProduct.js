import React, { useContext } from "react";
import { endpoint, axios } from "../../../services/http";
import AuthContext from "../../../context/authContext";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert";
const AddCarProduct = () => {
    const {auth, handleAuth, nameUser, nameRole} = useContext(AuthContext);
 /* ============================ store ============================*/
 const navigate = useNavigate();
 const { id_product, amount } = useParams();
    const v1 = {
      name_user: nameUser,
      id_product:id_product,
      amount_cart: amount
    };
    axios.post(`${endpoint}/carrito`, v1);
   navigate("/bienvenido/Seleccionarproductos");
  Swal({
      title: "Correcto",
      text: "Su registro el producto",
      icon: "success",
      button: "acceptar",
      timer: "3000",
    });
  return (
    <>
<p style={{display:"none"}}>Se agrego correctamente</p>
    </>
  )
}

export default AddCarProduct;
