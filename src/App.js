import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
  Navbar4,
  MateriaPrima,
  Proveedores1,
  IngrosoMateriaP,
  Productos,
  IngrosoProducto,
  HomeAdm,
  NavHome,
  Pedido
} from "./components";

const App = () => {
  return (
    <div>
      <div className="gradient__bg">
        <NavHome />
      </div>
      <div>
        <  Pedido />
      </div>
    </div>
  );
};

export default App;
