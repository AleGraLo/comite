import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start fixed-bottom">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >Copyright 
        © {new Date().getFullYear()}
        <a href="mailto:Rt.malaga@bidafarma.es" className="text-dark">
          Rt.malaga@bidafarma.es
        </a>
        <br />
        <a className="text-dark" href="https://mediatek.es/">
          Mediatek
        </a>
      </div>
    </footer>
  );
};

export default Footer;



