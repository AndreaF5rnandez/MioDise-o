import { FaRegUserCircle } from 'react-icons/fa';
import "./navhome.css"
export function NavHome() {
    return (
        <>
            <nav
                class="navbar sticky-top fixed-top gradient__bg d-flex flex-row-reverse"
            >
                <div class="container-fluid d-flex flex-row-reverse">

                    <button
                        class="btn btn-#cac6c6"

                        type="button"

                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                    >
                        <div ><FaRegUserCircle style={{
                            fontSize: "2em", color: "#9b9a9a"
                        }} /></div>
                    </button>

                    <div
                        class="offcanvas offcanvas-end"
                        tabindex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                                Menu
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="row">
                            <nav id="navbar-example3" >
                                <nav class="nav nav-pills flex-column">
                                    <div class="d-grid gap-2 d-md-block">
                                        <button class="btn btn-success" type="button">Cerrar Sesion</button>
                                    </div>
                                </nav>
                            </nav>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default NavHome;

/* <nav class="navbar d-flex flex-row-reverse" style={{ background: "success" }}>

                <div class="d-flex flex-row-reverse">
                    <div class="p-2"><FaRegUserCircle style={{
                        fontSize: "2em",
                        margin: "10px",
                    }} /></div>
                </div>

            </nav >*/ 