import React, { useEffect, useState } from "react";

export default async function apiService() {
  let respuesta = await fetch("/data/menu.json")
    .then((dataMenu) => dataMenu.json())
    .then((dataMenu) => dataMenu)
    .catch((err) => "error al obtener los datos" + err);
  return respuesta;
}
