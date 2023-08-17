import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'


const Navbar = () => {


    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
    }

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
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <div>
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                    <li className='py-6 text-4xl'>Inicio</li>
                    <li className='py-6 text-4xl'>Sobre mi</li>
                    <li className='py-6 text-4xl'>Habilidades</li>
                    <li className='py-6 text-4xl'>Work</li>
                    <li className='py-6 text-4xl'>Contacto</li>
                </ul>
            </div>


            {/* social Icons */}
            <div className='hidden  lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff8b2d]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#db000bc4]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="/">
                           Resumen <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar