import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/logo.png'


const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 '>
            <div>
                <img src={Logo} alt="Logo Image" style={{ width: '80px' }} />
            </div>
            {/* Menu */}

            <ul className='hidden md:flex'>
                <li>Inicio</li>
                <li>Sobre mi</li>
                <li>Habilidades</li>
                <li>Work</li>
                <li>Contacto</li>
            </ul>

            {/* {3 lines menu} */}
            <div className='md:hidden z-10'>
                <FaBars />
            </div>

            {/* Mobile Menu */}
            <div>
                <ul className='hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
                    <li className='py-6 text-4xl'>Inicio</li>
                    <li className='py-6 text-4xl'>Sobre mi</li>
                    <li className='py-6 text-4xl'>Habilidades</li>
                    <li className='py-6 text-4xl'>Work</li>
                    <li className='py-6 text-4xl'>Contacto</li>
                </ul>
            </div>


            {/* social Icons */}
            <div className='hidden'></div>
        </div>
    )
}

export default Navbar