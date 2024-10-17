import React from 'react';

function About() {
    return (
        <div className="w-full  h-fit py-12 text-white bg-white">
            
            <div className='md:flex flex-wrap gap-8 h-fit md:h-[80vh] container m-auto justify-center'>
                <div className='col-span-7 h-full md:w-1/2' data-aos="zoom-in-right">
                    <div className='h-full w-full bg-center bg-cover bg-[url(lajas/l4.jpeg)] rounded-md'>
                        <div className='bg-black/50 h-full w-full flex items-center justify-center flex-col gap-5 p-10 rounded-md'>
                            <h1 className='text-8xl font-semibold text-green-200 italic font-caveat'>Quiénes somos?</h1>
                            <p className='text-justify font-light text-lg'>En G&G Lajas Decorativas, nos dedicamos a ofrecer la mejor selección de lajas naturales para sus proyectos de construcción y decoración. Con más de 20 años de experiencia en el mercado, nos hemos consolidado en la industria gracias a nuestro compromiso con la calidad y la satisfacción del cliente. <br/> <br/>
                            Nuestro objetivo es proporcionar materiales de la más alta calidad que realcen la belleza y durabilidad de cualquier espacio. Nos enorgullece trabajar directamente con nuestra propia cantera para asegurar que cada pieza de laja cumpla con los estándares más exigentes.</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/3 col-span-4 h-full flex flex-col gap-5 justify-center items-center' data-aos="zoom-in-left">
                    <div className='h-3/4 w-3/4 bg-center bg-cover bg-[url(paisaje1.jpeg)] rounded-md'></div>
                    <div className='w-full border-b h-1/6 flex justify-end flex-col p-3 rounded-md gap-5 mt-3' data-aos="flip-right">
                        <h1 className='text-black font-semibold text-2xl'>Valores</h1>
                        <p className='text-gray-500 font-light'>Calidad - Sostenibilidad - Integridad - Responsabilidad Social - Servicio al Cliente</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;