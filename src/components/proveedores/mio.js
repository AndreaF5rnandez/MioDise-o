import "./prov.css"
import { FaFileDownload } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { ValueGetterGrid } from './prueba'
import { Chucho } from './Chucho'
import { ListaCuadro2 } from "./ListaCuadro2";
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
                    <div className="botones">
                        <button type="button" class="btn btn-primary"
                            style={{
                                background: "#9b9a9a",
                                border: "#828181"
                            }}>
                            <FaUserPlus /> Nuevo
                        </button>
                    </div>
                    <div className="botones">
                        <button type="button" class="btn btn-primary"
                            style={{
                                background: "#9b9a9a",
                                border: "#828181",
                            }}>
                            <FaFileDownload /> Reportes
                        </button>
                    </div>

                </div>

            </div >
            <ValueGetterGrid />
        </div >
    )
}