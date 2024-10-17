import React from 'react'

function Types() {
    return (
        <div className='py-12 flex flex-col gap-5'>
            <h1 className='text-center text-8xl font-caveat text-green-600'>Tipos de Laja</h1>

            <div className='container m-auto bg-white grid gap-5 md:grid-cols-2 py-12'>
                <div data-aos="flip-right" className="h-fit w-full flex flex-col items-center justify-center gap-5">
                    <div className='h-96 w-3/4 bg-center bg-cover rounded-md' style={{backgroundImage:`url(lajas/l6.jpeg)`}}></div>
                    <div data-aos="fade-down" className='w-full border-b h-1/6 flex justify-end flex-col p-3 rounded-md'>
                        <h1 className='text-black font-semibold text-2xl'>Laja de Enchape</h1>
                        <p className='text-gray-400 font-light'>La laja de enchape es un tipo de piedra natural utilizada principalmente para revestir paredes y superficies. Se caracteriza por su durabilidad, resistencia y belleza natural, lo que la convierte en una opción popular tanto para interiores como exteriores.</p>
                    </div>
                </div>
                <div data-aos="flip-right" className="h-fit w-full flex flex-col items-center justify-center gap-5">
                    <div className='h-96 w-3/4 bg-center bg-cover rounded-md' style={{backgroundImage:`url(lajas/laja_piso.jpg)`}}></div>
                    <div data-aos="fade-down" className='w-full border-b h-1/6 flex justify-end flex-col p-3 rounded-md'>
                        <h1 className='text-black font-semibold text-2xl'>Laja para Piso</h1>
                        <p className='text-gray-400 font-light'>La laja para piso es una piedra natural ideal para revestir superficies de suelo, tanto en interiores como en exteriores. Se destaca por su resistencia y durabilidad, soportando el tránsito constante y las condiciones climáticas adversas.</p>
                    </div>
                </div>
            </div>
        </ div>
    )
}

export default Types
