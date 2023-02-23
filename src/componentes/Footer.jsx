import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://www.google.com/maps/place/Unlam/@-34.6757341,-58.5723436,15z/data=!4m6!3m5!1s0x95bcc74d2a85f6b7:0xf7b42458c4ff6819!8m2!3d-34.6671331!4d-58.5683691!16s%2Fg%2F11h4y5tdkr?hl=es"
        className="enlace__map"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-map-pin"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="#ffba53"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 11m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
        </svg>
        Ubicacion
      </a>
      <div className="container__derechos">
        <p>2023 © Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
