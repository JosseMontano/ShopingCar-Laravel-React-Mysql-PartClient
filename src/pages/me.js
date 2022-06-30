import React, { useContext, useEffect, useState } from "react";
import { endpoint, axios } from "../services/http";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Me = () => {
  const [peoples, setPeoples] = useState([]);
  const [users, setUsers] = useState([]);  
  const [roles, setRoles] = useState([]);
  const { name_user } = useParams();
  const getUser = async () => {
    const response = await axios.get(`${endpoint}/perfil/${name_user}`);
    setPeoples(response.data[0].people);
    setUsers([response.data[0].user]);
    setRoles([response.data[0].role]);
    console.log([response.data[0].user]);
    console.log([response.data[0].role]);
  };

  useEffect(() => {
    getUser();
  }, []);
  const Actualizar = async (e) => {
    e.preventDefault();
  
  };
  return (
    <div className="bodyLogin">
   <form onSubmit={Actualizar}>
   <div className="sesion">
      <div>
        {peoples.map((people) => (
          <>
            <div key={people.id_person}></div>
            <span>Nombre:</span>
            <input className="input" type="text" value={people.name_person}></input>
           <br/>
            <span>Apellido:</span>
            <input className="input" type="text" value={people.last_name_person}/>
            <br/>
            <span>Ci:</span>
            <input className="input" type="text" value={people.ci_person}/>
          </>
        ))}
      </div>
      <div>
        {users.map((user) => (
          <>
            <div key={user.id_person}></div>
            <span>Usuario:</span>
            <input readOnly className="input" type="text" value={user.name_user}/>
          </>
        ))}
      </div>
      <div>
        {roles.map((role) => (
          <>
            <span>Rol:</span>
            <input readOnly className="input" type="text" value={role.name_role}/>
          </>
        ))}
      </div>
      <Link className="btn " to={`/Editar-Perfil/${name_user}`}>Editar</Link>
                 
      </div>

   </form>
    </div>
  );
};
export default Me;

/* 
      
             <div>
        {users.map((user) => (
          <>
            <div key={user.id_person}></div>
            <h2>{user.name_user}</h2>
          </>
        ))}
      </div>

  <div>
        {users.map((user) => (
          <>
            <div key={user.id_person}></div>
            <h2>{user.name_user}</h2>
          </>
        ))}
      </div>

 */
