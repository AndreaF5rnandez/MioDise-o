import React from 'react'
import "./produccion.css"
import {  ListaPedidos} from "./pedidos";

export const Pedido = () => {
  return (
      <div className='fondo'>
        <ListaPedidos/>
      </div>
  );
}

export default Pedido;