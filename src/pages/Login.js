import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { endpoint } from '../services/http';
import AuthContext, { AuthProvider } from "../context/authContext";
import ThemeContext from "../context/ThemeContext";
import Swal from "sweetalert";
function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

const {auth, handleAuth, nameUser, nameRole} = useContext(AuthContext);

const { theme, handleTheme } = useContext(ThemeContext);

  const login = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${endpoint}/login`, {
      name_user: user,
      password_user: password,
    });

    if (response.data.mensaje == "se inicio sesion") {
      Swal({
        title: "Bienvenido",
        text: "Datos correctos",
        icon: "success",
        button: "acceptar",
        timer: "3000",
      });
      handleAuth(e, response.data.name_user, response.data.id_role);
     navigate("/bienvenido");
    } else {
      Swal({
        title: "Error",
        text: "Datos incorrectos",
        icon: "error",
        button: "acceptar",
        timer: "3000",
      });
    }
  };

  return (
    <div className={theme}>
      <div className="bodyLogin">
            <form onSubmit={login} className="sesion" >
              <div >
                <h2 className="titleSesion">Iniciar Sesion</h2>
                <div>
                  <label>Usuario</label>
                  <input
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className="input"
                  />
                </div>
                <div>
                  <label>Contraseña</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="input"
                  />
                </div>
                <div>
                  <button type="submit" className="btn ">
                    Enviar
                  </button>
                  <NavLink className="btn margin" exact to="/registrar">
                    Registrase
                  </NavLink>
                </div>
              </div>
            </form>
      </div>
    </div>
  );
}
export default Login;
