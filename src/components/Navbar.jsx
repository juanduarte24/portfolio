import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'
import pdf from '../utils/Cv/cv.pdf'


const Navbar = () => {


    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
    }
    const pdfUrl = '../utils/Cv/cv.pdf'

    return (
        <div className='fixed w-full h-[80px] flex justify-end items-center px-4 bg-[#18202b] text-gray-300 '>

            {/* Menu */}

            <ul className='hidden md:flex gap-3 '>
                <li className='bg-[#0a192f] hover:bg-[#5cb342] border  rounded p-3'>
                    <Link to='home' smooth={true} duration={500} >
                        Inicio
                    </Link>
                </li>
                <li className='bg-[#0a192f] hover:bg-[#5cb342] border  rounded p-3'>
                    <Link to='about' smooth={true} duration={500} >
                        Sobre mi
                    </Link>
                </li>
                <li className='bg-[#0a192f] hover:bg-[#5cb342] border  rounded p-3'>
                    <Link to='skills' smooth={true} duration={500} >
                        Habilidades
                    </Link>
                </li>
                <li className='bg-[#0a192f] hover:bg-[#5cb342] border  rounded p-3'>
                    <Link to='proyects' smooth={true} duration={500} >
                        Proyectos
                    </Link>
                </li>
                <li className='bg-[#0a192f] hover:bg-[#5cb342] border  rounded p-3'>
                    <Link to='contact' smooth={true} duration={500} >
                        Contacto
                    </Link>
                </li>
                <li>

                <button className='bg-[#0a192f] hover:bg-[#5cb342] border  rounded p-3'>
                    <a href={pdf} download=''>
                        Descargar CV
                    </a>
                </button>
                </li>
            </ul>
                

            {/* {3 lines menu} */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav
                    ?
                    <FaBars />
                    :
                    <FaTimes />}
            </div>

            {/* Mobile Menu */}
            //TODO Boton Mobile CV
            <div>
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                    <li className='py-5 mt-2 text-4xl'> <Link onClick={handleClick} to='home' smooth={true} duration={500} >
                        Inicio
                    </Link></li>
                    <li className='py-6 text-4xl'> <Link onClick={handleClick} to='about' smooth={true} duration={500} >
                        Sobre mi
                    </Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} to='skills' smooth={true} duration={500} >
                        Habilidades
                    </Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} to='proyects' smooth={true} duration={500} >
                        Proyectos
                    </Link></li>
                    <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500} >
                        Contacto
                    </Link></li>
                    
                </ul>
            </div>


            {/* social Icons */}
            <div className='hidden  lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a target='_blank' className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/juanduartedev/'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/juanduarte24">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ff8b2d]'>
                        <Link to='email' className='flex justify-between items-center w-full text-gray-300'  >
                            Email <HiOutlineMail size={30} />
                        </Link>
                    </li>


                </ul>
            </div>
        </div>
    )
}

export default Navbar