import React, { useEffect, useState } from 'react'
import Header from '../Header'

function Banner() {
    return (
        <div className='h-screen md:h-[60vh] lg:h-screen relative overflow-hidden'>
            {/*<video src='video-landing.mp4' autoPlay loop muted className='aspect-video object-cover h-full w-full absolute brightness-90 contrast-150 animate-zoom'></video>*/}
            <div className='bg-cover md:bg-contain bg-no-repeat bg-right w-full h-full bottom-0 absolute animate-zoom'
            style={window.innerWidth <=1100 ? {filter: 'brightness(0.5) contrast(1.2)', backgroundImage:`url(bg-landing.jpeg)`} : {backgroundImage:`url(bg-landing.jpeg)`}}/>
            <div className='h-full w-full flex flex-col md:grid md:grid-rows-2 lg:flex lg:flex-col lg:bg-white relative z-10 justify-center'
            style={window.innerWidth >=1100 ? {clipPath: 'polygon(0 0, 72% 0, 47% 100%, 0% 100%)'} : {}}>
                <Header/>
                <div className='w-full lg:w-1/2 flex flex-col gap-10 p-16 absolute bottom-0 lg:bottom-auto h-fit mt-5'>
                    <div className='w-full'>
                        <div className='text-4xl lg:text-7xl font-caveat border-b w-full border-green-300
                        bg-gradient-to-r from-green-600 to-green-200 text-transparent bg-clip-text pb-5'>
                            <h1 className='w-full '>Transforma tus Espacios con Laja Natural de Alta Calidad</h1>
                        </div>
                    </div>
                    <p className='text-justify text-white lg:text-gray-800 w-full pl-3 text-base md:text-2xl  font-raleway'>Mejora cualquier espacio con materiales de alta calidad y un servicio personalizado. <br/> ¡Contáctanos y dale a tus proyectos el toque natural que merecen!</p>
                    {window.innerWidth >= 1100 && (<a href="https://wa.me/50373984820" className='border rounded-full p-1.5 bg-black/30 text-white font-raleway text-xl w-3/5 ml-3 font-light
                    hover:bg-green-600 hover:text-white text-center hover:scale-110'>Contactanos</a>)}
                </div>
            </div>
        </div>
    )
}

export default Banner
