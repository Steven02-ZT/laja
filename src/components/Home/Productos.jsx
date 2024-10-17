import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

function Productos() {
    const products = [
        { id: 1, name: "Lajas en Placas Grande", price: "$19.99", image: "lajas/l12.jpeg", },
        { id: 2, name: "Lajas en Formato Irregular", price: "$29.99", image: "lajas/l13.jpeg", },
        { id: 3, name: "Lajas en Tiras", price: "$39.99", image: "lajas/l1.jpeg" },
        { id: 4, name: "Lajas en Mosaicos", price: "$49.99", image: "lajas/mosaicos.jpg", },
        { id: 5, name: "Hexagonal u Octagonal", price: "$49.99", image: "lajas/p4.jpeg", },
        { id: 6, name: "Instalaciones y Mantenimientos", price: "$49.99", image: "services/instalaciones.jpg", },
    ]
    return (
        <div className="w-full m-auto py-12 bg-white">
            <div className="container m-auto px-4 md:px-6">
                <h2 className="text-3xl py-12 text-green-600 font-caveat tracking-tighter md:text-6xl text-center mb-8">
                    Nuestros Productos y Servicios
                </h2>
                <div className="flex flex-wrap justify-around gap-6 text-gray-500">
                    {products.map((product) => (
                        <div key={product.id} className="overflow-hidden w-64 bg-gray-50 border-[0.2px] border-green-100 rounded-xl shadow h-72 my-auto" data-aos="flip-up">
                            <div className="p-0">
                                {product.image && (
                                    <div className='w-full h-48 bg-center bg-cover' style={{ backgroundImage: `url(${product.image})` }}></div>
                                )}
                                <div data-aos="fade-left" className="p-4 bg-gray-50 h-full">
                                    <h3 className="font-semibold text-lg text-center mb-2 text-green-900">{product.name}</h3>
                                    {product.is_link && (
                                        <a href="https://wa.me/50373984820" className='flex justify-center items-center gap-2'><FaWhatsapp />Whatsapp</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="overflow-hidden w-64 border-[0.2px] bg-gray-50 border-green-100 rounded-xl shadow h-72 my-auto" data-aos="flip-up">
                        <div className="p-0">
                            <div className='w-full h-48 bg-center bg-cover' style={{ backgroundImage: `url(contact_bg.jpg)` }}></div>
                            <div data-aos="fade-left" className="p-4 bg-gray-50 h-full">
                                <h3 className="font-semibold text-lg text-center mb-2 text-green-900">Contáctanos</h3>
                                <a href="" className='flex justify-center items-center gap-2'><FaWhatsapp />Whatsapp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productos
