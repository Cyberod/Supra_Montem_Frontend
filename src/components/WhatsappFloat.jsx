import React from "react";

const whatsappNumber = "+2347035786703"; // No dashes for wa.me link
const whatsappLink = `https://wa.me/${whatsappNumber}`;

const WhatsappFloat = () => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      position: "fixed",
      right: "24px",
      bottom: "24px",
      zIndex: 1000,
      background: "#00203F",
      borderRadius: "50%",
      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      padding: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "box-shadow 0.2s",
    }}
    aria-label="Chat on WhatsApp"
  >
    <img
      src="/whatsapp-Icon.png"
      alt="WhatsApp"
      style={{ width: 32, height: 32, display: "block" }}
    />
  </a>
);

export default WhatsappFloat;
