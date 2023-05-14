import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from "reactstrap";
import { materiaPrima } from "./aa"

export class Modal1 extends React.Component {
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
        modalInsertar: false

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

    insertar = () => {
        var valorNuevo = { ...this.state.form };
        valorNuevo.id = this.state.materia.length + 1;
        var lista = this.state.materia;
        lista.push(valorNuevo);
        this.setState({ materia: lista, modalInsertar: false })
    }
    render() {
        return (
            <Modal isOpen={this.state.modalEditar}>
                <ModalHeader>
                    <div><h3>Editar Materia Prima</h3></div>
                </ModalHeader>
                <ModalBody>
                    < FormGroup>
                        <label>id:</label>
                        <input className="form-control" readOnly type="text" />
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
                    <Button onClick={() => this} color="primary">Editar</Button>
                    <Button color="danger">Cancelar</Button>
                </ModalFooter>
            </Modal>
        )
    }
}