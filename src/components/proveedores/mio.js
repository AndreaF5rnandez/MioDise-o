import "./prov.css"
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from "reactstrap";
import { FaFileDownload } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { ValueGetterGrid } from './prueba'
import { ListaC } from "./ListaCuadro";

export function Cuadro2() {
    return (

        <div className="flex">
            <div className="contenedorfiltart">
                <div className="inputsid">
                    <div className="ID">
                        <div class="input-group mb-3">
                            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">ID</button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                            <input type="text" class="form-control" aria-label="Text input with dropdown button" />
                        </div>
                    </div>
                    <div className="ID">
                        <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categoria
                            </a>

                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Plastico y Latas</a></li>
                                <li><a class="dropdown-item" href="#">Papeles y Cartones</a></li>
                                <li><a class="dropdown-item" href="#">Vidrio </a></li>
                                <li><a class="dropdown-item" href="#">Materiales Peligroso</a></li>
                                <li><a class="dropdown-item" href="#">Residuos Organicos</a></li>
                                <li><a class="dropdown-item" href="#">Varios</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="botonReportes">


                    <div >
                        <Button color="success">
                            <FaUserPlus /> Nuevo
                        </Button>
                    </div>


                    <div className="botones">
                        <Button type="button" class="btn btn-primary"
                            style={{
                                background: "#9b9a9a",
                                border: "#828181",
                            }}>
                            <FaFileDownload /> Reportes
                        </Button>
                    </div>
                </div>
            </div >
            <div
                style={{
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#f2f2f2",
                    paddingTop: "2rem",
                    paddingBottom: "2rem",
                }}
            >
                <div
                    className="rounded-3  shadow "
                    style={{
                        width: "65rem",
                        height: "40rem",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "white",
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            placeItems: "center",
                        }}
                    >
                        {/* Scroll de la grilla ,  Barra de scroll a 67rem y el recuadro tiene 70rem, altura de 30rem donde el cuadro tiene 40rem */}
                        <div
                            className="rounded-3 py-5  shadow "
                            class="overflow-auto"
                            style={{
                                width: "62rem",
                                height: "35rem",
                                display: "grid",
                                placeItems: "center",
                                backgroundColor: "white",
                            }}
                        >
                            <table
                                class="table caption-top table-hover "
                                style={{ width: "55rem", placeItems: "center" }}
                            >
                                <thead class="table-light sticky-top ">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">NOMBRE</th>
                                        <th scope="col">APELLIDO</th>
                                        <th scope="col">CORREO</th>
                                        <th scope="col">TELEFONO</th>
                                        <th scope="col">DIRECCION</th>
                                        <th scope="col"> ACCIONES </th>
                                    </tr>
                                </thead>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}