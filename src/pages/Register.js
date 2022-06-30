import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { endpoint, axios } from "../services/http";
import Swal from "sweetalert";
function Footer() {
  const navigate = useNavigate();
  const [namePerson, setNamePerson] = useState("");
  const [lastNamePerson, setLastNamePerson] = useState("");
  const [ciPerson, setCiPerson] = useState("");
  const [password, setPassword] = useState("");
  const [repitPassword, setRepitPassword] = useState("");
  const store = async (e) => {
    e.preventDefault();
    await axios.post(`${endpoint}/registro-paciente`, {
      password_user: password,
      password_user_confirmation: repitPassword,
     name_person : namePerson,
     last_name_person: lastNamePerson,
    ci_person: ciPerson
    });
    Swal({
      title: "Cuenta creada",
      text: "Su usuario es: CINOMBRE",
      icon: "success",
      button: "acceptar",
      timer: "3000",
    });
    navigate('/login');
  };
  return (
    <>
      <div className="bodyLogin">
        <div>
          <div>
            <div
           
            ></div>
            <div className="sesion">
              <h2>Registrarse</h2>

              <div>
                <label>
              Nombre
                </label>
                <input
                  type="text"
                  value={namePerson}
                  className="input"
                  onChange={(e) => setNamePerson(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">
              Apellido Paterno
                </label>
                <input
                  type="text"
                  value={lastNamePerson}
                  className="input"
                  onChange={(e) => setLastNamePerson(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">
              CI
                </label>
                <input
                  type="text"
                  className="input"
                  value={ciPerson}
                  onChange={(e) => setCiPerson(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label>
                  Repetir Contraseña
                </label>
                <input
                  type="password"
                  className="input"
                  value={repitPassword}
                  onChange={(e) => setRepitPassword(e.target.value)}
                />
              </div>
              <div className="d-grid">
                <button onClick={store} className="btn btn-primary">
                  Enviar
                </button>
                <NavLink className="btn margin" exact to="/login">
                  Volver a login
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
