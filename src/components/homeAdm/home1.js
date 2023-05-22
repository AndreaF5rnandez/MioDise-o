import React from 'react'
import "./home.css"

import imgReci from "./asset/img/reci3.png";

export function Home() {
    return (
        <>
            <div className='fondo'>
                <div className="flexpadre">
                    <div className="flex">
                        <div
                            className="rounded-3  shadow "
                            style={{
                                width: "100%",
                                height: "33rem",
                                display: "grid",
                                placeItems: "center",
                                backgroundColor: "#ffffff",
                                padding: "15px",
                                margin: "30px 15px 25px 15px"
                            }}>
                            <div className='FlexPadre' style={{ background: "" }}>
                                <div className='FlexHijo'>
                                    <div class="d-grid gap-2 d-md-block">
                                        <button class="btn btn-success" type="button">Ventas</button>
                                    </div>
                                    <div class="d-grid gap-2 d-md-block">
                                        <button class="btn btn-success" type="button">Compras</button>
                                    </div>
                                    <div class="d-grid gap-2 d-md-block">
                                        <button class="btn btn-success" type="button">Deudores</button>
                                    </div>
                                </div>
                                <div className='FlexHijo'>
                                    <div class="d-grid gap-2 d-md-block">
                                        <button class="btn btn-success" type="button">Usuarios</button>
                                    </div>
                                    <div class="d-grid gap-2 d-md-block">
                                        <button class="btn btn-success" type="button">Clientes </button>
                                    </div>

                                    <div class="d-grid gap-2 d-md-block">
                                        <button class="btn btn-success" type="button">Proveedores </button>
                                    </div>

                                </div>
                                <div className='FlexHijo'>
                                    <div class="d-grid gap-2 d-md-block">
                                        <button class="btn btn-success" type="button">Materia Prima </button>
                                    </div>
                                    <div class="d-grid gap-2 d-md-block">
                                        <button class="btn btn-success" type="button">Productos </button>
                                    </div>
                                    <div class="d-grid gap-2 d-md-block">
                                        <button class="btn btn-success" type="button">Pedidos </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

/*<div className="flex">
                <div
                    className="rounded-3  shadow "
                    style={{
                        width: "100%",
                        height: "33rem",
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: "#ffffff",
                        padding: "15px",
                        margin: "35px 15px 30px 15px"
                    }}>
                </div>
                <img src={imgReci} class="img-fluid" className='imgRecii'></img>
            </div> */