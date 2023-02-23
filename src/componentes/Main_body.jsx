import React, { useEffect } from "react";
import Aside from "./Aside";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Adicionales from "./Adicionales";
import Hambueguesas from "./Hambueguesas";
import Promociones from "./Promociones";

export default function Main_body() {
  return (
    <main>
      <section className="home">
        <div className="container__presentacion">
          <h1 className="title">Chum-Burguer</h1>
          <p>El sabor argentino</p>
        </div>
      </section>
      {<Aside />}
      <section className="containerall_menu">
        <Routes>
          <Route element={<Promociones />} path="/" />
          <Route element={<Hambueguesas />} path="/Hamburguesas" />
          <Route element={<Adicionales />} path="/Adicionales" />
        </Routes>
      </section>
    </main>
  );
}
