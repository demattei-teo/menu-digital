import React, { useEffect, useState } from "react";
import apiService from "./ApiService";
import { v4 as uuidv4 } from "uuid";

function generarIdUnico() {
  return uuidv4();
}

export default function Adicionales() {
  const [getData, setGetData] = useState(null);
  useEffect(() => {
    async function getDataAdicionales() {
      const dataAdicionales = await apiService();
      setGetData(dataAdicionales.adicionales);
    }
    getDataAdicionales();
  }, []);
  return (
    <div className="container__menu-global">
      <h2 className="container__promociones-title">Adicionales</h2>
      <div className="container__cards-adicionales container__menus">
        {getData?.map((data) => {
          return (
            <div className="cards__adicionales" key={generarIdUnico()}>
              <div className="container__info-card">
                <div className="container__info">
                  <p className="title__cards">{data.name}</p>
                  <p className="description__cards-adicionales">
                    {data.description}
                  </p>
                </div>
                <p className="price__cards">{data.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
