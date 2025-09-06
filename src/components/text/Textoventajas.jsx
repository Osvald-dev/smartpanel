import React from "react";
import { motion } from "framer-motion";

export const Textoventajas = () => {
  const ventajas = [
    {
      icon: "fas fa-leaf",
      titulo: "Menor impacto ambiental",
      texto:
        "Gracias al ahorro energético durante la construcción y en el uso diario de calefacción y aire acondicionado.",
    },
    {
      icon: "fas fa-clock",
      titulo: "Rapidez",
      texto:
        "El sistema constructivo liviano permite un montaje ágil y eficiente, previamente ejecutado en taller u obra.",
    },
    {
      icon: "fas fa-shield-alt",
      titulo: "Seguridad",
      texto:
        "Diseñadas para resistir diversas condiciones climáticas, con membranas internas que refuerzan la estructura.",
    },
    {
      icon: "fas fa-hard-hat",
      titulo: "Durabilidad",
      texto:
        "Con un mantenimiento adecuado, nuestras construcciones alcanzan una vida útil prolongada y confiable.",
    },
  ];

  return (
    <section className="bg-color-text py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Ventajas de nuestro sistema</h2>
          <p className="text-muted">
            Descubrí por qué elegir <strong>SmartPanel</strong> es una decisión inteligente.
          </p>
        </div>

        <div className="row g-4">
          {ventajas.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <motion.div
                className="card h-100 shadow-sm text-center border-0 card-ventaja"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, boxShadow: "0 12px 25px rgba(0,0,0,0.15)" }}
              >
                <div className="card-body">
                  <i className={`${item.icon} fa-3x mb-3 `}></i>
                  <h5 className="fw-bold">{item.titulo}</h5>
                  <p className="text-muted">{item.texto}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
