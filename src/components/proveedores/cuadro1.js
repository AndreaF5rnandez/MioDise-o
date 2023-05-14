import "./prov.css"
import { Cuadro2 } from './mio'
import { ValueGetterGrid } from './prueba'
import { Chico } from "./Cua-chico";
export function Cuadro1(props) {
  return (
    <div className="flexpadre">
      <div
        className="rounded-3 py-5 shadow"
        style={{
          width: '15%',
          height: '50%',
          backgroundColor: "white",
          padding: "20px",
          margin: "0px 10px 0px 10px"
        }}>
        <Chico />
      </div>
      <Cuadro2 />

    </div>
  )
}


