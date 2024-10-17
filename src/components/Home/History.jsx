import React from 'react'

function History() {
    return (
        <div data-aos="zoom-in-left" className='bg-center bg-cover md:bg-[url(lajas/background.jpeg)] h-fit md:h-[80vh] mt-12 flex items-center justify-center p-3 relative'>
            <div data-aos="zoom-in-right" className='w-full bg-white h-full grid md:grid-cols-12 items-center gap-2 md:absolute'
                style={window.innerWidth >=1100 ? { clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 40% 100%)" } : {}}>
                <h1 data-aos="fade-up" className='text-8xl text-green-900 font-caveat md:col-start-5 md:col-span-5'>Historia</h1>

                <p data-aos="flip-up" className='text-justify text-gray-600 text-lg font-light md:col-start-6 md:col-span-5'>En El Salvador, la minería de laja no es tan prominente como otros tipos de minería, como la de metales. Sin embargo, hay algunas áreas donde se extraen piedras naturales, incluyendo la laja. Las regiones montañosas y volcánicas del país son ricas en diversos tipos de rocas y minerales.<br/><br/>
                La minería en El Salvador ha tenido una historia complicada, especialmente con la prohibición de la minería metálica, debido a preocupaciones ambientales y sociales. Sin embargo, la extracción de materiales no metálicos, como la laja, sigue siendo una actividad permitida y regulada.<br/><br/>
                La laja decorativa de Tacuba es conocida por su belleza y durabilidad, siendo una opción popular para proyectos de construcción y decoración en El Salvador.</p>
            </div>
        </div>
    )
}

export default History
