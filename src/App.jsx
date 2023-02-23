import React from "react";
import Main_body from "./componentes/Main_body";
import { BrowserRouter, Link } from "react-router-dom";
import footer from "./componentes/Footer";
import Footer from "./componentes/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Main_body />;
      <Footer />;
    </BrowserRouter>
  );
}
