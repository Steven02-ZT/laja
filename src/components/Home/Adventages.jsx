import React from 'react';

function Adventages() {
    return (
        <div className='py-12'>
            <h1 className='text-6xl pb-12 font-caveat text-green-500 text-center'>Características y Ventajas del producto</h1>
            <swiper-container
                data-aos="fade-down-left"
                autoplay="{delay:5000}"
            >
                <swiper-slide>
                    <div className="relative bg-center bg-cover bg-[url('bg-landing.jpeg')] h-[60vh] w-full flex items-center rounded-full">
                        <div className="absolute inset-0 w-3/4 flex items-center justify-start
                        bg-gradient-to-r from-black via-black to-transparent">
                            <div data-aos="flip-right" className="p-8 text-white max-w-lg">
                                <h1 className="text-4xl font-bold">Durabilidad y Resistencia</h1>
                                <p className="mt-4">
                                    La piedra laja es extremadamente resistente a la descomposición y al deterioro, lo que la hace ideal para exteriores y zonas de alto tráfico.
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div className="relative bg-center bg-cover bg-[url('lajas/l9.jpeg')] h-[60vh] w-full flex items-center rounded-full">
                        <div className="absolute inset-0 w-3/4 flex items-center justify-start
                        bg-gradient-to-r from-black via-black to-transparent">
                            <div data-aos="flip-right" className="p-8 text-white max-w-lg">
                                <h1 className="text-4xl font-bold">Antideslizante</h1>
                                <p className="mt-4">
                                    Su superficie natural es antideslizante, lo que la hace perfecta para áreas húmedas como baños y piscinas.
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div className="relative bg-center bg-cover bg-[url('lajas/l10.jpeg')] h-[60vh] w-full flex items-center rounded-full">
                        <div className="absolute inset-0 w-3/4 flex items-center justify-start
                        bg-gradient-to-r from-black via-black to-transparent">
                            <div data-aos="flip-right" className="p-8 text-white max-w-lg">
                                <h1 className="text-4xl font-bold">Bajo Mantenimiento</h1>
                                <p className="mt-4">
                                    No requiere mucho mantenimiento, lo que la convierte en una opción práctica y económica a largo plazo.
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div className="relative bg-center bg-cover bg-[url('lajas/l7.jpeg')] h-[60vh] w-full flex items-center rounded-full">
                        <div className="absolute inset-0 w-3/4 flex items-center justify-start
                        bg-gradient-to-r from-black via-black to-transparent">
                            <div data-aos="flip-right" className="p-8 text-white max-w-lg">
                                <h1 className="text-4xl font-bold">Aislante Térmico y Acústico</h1>
                                <p className="mt-4">
                                    La piedra laja es un buen aislante tanto térmico como acústico, ayudando a mantener temperaturas agradables y reduciendo el ruido.
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div className="relative bg-center bg-cover bg-[url('lajas/l5.jpeg')] h-[60vh] w-full flex items-center rounded-full">
                        <div className="absolute inset-0 w-3/4 flex items-center justify-start
                        bg-gradient-to-r from-black via-black to-transparent">
                            <div data-aos="flip-right" className="p-8 text-white max-w-lg">
                                <h1 className="text-4xl font-bold">Resistencia al Fuego</h1>
                                <p className="mt-4">
                                    No es susceptible a daños y es resistente al fuego, lo que aumenta su durabilidad y seguridad.
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div className="relative bg-center bg-cover bg-[url('lajas/l6.jpeg')] h-[60vh] w-full flex items-center rounded-full">
                        <div className="absolute inset-0 w-3/4 flex items-center justify-start
                        bg-gradient-to-r from-black via-black to-transparent">
                            <div data-aos="flip-right" className="p-8 text-white max-w-lg">
                                <h1 className="text-4xl font-bold">Estética Natural</h1>
                                <p className="mt-4">
                                    Su apariencia natural y elegante puede mejorar significativamente la estética de cualquier espacio, ya sea en interiores o exteriores.
                                </p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

            </swiper-container>
        </div>
    );
}

export default Adventages;
