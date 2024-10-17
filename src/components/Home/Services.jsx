import React from 'react';

function Services() {
    return (
        <div className="py-12 px-8 h-fit relative">
            <h1 className='font-caveat text-6xl text-center pb-12 text-green-600'>Nuestros Servicios</h1>
            <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                <div className="service-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
                data-aos="fade-right">
                    <div className="p-6 text-center" data-aos="flip-up">
                        <h2 data-aos="zoom-in" className="text-3xl font-raleway mb-4 text-green-900">Limpieza Regular</h2>
                        <div className='w-3/4 h-[1px] bg-green-900 my-5 m-auto'></div>
                        <p data-aos="zoom-out-right" className="text-gray-700 text-base">
                            Utiliza agua y jabón neutro para limpiar la piedra laja. Evita productos químicos agresivos que puedan dañar la superficie.
                        </p>
                    </div>
                </div>

                <div className="service-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
                data-aos="fade-left">
                    <div className="p-6 text-center" data-aos="flip-down">
                        <h2 data-aos="zoom-in" className="text-3xl font-raleway mb-4 text-green-900">Evitar Objetos Afilados</h2>
                        <div className='w-3/4 h-[1px] bg-green-900 my-5 m-auto'></div>
                        <p data-aos="zoom-out-right" className="text-gray-700 text-base">
                            Protege la piedra de objetos afilados que puedan rayar o dañar la superficie.
                        </p>
                    </div>
                </div>

                <div className="service-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
                data-aos="fade-up">
                    <div className="p-6 text-center" data-aos="flip-left">
                        <h2 data-aos="zoom-in" className="text-3xl font-raleway mb-4 text-green-900">Hidro Lavado</h2>
                        <div className='w-3/4 h-[1px] bg-green-900 my-5 m-auto'></div>
                        <p data-aos="zoom-out-right" className="text-gray-700 text-base">
                            Para la limpieza profunda, especialmente en exteriores, el hidro lavado puede ser una opción efectiva.
                        </p>
                    </div>
                </div>

                <div className="service-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
                data-aos="fade-down">
                    <div className="p-6 text-center" data-aos="flip-right">
                        <h2 data-aos="zoom-in" className="text-3xl font-raleway mb-4 text-green-900">Tratamientos Especiales</h2>
                        <div className='w-3/4 h-[1px] bg-green-900 my-5 m-auto'></div>
                        <p data-aos="zoom-out-right" className="text-gray-700 text-base">
                            En algunos casos, puede ser necesario pulir y abrillantar la piedra para mantener su brillo y eliminar pequeñas manchas.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Services;
