import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import "./prov.css"
import { Cuadro1 } from "./cuadro1";
import {ValueGetterGrid} from './prueba'
import { ListaC3 } from "./ejem2";

export const Proveedores1 = () => {
  return (
      <div className='fondo'>
        <ListaC3/>
      </div>
  );
}

export default Proveedores1