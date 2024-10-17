import { FaFacebookMessenger, FaWhatsapp } from "react-icons/fa";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-white py-12 mt-auto" data-aos="flip-up">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between gap-8">
                    <div data-aos="zoom-in-down" className="space-y-4">
                        <h3 className="text-lg font-semibold">Sobre nosotros</h3>
                        <p className="text-sm text-muted-foreground">
                        En G&G Lajas Decorativas, ofrecemos lajas naturales de alta calidad, con 20 años de experiencia y un enfoque en la durabilidad y satisfacción del cliente.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contactanos</h3>
                        <div className="flex space-x-4">
                            <a data-aos="zoom-in-left" href="https://wa.me/50373984820" target="_blank" 
                            className="text-muted-foreground hover:text-primary flex gap-2 items-center justify-center">
                                <FaWhatsapp className="h-6 w-6" />
                                <span>Whatsapp</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-muted-foreground/20">
                    <p className="text-center text-sm text-muted-foreground">
                        © {new Date().getFullYear()} G&G Lajas Decorativas. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}