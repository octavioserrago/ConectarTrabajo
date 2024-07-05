import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handlerLogin = async (e) => {
        e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        try {
            const response = await axios.post("http://localhost:8888/auth/login", {
                email,
                password
            });

            const { success, message, user } = response.data;

            if (success) {
                // Aquí podrías manejar la respuesta según tus necesidades
                console.log(message);
                console.log(user); // Puedes almacenar el usuario en el contexto de autenticación si es necesario
                login(user); // Ejemplo: almacenar el usuario en el contexto de autenticación
                navigate('/dashboard'); // Redirigir a la página de dashboard u otra página
            } else {
                setError(message); // Mostrar mensaje de error si las credenciales son incorrectas
            }
        } catch (error) {
            console.error("Error en la solicitud de login:", error);
            setError('Error interno del servidor'); // Mostrar error genérico en caso de fallo de conexión o servidor
        }
    };

    return (
        <div className="login-page">
            <h1 className="text-center mt-4">Login</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <form onSubmit={handlerLogin} className="p-4 border rounded">
                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            {error && <div className="alert alert-danger" role="alert">{error}</div>}
                            <button type="submit" className="btn btn-primary w-100">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
