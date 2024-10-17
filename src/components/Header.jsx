import React, { useState } from "react"
import { IoIosMenu, IoIosCloseCircleOutline } from "react-icons/io";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="bg-white shadow-sm w-screen lg:w-2/3 absolute top-0 py-3">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between flex-wrap h-24">
                    <div className="flex items-center">
                        <a href="/" className="text-2xl font-bold text-primary">
                            <div className="bg-center bg-contain w-56 h-24 bg-no-repeat" style={{backgroundImage:`url(logo.png)`}}></div>
                        </a>
                    </div>
                    <nav className="hidden md:flex space-x-4">
                        <a href="https://wa.me/50373984820" target="_blank" className="text-muted-foreground hover:text-primary flex items-center gap-2"><FaWhatsapp/>Whatsapp</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}