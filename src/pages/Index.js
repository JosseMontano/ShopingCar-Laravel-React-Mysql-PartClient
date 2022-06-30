import React, { useContext, useEffect, useState } from "react";

import "../App.css";
import imgDoctor1 from "../assets/Index/doc-1.jpg";
import imgDoctor2 from "../assets/Index/doc-2.jpg";
import imgDoctor3 from "../assets/Index/doc-3.jpg";

import imgBlog1 from "../assets/Index/blog-1.jpg";
import imgBlog2 from "../assets/Index/blog-2.jpg";
import imgBlog3 from "../assets/Index/blog-3.jpg";
import {
  indexDoctor,
  indexSpeciallity,
} from "./../services/DoctorService copy";
import { endpoint, axios } from "../services/http";

function Index() {

/*
  let navbar = document.querySelector('.navbar');
  menu.onclick = () =>{
      navbar.classList.toggle('active');
  }
  window.onscroll = () =>{
      navbar.classList.remove('active');
  }
*/


  const [doctors, setDoctors] = useState([]);
  const getAllDoctors = async () => {
    const response = await axios.get(indexDoctor());
    setDoctors(response.data);
  };
  useEffect(() => {
    getAllDoctors();
  }, []);
  const urlimage = "http://localhost:8000";
  return (
    <div className="index">
      <section className="home" id="home">
        <div className="content">
          <h3>Bienvenido a Montaños Seguros</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed
            autem vero? Magnam, est laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed
            autem vero? Magnam, est laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed
            autem vero? Magnam, est laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sed
            autem vero? Magnam, est laboriosam!
          </p>
          <a href="#" className="btn">
            {" "}
            contactanos <span className="fas fa-chevron-right"></span>{" "}
          </a>
        </div>
      </section>

      <section className="services" id="services">
        <h1 className="heading">
          {" "}
         Nuestos <span>servicios</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-notes-medical"></i>
            <h3>Consultas gratuitas</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
            <a href="#" className="btn">
              {" "}
              aprender mas <span className="fas fa-chevron-right"></span>{" "}
            </a>
          </div>

          <div className="box">
            <i className="fas fa-ambulance"></i>
            <h3>Ambulancias 24/7</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
            <a href="#" className="btn">
              {" "}
              aprender mas <span className="fas fa-chevron-right"></span>{" "}
            </a>
          </div>

          <div className="box">
            <i className="fas fa-user-md"></i>
            <h3>Doctores experimentados</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad,
              omnis.
            </p>
            <a href="#" className="btn">
              {" "}
              learn more <span className="fas fa-chevron-right"></span>{" "}
            </a>
          </div>

  
        </div>
      </section>

      <section className="about" id="about">
        <h1 className="heading">
          {" "}
          <span>Sobre</span> Nosotros{" "}
        </h1>

        <div className="row">
      
          <div className="content">
            <h3>Somos un hospital con 20 años de exp</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              ducimus, quod ex cupiditate ullam in assumenda maiores et culpa
              odit tempora ipsam qui, quisquam quis facere iste fuga, minus
              nesciunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              ducimus, quod ex cupiditate ullam in assumenda maiores et culpa
              odit tempora ipsam qui, quisquam quis facere iste fuga, minus
              nesciunt.
            </p>
            <a href="#" className="btn">
              {" "}
              leer mas <span className="fas fa-chevron-right"></span>{" "}
            </a>
          </div>
        </div>
      </section>

      <section className="doctors" id="doctors">
        <h1 className="heading">
          {" "}
          Nuestros <span>doctores</span>{" "}
        </h1>

        <div className="box-container">
        {doctors.map((doctor) => (
          <div className="box">
            <img src={urlimage + doctor.photo_doctor } alt="" />
            <h3>{(doctor.name_person + " " +doctor.last_name_person)}</h3>
            <span>{doctor.name_speciallity}</span>
          </div>

))}


        </div>
      </section>

      <section className="book" id="book">
        <h1 className="heading">
          {" "}
          <span>Contactanos</span> ahora{" "}
        </h1>

        <div className="row">

          <form action="">
            <h3>Correo</h3>
            <input type="text" placeholder="nombre" className="box" />
            <input type="email" placeholder="email" className="box" />
            <input type="email" placeholder="detalle" className="box" />
            <input type="date" className="box" />
            <input type="submit" value="Enviar" className="btn" />
          </form>
        </div>
      </section>

   
      <section className="blogs" id="blogs">
        <h1 className="heading">
          {" "}
          NUestro <span>blog</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={imgBlog1} alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
                  {" "}
                </a>
                <a href="#">
                  {" "}
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, eius.
              </p>
              <a href="#" className="btn">
                {" "}
                learn more <span className="fas fa-chevron-right"></span>{" "}
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={imgBlog2} alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
                  {" "}
                </a>
                <a href="#">
                  {" "}
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, eius.
              </p>
              <a href="#" className="btn">
                {" "}
                learn more <span className="fas fa-chevron-right"></span>{" "}
              </a>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src={imgBlog3} alt="" />
            </div>
            <div className="content">
              <div className="icon">
                <a href="#">
          
                </a>
                <a href="#">
               
                </a>
              </div>
              <h3>blog title goes here</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident, eius.
              </p>
              <a href="#" className="btn">
                {" "}
                learn more <span className="fas fa-chevron-right"></span>{" "}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>Nuestros servicios</h3>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"></i> Servicio dental{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"></i> Terapias{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"></i> cardiologia{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"></i> diagnostico{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right"></i> ambulancia 24/7{" "}
            </a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href="#">
              {" "}
              <i className="fas fa-phone"></i> 4442153{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-phone"></i> 76584246{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-envelope"></i> montañoseguros@gmail.com{" "}
            </a>
          </div>

          <div className="box">
            <h3>Siguenos</h3>
            <a href="#">
              {" "}
              <i className="fab fa-facebook-f"></i> facebook{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-twitter"></i> twitter{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-instagram"></i> instagram{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-linkedin"></i> linkedin{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-pinterest"></i> pinterest{" "}
            </a>
          </div>
        </div>

        <div className="credit">
          {" "}
          Todos los <span>derechos</span> reservados{" "}
        </div>
      </section>
    </div>
  );
}

export default Index;
