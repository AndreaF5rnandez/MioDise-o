import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { materiaPrima } from './aa'
import { ListaC } from "./ListaCuadro"
import "./prov.css"

function getFullName(params) {
    return `${params.row.firstName || ''} ${params.row.lastName || ''}`;
}

const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'Categoria', headerName: 'Categoria', width: 130 },
    { field: 'Tipo', headerName: 'Tipo', width: 130 },
    { field: 'cantidad', headerName: 'Cantidad', width: 160, },
];

export function ValueGetterGrid() {
    return (
        <div
            className="rounded-3  shadow "
            style={{
                width: "100%",
                height: "30rem",
                display: "grid",
                placeItems: "center",
                backgroundColor: "white",
                padding: "15px",
                margin: "0px 15px 0px 15px"
            }}>
            <ListaC />
        </div>

    );
}

{/*<Box sx={{ height: 400, width: '95%' }}>
                <DataGrid rows={materiaPrima} columns={columns} />
            </Box> */}