import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext"
import CustomerDashboard from "../pages/CustomerDashboard";
import { useNavigate } from 'react-router-dom';



const Navbar = () => {

    const { logueado, logout } = useAuth();
    const navigate = useNavigate();

    const handlerLogout = (e) => {
        e.preventDefault();
        logout();
        navigate("/login")
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Conectar Trabajo</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/"> Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/features">Crear nueva Pagina Empresa</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/pricing">Descubrir trabajo</Link>
                    </li>

                    {
                        (logueado)
                            ?
                            <>

                                <li className="nav-item">
                                    <Link className="nav-link" href="#" onClick={handlerLogout}>Logout</Link>
                                </li>
                            </>
                            :
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
