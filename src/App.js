import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import {
  Clientes,
  Empleado,
  Recuadro,
  Search,
  ListaClientes,
  ListaProveedores,
  Modale,
  Login,
  Proveedores,
  Login1,
  Navbar,
  Navbar1,
  Navbar2,
  Navbar33,
  Navbar4
} from "./components";

const App = () => {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar2 />
      </div>
      <div>
        <Login1 />
      </div>
    </div>
  );
};

export default App;
