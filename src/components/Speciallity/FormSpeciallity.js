import React, { useContext, useEffect, useState } from "react";
import { endpoint, axios } from "../../services/http";
import { indexSpeciallity, storeSpeciallity } from "../../services/SpeciallityService";
import { AlertWarning, AlertGood, AlertMoreOrLess } from "../Alert";
import Loader from "../loader/Loader";
import "./FormSpeciallity.scss";
import ThemeContext from "../../context/ThemeContext";
import AuthContext from "../../context/authContext";
import { Link, Navigate, useNavigate } from "react-router-dom";


const ShowSpeciallity = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  /* ================================= Variables =================================*/
  const [speciallitys, setSpeciallitys] = useState([]);
  const [search, setSearch] = useState("");
  const [name_speciallity, setName_speciallity] = useState("");
  const [VarId, setVarId] = useState(0);
  /* ============================ Variables Alert ============================*/
  const [alertSuccess, setAlertSuccess] = useState(false);

  /* ================================= Methods Crud =================================*/
  /* ============================ Get ============================*/
  const getAllSpeciallitys = async () => {
  const response = await axios.get(indexSpeciallity());
   setSpeciallitys(response.data);

  };
  /* ============================ delete ============================*/
  const deleteSpeciallity = async (id) => {
    await axios.delete(`${endpoint}/especialidad/${id}`);
    getAllSpeciallitys();
  };
  /* ============================ store ============================*/
  const store = async (e) => {
    e.preventDefault();
    const v1 = {
      name_speciallity: name_speciallity,
    };
    await axios.post(`${endpoint}/especialidad`, v1);
    setName_speciallity("");
    setAlertSuccess(true);
    getAllSpeciallitys();
  };
  /* ============================ edit ============================*/
  const getSpeciallityById = async (id) => {
    const response = await axios.get(`${endpoint}/especialidad/${id}`);
    setName_speciallity(response.data[0].name_speciallity);
    setVarId(response.data[0].id_speciallity);
  };
  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${endpoint}/especialidad/${VarId}`, {
      name_speciallity: name_speciallity,
    });
    setName_speciallity("");
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
        elemento.name_speciallity
          .toString()
          .toLowerCase()
          .includes(termineSearch.toLowerCase())
      ) {
        return elemento;
      }
    });
    setSpeciallitys(result);
  };


const {auth, handleAuth, nameUser} = useContext(AuthContext);
const navigate = useNavigate();
  useEffect(() => {
    getAllSpeciallitys();
if(!nameUser){
  navigate("/login");
}
  }, []);

  return (
    <div className={theme}>
    {alertSuccess ? (<AlertGood />) : (<p style={{display:"none"}}>ok</p>)}
      <article className="ContainerCard">
        <div className="card">
          <h2>Formulario Especialidad</h2>
          <label className="input">
            <input
              className="input__field"
              type="text"
              placeholder=" "
              value={name_speciallity}
              onChange={(e) => setName_speciallity(e.target.value)}
            />
            <span className="input__label">Nombre</span>
          </label>
          <div className="button-group">
            <button onClick={store}>Guardar</button>
            <button onClick={update}>Editar</button>
            <Link to={`/bienvenido/especialidad/pdf`}> PDF </Link>
          </div>
        </div>
      </article>

      <br />

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
                <th>Especialidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {speciallitys.map((speciallity) => (
                <tr key={speciallity.id_speciallity}>
                  <td>{speciallity.name_speciallity}</td>
                  <td>
                    <button
                      onClick={() =>
                        getSpeciallityById(speciallity.id_speciallity)
                      }
                    >
                      ✏️
                    </button>

                    <button
                      onClick={() =>
                        deleteSpeciallity(speciallity.id_speciallity)
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
