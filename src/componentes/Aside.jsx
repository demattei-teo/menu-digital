import React from "react";
import { Link } from "react-router-dom";

export default function Aside() {
  return (
    <section className="aside">
      <nav className="nav">
        <Link to="/" className="aside__link">
          Promociones
        </Link>
        <Link to="/Hamburguesas" className="aside__link">
          Hamburguesas
        </Link>
        <Link to="/Adicionales" className="aside__link">
          Adicionales
        </Link>
      </nav>
    </section>
  );
}
