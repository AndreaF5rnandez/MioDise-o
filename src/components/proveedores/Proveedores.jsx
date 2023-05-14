import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import "./prov.css"
import { Cuadro1 } from "./cuadro1";
import {ValueGetterGrid} from './prueba'

const Proveedores = () => {
  return (
      <div className='fondo'>
        <Cuadro1/>
      </div>
  );
}

export default Proveedores