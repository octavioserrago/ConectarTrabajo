import React from 'react';
import Navbar from '../components/Navbar';
import bannerImage from "../assets/Banner.jpg";

const Index = () => {
    const serviciosPopulares = [
        { id: 1, titulo: 'Programación y Tecnología', descripcion: 'Desarrollo web, aplicaciones móviles, y más.', icono: 'fas fa-laptop-code' },
        { id: 2, titulo: 'Diseño gráfico', descripcion: 'Diseño de logotipos, banners, y branding.', icono: 'fas fa-palette' },
        { id: 3, titulo: 'Música y audio', descripcion: 'Producción musical, composición, y grabación.', icono: 'fas fa-music' },
        { id: 4, titulo: 'Marketing', descripcion: 'Estrategias digitales, SEO, y publicidad.', icono: 'fas fa-chart-line' },
        { id: 5, titulo: 'Salud', descripcion: 'Bienestar, nutrición, y consejos de salud.', icono: 'fas fa-heartbeat' },
        { id: 6, titulo: 'Servicios del Hogar', descripcion: 'Reparaciones, limpieza, y mantenimiento.', icono: 'fas fa-home' },
    ];

    return (
        <div className="inicio">
            <Navbar className="px-3" />
            <div className="container-fluid contenedorBanner vh-100 d-flex justify-content-center align-items-center rounded">
                <div className="row">
                    <div className="col-12">
                        <img src={bannerImage} alt="Banner Image" className="img-fluid rounded" style={{ maxWidth: '100%', maxHeight: '80vh' }} />
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mb-4">Servicios Populares</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {serviciosPopulares.map((servicio) => (
                        <div key={servicio.id} className="col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
                            <div className="card h-100" style={{ width: '15rem' }}>
                                <div className="card-body text-center">
                                    <i className={servicio.icono} style={{ fontSize: '2.5rem', marginBottom: '1rem' }}></i>
                                    <h5 className="card-title">{servicio.titulo}</h5>
                                    <p className="card-text">{servicio.descripcion}</p>
                                    <a href="#" className="btn btn-primary">Ver más</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Index;
