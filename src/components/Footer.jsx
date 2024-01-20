import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start fixed-bottom">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()}
          Rt.malaga@bidafarma.es
        <a className="text-dark" href="https://mi-comite.com/">
          {" "}
          mi-comite.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
