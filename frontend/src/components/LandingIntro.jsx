import React from 'react';

const LandingIntro = () => {
    return (
        <section className="bg-white text-gray-800 py-16 px-6 md:px-20">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-green-700">
                    🌲 Quantawood
                </h1>
                <p className="text-xl md:text-2xl font-semibold mb-6">
                    Plataforma de gestión y análisis de productos madereros
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                        Backend: Spring Boot
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                        Frontend: React + Vite
                    </span>
                </div>
                <p className="text-gray-600 text-md md:text-lg leading-relaxed">
                    Quantawood permite registrar movimientos de stock, calcular volumen y peso, generar reportes en PDF con códigos QR, y administrar usuarios con autenticación JWT. Todo esto con una arquitectura moderna y escalable.
                </p>
            </div>
        </section>
    );
};

export default LandingIntro;