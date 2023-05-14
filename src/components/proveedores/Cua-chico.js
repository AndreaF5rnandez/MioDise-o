import { FaRecycle } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { FaShapes } from "react-icons/fa";



export function Chico() {
    return (
        <div className="flexxChico">
            <div className="reciclaje">
                <FaRecycle />
            </div>
            <div className="navChico">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"
                            style={{ color: "#9b9a9a" }}
                        > <FaShapes style={{ color: "#76EB70" }} />  Materia Prima</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style={{ color: "#9b9a9a" }}> <FaShoppingBasket style={{ color: "#76EB70" }} /> Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" style={{ color: "#9b9a9a" }}> <FaClipboardList style={{ color: "#76EB70" }} /> Pedidos</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}