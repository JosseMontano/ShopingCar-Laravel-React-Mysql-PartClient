import React, { useContext, useEffect, useState } from "react";
import { endpoint, axios } from "../../services/http";
import {
  indexDoctor,
  indexSpeciallity,
} from "../../services/DoctorService copy";
import { AlertWarning, AlertGood, AlertMoreOrLess } from "../Alert";
import Loader from "../loader/Loader";
import "../Speciallity/FormSpeciallity.scss";
import ThemeContext from "../../context/ThemeContext";
import { Link } from "react-router-dom";


const ShowSpeciallity = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  /* ================================= Variables =================================*/
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [VarId, setVarId] = useState(0);
  //values to fill
  const [passwordUser, setPasswordUser] = useState("");
  const [passwordUserConfirmation, setpasswordUserConfirmation] = useState("");
  const [namePerson, setNamePerson] = useState("");
  const [lastNamePerson, setLastNamePerson] = useState("");
  const [ciPerson, setCiPerson] = useState("");
  const [dateStartDoctor, setDateStartDoctor] = useState("");
  const [paymentDoctor, setPaymentDoctor] = useState("");
  const [speciallitys, setSpeciallitys] = useState([]);
  const [speciallitySelect, setSpeciallitySelect] = useState("as");
  const [archivos, setArchivos] = useState("");

  const getAllDoctorsSelect = async () => {
    const response = await axios.get(`${endpoint}/especialidad`);
    setSpeciallitys(response.data);
    console.log(response.data);
  };
  /* ============================ Variables Alert ============================*/
  const [alertSuccess, setAlertSuccess] = useState(false);

  /* ================================= Methods Crud =================================*/
  /* ============================ Get ============================*/
  const getAllDoctors = async () => {
    const response = await axios.get(indexDoctor());
    setDoctors(response.data);
  };
  /* ============================ delete ============================*/
  const deleteSpeciallity = async (id) => {
    await axios.delete(`${endpoint}/doctor/${id}`);
    getAllDoctors();
  };
  /* ============================ store ============================*/
  const selectedHandler = (e) => {
    setArchivos(e.target.files[0]);
  };
  const insertFiles = async (e) => {
    e.preventDefault();

    const f = new FormData();
    f.append("photo_doctor", archivos);
    f.append("password_user", passwordUser);
    f.append("password_user_confirmation", passwordUserConfirmation);
    f.append("name_person", namePerson);
    f.append("last_name_person", lastNamePerson);
    f.append("ci_person", ciPerson);
    f.append("date_start_doctor", dateStartDoctor);
    f.append("payment_doctor",  paymentDoctor);
    f.append("id_speciality", speciallitySelect);
    await axios.post(`${endpoint}/doctor`, f, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    //navigate("/");
    setArchivos(null);
    getAllDoctors();
  };


  /* ================================= Methods Search =================================*/
  const handleSearch = (e) => {
    setSearch(e.target.value);
    filtrar(e.target.value);
    if (e.target.value === "") {
      getAllDoctors();
    }
  };
  const filtrar = (termineSearch) => {
    var result = doctors.filter((elemento) => {
      if (
        elemento.name_speciallity
          .toString()
          .toLowerCase()
          .includes(termineSearch.toLowerCase())
      ) {
        return elemento;
      }
    });
    setDoctors(result);
  };

  useEffect(() => {
    getAllDoctors();
    getAllDoctorsSelect();
  }, []);

  const urlimage = "http://localhost:8000";
  return (
    <div className={theme}>
      {alertSuccess ? <AlertGood /> : <p style={{ display: "none" }}>ok</p>}
      <article className="ContainerCard">
        <div className="card">
          <h2>Formulario Especialidad</h2>
          <label className="input">
            <input
              className="input__field"
              type="text"
              placeholder=" "
              value={namePerson}
              onChange={(e) => setNamePerson(e.target.value)}
            />
            <span className="input__label">Nombre</span>
          </label>
          <br />
          <label className="input">
            <input
              className="input__field"
              type="text"
              placeholder=" "
              value={lastNamePerson}
              onChange={(e) => setLastNamePerson(e.target.value)}
            />
            <span className="input__label">Apellido</span>
          </label>{" "}
          <br />
          <label className="input">
            <input
              className="input__field"
              type="text"
              placeholder=" "
              value={ciPerson}
              onChange={(e) => setCiPerson(e.target.value)}
            />
            <span className="input__label">Ci</span>
          </label>{" "}
          <br />
          <label className="input">
            <input
              className="input__field"
              type="text"
              placeholder=" "
              value={dateStartDoctor}
              onChange={(e) => setDateStartDoctor(e.target.value)}
            />
            <span className="input__label">Fecha que inicio</span>
          </label>{" "}
          <br />
          <label className="input">
            <input
              className="input__field"
              type="text"
              placeholder=" "
              value={paymentDoctor}
              onChange={(e) => setPaymentDoctor(e.target.value)}
            />
            <span className="input__label">Pago</span>
          </label>{" "}
          <br />
          <label className="input">
            <input
              className="input__field"
              type="password"
              placeholder=" "
              value={passwordUser}
              onChange={(e) => setPasswordUser(e.target.value)}
            />
            <span className="input__label">Contraseña</span>
          </label>{" "}
          <br />
          <label className="input">
            <input
              className="input__field"
              type="password"
              placeholder=" "
              value={passwordUserConfirmation}
              onChange={(e) => setpasswordUserConfirmation(e.target.value)}
            />
            <span className="input__label">Confir Contraseña</span>
          </label>{" "}
          <br />
          <select
            name="especialidad"
            onChange={(e) => setSpeciallitySelect(e.target.value)}
          >
            {speciallitys.map((name) => (
              <option key={name.id_speciallity} value={name.id_speciallity}>
                {name.name_speciallity}
              </option>
            ))}
          </select>
          <input
              className="input__field"
              type="file"
              onChange={selectedHandler}
            />
          <div className="button-group">
            <button onClick={insertFiles}>Guardar</button>

            <Link to={`/bienvenido/medico-pdf`}>Pdf</Link>
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
      {doctors.length ? (
        <div className="header_fixed">
          <table>
            <thead>
              <tr>
                <th>Fecha que inicio</th>
                <th>Pago</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Ci</th>
                <th>Especialidad</th>
                <th>Imagen</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id_doctor}>
                  <td>{doctor.date_start_doctor}</td>
                  <td>{doctor.payment_doctor}</td>
                  <td>{doctor.name_person}</td>
                  <td>{doctor.last_name_person}</td>
                  <td>{doctor.ci_person}</td>
                  <td>{doctor.name_speciallity}</td>
                  <td><img src={urlimage + doctor.photo_doctor}></img></td>
                  <td>
                    <button onClick={() => deleteSpeciallity(doctor.id_doctor)}>
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
