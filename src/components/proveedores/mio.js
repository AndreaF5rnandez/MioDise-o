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
        </div >
    )
}