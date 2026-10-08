import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { generateRandomPhoneNumber } from "../utils/whatsapp";
import "./whatsapp.css";

export const WhatsAppButton = () => {

  const phoneNumber = generateRandomPhoneNumber();
  const link = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={link}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
};