import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./utils.css";

export const Buttons = () => {
  const buttonData = [
    { path: "/modelos/doshabitaciones", label: "Dos Habitaciones" },
    { path: "/modelos/treshabitaciones", label: "Tres Habitaciones" },
    { path: "/modelos/duplex", label: "Duplex" },
    { path: "/modelos/smart-ai", label: "Smart AI" },
    { path: "/modelos/smart-clasic", label: "Smart Clasic" },
  ];

  return (
    <div className="buttons-section">
      <h4 className="text-center">Conocé todos nuestros modelos</h4>
      <div className="navigation-buttons">
        {buttonData.map((btn, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link to={btn.path} className="btn btn-primary-hb">
              {btn.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
