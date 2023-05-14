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
            Tipo: '',
            cantidad: 0,
            Peso: 0,
            Ingreso: ''
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
                lista[contador].Tipo = dato.Tipo;
                lista[contador].cantidad = dato.cantidad;
                lista[contador].Peso = dato.Peso;
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
                        height: "30rem",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "white",
                        padding: "15px",
                        margin: "0px 15px 0px 15px"
                    }}>
                    <Container>
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Categoria</th>
                                    <th>Tipo</th>
                                    <th>Cantidad</th>
                                    <th>Peso(kg)</th>
                                    <th>Fecha de Ingreso</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.materia.map((elemento) => (
                                    <tr>
                                        <td>{elemento.id}</td>
                                        <td>{elemento.Categoria}</td>
                                        <td>{elemento.Tipo}</td>
                                        <td>{elemento.cantidad}</td>
                                        <td>{elemento.Peso}</td>
                                        <td>{elemento.Ingreso}</td>
                                        <td>
                                            <Button onClick={() => this.mostrarModalEditar(elemento)} color="primary">Editar</Button>{'  '}
                                            <Button onClick={() => this.eliminar(elemento)} color="danger">Eliminar</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
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