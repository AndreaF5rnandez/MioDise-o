import "./prov.css"
/*export function ListaCuadro2(props) {
  return (
        
        <div className="rounded-3 py-5 shadow heigh "
         style={{
            height: '90%',
            width: "100%",
            backgroundColor: "white",
            margin: "5px",
        }}>
        <h1>Hola Mundo</h1>
    </div>
  )
}*/


import React from "react";
import { Chucho } from './Chucho'

export function ListaCuadro2() {
  return (
    <>
      {/* Forma del recuadro*/}
      <div
        className="rounded-3  shadow "
        style={{
          width: "100%",
          height: "35rem",
          display: "grid",
          placeItems: "center",
          backgroundColor: "white",
          margin: "15px"
        }}
      >
        <div
          style={{
            display: "grid",
            placeItems: "center",
          }}>
          {/* Scroll de la grilla ,  Barra de scroll a 67rem y el recuadro tiene 70rem, altura de 30rem donde el cuadro tiene 40rem */}
          <div
            className="rounded-3 py-5 shadow "
            class="overflow-auto"
            style={{
              width: "100%",
              height: "30rem",
              display: "grid",
              placeItems: "center",
              backgroundColor: "white",
              padding: "0px 30px 0px 30px"
            }}
          >
            <table
              class="table caption-top table-hover "
              style={{ width: "45rem", placeItems: "center" }}
            >
              <thead class="table-light sticky-top ">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Categoria</th>
                  <th scope="col">Tipo</th>
                  <th scope="col">Cantidad</th>
                </tr>
              </thead>
              <Chucho />
            </table>
          </div>
        </div>
      </div>
    </>
  );
};


