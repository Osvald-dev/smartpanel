import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    localidad: "",
    metros: "",
    tipo: "",
    consideraciones: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mensaje = `*Nuevo contacto desde la web* 👷‍♂️

📌 Nombre: ${formData.nombre}
📞 Teléfono: ${formData.telefono}
📍 Localidad: ${formData.localidad}
📐 Metros a construir: ${formData.metros}
🏗 Tipo de construcción: ${formData.tipo}
📝 Consideraciones: ${formData.consideraciones}`;

    const numeroWhatsApp = "543517038778"; // tu número
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div>
     <Header></Header>

      {/* MAIN */}
      <main className="container my-5">
        <h2 className="text-center mb-4 text-white">Formulario de Contacto</h2>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label className="form-label text-white">Nombre completo</label>
            <input
              type="text"
              name="nombre"
              className="form-control"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label text-white">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              className="form-control"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12">
            <label className="form-label text-white">Localidad donde van a construir</label>
            <input
              type="text"
              name="localidad"
              className="form-control"
              value={formData.localidad}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label className="form-label text-white">Cantidad de metros a construir</label>
            <select
              name="metros"
              className="form-select"
              value={formData.metros}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar...</option>
              <option value="-50">Menos de 50</option>
              <option value="50-100">De 50 a 100</option>
              <option value="100+">Más de 100</option>
            </select>
          </div>

          <div className="col-md-6">
            <label className="form-label text-white">Tipo de construcción</label>
            <select
              name="tipo"
              className="form-select"
              value={formData.tipo}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar...</option>
              <option value="Obra gris">Obra gris</option>
              <option value="Llave en mano">Llave en mano</option>
            </select>
          </div>

          <div className="col-12">
            <label className="form-labe text-white">Consideraciones</label>
            <textarea
              name="consideraciones"
              className="form-control"
              rows="4"
              value={formData.consideraciones}
              onChange={handleChange}
            />
          </div>

          <div className="col-12 text-center ">
            <button type="submit" className="btn btn-success px-4 py-2">
              Enviar por WhatsApp
            </button>
          </div>
        </form>
      </main>

    <Footer></Footer>
    </div>
  );
};
