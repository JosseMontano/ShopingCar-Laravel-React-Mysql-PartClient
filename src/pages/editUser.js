import React from 'react'
import { endpoint, axios } from "../services/http";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert";
import AuthContext from "./../context/authContext";
const EditUser = () => {
    const [namePerson, setNamePerson] = useState("");
    const [lastNamePerson, setLastNamePersona] = useState("");
    const [ciPerson, setCiPerson] = useState("");
    const navigate = useNavigate();
    const { name_user} = useParams();
    const { auth, handleAuth, nameUser, nameRole } = useContext(AuthContext);
    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}/actualizar-usuario/${name_user}`, {
            name_person: namePerson,
            last_name_person: lastNamePerson,
            ci_person: ciPerson
        });
        Swal({
            title: "Modificado",
            text: "Por favor inicie sesion con sus nuevos datos",
            icon: "success",
            button: "aceptar",
            timer: "3000",
          });
          handleAuth(e, "");
        navigate("/login");
      };

      const getUser = async () => {
        const response = await axios.get(`${endpoint}/perfil/${name_user}`);
        setNamePerson(response.data[0].people[0].name_person);
        setLastNamePersona(response.data[0].people[0].last_name_person);
        setCiPerson(response.data[0].people[0].ci_person);
      };
      useEffect(() => {
getUser();
      }, [])
  return (
    <div className="bodyLogin">
    <form onSubmit={update} className="sesion">
   <span>Nombre:</span>
    <input
       className="input"
        type="text"
        placeholder=" "
        value={namePerson}
        onChange={(e) => setNamePerson(e.target.value)}
    />
    <br/>
    <span>Apellido:</span>
        <input
        className="input"
        type="text"
        placeholder=" "
        value={lastNamePerson}
        onChange={(e) => setLastNamePersona(e.target.value)}
    />  <br/>
     <span>Ci:</span>
        <input
        className="input"
        type="text"
        placeholder=" "
        value={ciPerson}
        onChange={(e) => setCiPerson(e.target.value)}
    />  <br/>  <br/>
    
<button type="submit">Actualizar datos</button>
    </form>
    </div>
  )
}
export default EditUser;