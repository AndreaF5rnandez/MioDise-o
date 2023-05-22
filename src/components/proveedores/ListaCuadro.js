import React from "react";
import "./prov.css"
import { FaFileDownload } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from "reactstrap";
import { materiaPrima } from "./aa";



export class ListaC extends React.Component {
    state = {
        materia: materiaPrima,
        form: {
            id: '',
            Categoria: '',
            cantidad: 0,
            Peso: 0,
            Proveedor: "",
            Precio: 34,
            Fecha: ""
        },
        modalInsertar: false,
        modalEditar: false,

    }
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }
    mostrarModal = () => {
        this.setState({ modalInsertar: true })
    }
    ocultarModal = () => {
        this.setState({ modalInsertar: false })
    }
    mostrarModalEditar = (registro) => {
        this.setState({ modalEditar: true, form: registro })
    }
    ocultarModalEditar = () => {
        this.setState({ modalEditar: false })
    }
    insertar = () => {
        var valorNuevo = { ...this.state.form };
        valorNuevo.id = this.state.materia.length + 1;
        var lista = this.state.materia;
        lista.push(valorNuevo);
        this.setState({ materia: lista, modalInsertar: false })
    }
    editar = (dato) => {
        var contador = 0;
        var lista = this.state.materia;
        lista.map((registro) => {
            if (dato.id == registro.id) {
                lista[contador].Categoria = dato.Categoria;
                lista[contador].cantidad = dato.cantidad;
                lista[contador].Peso = dato.Peso;
                lista[contador].Proveedor = dato.Proveedor;
                lista[contador].Precio = dato.Precio;
                lista[contador].Fecha = dato.Fecha;
            }
            contador++;
        });
        this.setState({ data: lista, modalEditar: false })
    }
    eliminar = (dato) => {
        var opcion = window.confirm('Realmemte quiere eliminar el registro');
        var contador = 0;
        var lista = this.state.materia;
        lista.map((registro) => {
            if (registro.id == dato.id) {
                lista.splice(contador, 1);
            }
            contador++;
        });
        this.setState({ materiaPrima: lista })
    }
    render() {

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
                                    <li><a class="dropdown-item" href="#">PET</a></li>
                                    <li><a class="dropdown-item" href="#">PEAD</a></li>
                                    <li><a class="dropdown-item" href="#">PVC </a></li>
                                    <li><a class="dropdown-item" href="#">PEBD</a></li>
                                    <li><a class="dropdown-item" href="#">PP</a></li>
                                    <li><a class="dropdown-item" href="#">PS</a></li>
                                    <li><a class="dropdown-item" href="#">OTROS</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="botonReportes">


                        <div >
                            <Button onClick={() => this.mostrarModal()} color="success">
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
                        height: "29rem",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "white",
                        padding: "15px",
                        margin: "0px 15px 0px 15px"
                    }}>
                    <Container style={{
                        height: "100%",
                        padding: "15px"
                    }}>
                        <div style={{
                            color: "#9b9a9a",
                            paddingLeft: "15px"
                        }}><h2>Materia Prima</h2></div>
                        <hr style={{
                            marginTop: "0",
                        }} />
                        <div className="scroll-container">
                            <Table>
                                <thead style={{
                                    color: "#ffffff",
                                    background: "#cac6c6"
                                }}>
                                    <tr>
                                        <th>ID</th>
                                        <th>Categoria</th>
                                        <th>Cantidad</th>
                                        <th>Peso(kg)</th>
                                        <th>Proveedor</th>
                                        <th>Precio</th>
                                        <th>Fecha de Ingreso</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.materia.map((elemento) => (
                                        <tr>
                                            <td>{elemento.id}</td>
                                            <td>{elemento.Categoria}</td>
                                            <td>{elemento.cantidad}</td>
                                            <td>{elemento.Peso}</td>
                                            <td>{elemento.Proveedor}</td>
                                            <td>{elemento.Precio}</td>
                                            <td>{elemento.Fecha}</td>
                                            <td>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    class="bi bi-pencil-square"
                                                    viewBox="0 0 16 16"
                                                    type="button"
                                                    onClick={() => this.mostrarModalEditar(elemento)}
                                                    data-bs-whatever="@getbootstrap"
                                                >
                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                                                    />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="currentColor"
                                                    class="bi bi-trash"
                                                    viewBox="0 0 16 16"
                                                    type="button"
                                                    onClick={() => this.eliminar(elemento)}
                                                    data-bs-whatever="@getbootstrap"
                                                >
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                                </svg>

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    </Container >
                </div>
                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Insertar Materia Prima</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        < FormGroup>
                            <label>id:</label>
                            <input className="form-control" readOnly value={this.state.materia.length + 1} type="text" />
                        </FormGroup>

                        < FormGroup>
                            <label>Categoria:</label>
                            <input onChange={this.handleChange} className="form-control" name="Categoria" type="text" />
                        </FormGroup>

                        < FormGroup>
                            <label>Tipo:</label>
                            <input className="form-control" name="Tipo" type="text" />
                        </FormGroup>

                        < FormGroup>
                            <label>cantidad:</label>
                            <input className="form-control" name="cantidad" type="text" />
                        </FormGroup>

                        < FormGroup>
                            <label>Peso:</label>
                            <input className="form-control" name="Peso" type="text" />
                        </FormGroup>

                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={() => this.insertar()} color="primary">Insertar</Button>
                        <Button onClick={() => this.ocultarModal()} color="danger">Cancelar</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.modalEditar}>
                    <ModalHeader>
                        <div><h3>Editar Materia Prima</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        < FormGroup>
                            <label>id:</label>
                            <input value={this.state.form.id} className="form-control" readOnly type="text" />
                        </FormGroup>

                        < FormGroup>
                            <label>Categoria:</label>
                            <input value={this.state.form.Categoria} onChange={this.handleChange} className="form-control" name="Categoria" type="text" />
                        </FormGroup>

                        < FormGroup>
                            <label>Tipo:</label>
                            <input value={this.state.form.Tipo} className="form-control" name="Tipo" type="text" />
                        </FormGroup>

                        < FormGroup>
                            <label>cantidad:</label>
                            <input value={this.state.form.cantidad} className="form-control" name="cantidad" type="text" />
                        </FormGroup>

                        < FormGroup>
                            <label>Peso:</label>
                            <input value={this.state.form.Peso} className="form-control" name="Peso" type="text" />
                        </FormGroup>

                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={() => this.editar(this.state.form)} color="primary">Editar</Button>
                        <Button onClick={() => this.ocultarModalEditar()} color="danger">Cancelar</Button>
                    </ModalFooter>
                </Modal>


            </div>)
    }
};

export default ListaC;