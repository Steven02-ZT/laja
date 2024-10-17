import React from 'react';

export default function MisionVision() {
    return (
        <div className="container mx-auto px-4 pt-12">
            <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
                <div className="flex-1" data-aos="flip-right">
                    <div className="h-fit transition-transform duration-300 ease-in-out transform hover:scale-105 bg-white shadow-lg rounded-lg">
                        <div className="flex flex-col items-center p-6">
                            <h2 className="font-semibold text-center text-green-600 font-caveat text-4xl" data-aos="zoom-in-up">Nuestra Misión</h2>
                        </div>
                        <div className="p-6" data-aos="flip-up">
                            <p className="text-center text-muted-foreground italic text-gray-500">
                                “Proveer a nuestros clientes con materiales de construcción y laja decorativa de la más alta calidad, fomentando la innovación y la sostenibilidad en cada proyecto. Nos comprometemos a ofrecer un servicio excepcional y soluciones personalizadas que contribuyan al desarrollo y embellecimiento de los espacios, mejorando la calidad de vida de las comunidades a las que servimos.”
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1" data-aos="flip-left">
                    <div className="h-fit transition-transform duration-300 ease-in-out transform hover:scale-105 bg-white shadow-lg rounded-lg">
                        <div className="flex flex-col items-center p-6">
                            <h2 className="font-semibold text-center text-green-600 font-caveat text-4xl" data-aos="zoom-in-up">Nuestra Visión</h2>
                        </div>
                        <div className="p-6" data-aos="flip-down">
                            <p className="text-center text-muted-foreground italic text-gray-500">
                            “Convertirnos en la empresa líder en la comercialización de laja decorativa y materiales de construcción, reconocida por nuestra innovación, calidad y compromiso con la sostenibilidad. Aspiramos a transformar espacios y comunidades, proporcionando soluciones que no solo embellezcan, sino que también respeten y preserven el medio ambiente.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
