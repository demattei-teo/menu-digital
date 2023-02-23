import React, { useEffect, useState } from "react";
import apiService from "./ApiService";
import { v4 as uuidv4 } from "uuid";

function generarIdUnico() {
  return uuidv4();
}
export default function Promociones() {
  const [getData, setGetData] = useState(null);
  useEffect(() => {
    async function getDataPromociones() {
      const dataPromociones = await apiService();
      setGetData(dataPromociones.promociones);
    }
    getDataPromociones();
  }, []);

  //   console.log(separador);

  //   const createCardsPromociones = getData.map((data) => {
  //     console.log(data.url);
  //   });
  return (
    <div className="container__menu-global">
      <h2 className="container__promociones-title">Promociones</h2>
      <div className="container__cards container__menus">
        {getData?.map((data) => {
          let altUrl = data.url.split("/")[1].split(".")[0];
          return (
            <div className="cards" key={generarIdUnico()}>
              <div className="container__url">
                <img src={data.url} alt={altUrl} className="img_cards" />
              </div>
              <div className="container__info-card">
                <div className="container__info ">
                  <p className="title__cards">{data.name}</p>
                  <p className="description__cards">{data.description}</p>
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
