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
        <div className='fixed w-full h-[70px] flex justify-end items-center px-4 bg-[#18202b] text-gray-300 '>

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
                        Tecnologias
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

                    <button className='bg-[#0a192f] hover:bg-[#5cb342] border  rounded p-3 '>
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

            {/* Mobile Menu 
            TODO Mobile Cv */}

            <div>


                <ul className={!nav ? 'hidden' : 'absolute  left-0 w-full h-screen bg-[#18202b] top-0 '}>
                    <p className='p-4 text-4xl mt-3 '>
                        Portafolio
                    </p>
                    <div className='mt-6 flex flex-col text-xl '>



                        <Link onClick={handleClick} to='home' smooth={true} duration={500} >
                            <li className='py-2 flex justify-between hover:text-[#5cb342]'>
                                Inicio <i className='bx bxs-chevron-right mt-1'></i>
                            </li>


                        </Link>

                        <Link onClick={handleClick} to='about' smooth={true} duration={500} >
                            <li className=' py-2 flex justify-between hover:text-[#5cb342]'>
                                Sobre mi <i className='bx bxs-chevron-right mt-1'></i>
                            </li>
                        </Link>

                        <Link onClick={handleClick} to='skills' smooth={true} duration={500} >
                            <li className='py-2 flex justify-between hover:text-[#5cb342]'>
                                Tecnologias <i className='bx bxs-chevron-right mt-1'></i>
                            </li>
                        </Link>

                        <Link onClick={handleClick} to='proyects' smooth={true} duration={500} >
                            <li className='py-2 flex justify-between hover:text-[#5cb342]'>
                                Proyectos <i className='bx bxs-chevron-right mt-1'></i>
                            </li>
                        </Link>
                        <Link onClick={handleClick} to='contact' smooth={true} duration={500} >
                            <li className=' py-2 flex justify-between hover:text-[#5cb342] '>
                                Contacto <i className='bx bxs-chevron-right mt-1'></i>
                            </li>
                        </Link>
                        <button className='bg-[#0a192f] hover:bg-[#5cb342] border  rounded p-3 mx-auto mt-6 '>
                            <a href={pdf} download=''>
                                Descargar CV
                            </a>
                        </button>
                    </div>

                </ul>

            </div>


            {/* social Icons */}
            <div className='hidden  lg:flex fixed flex-col top-[35%] right-0'>
                <ul>
                    <li className='w-[150px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a target='_blank' className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/juanduartedev/'>
                            <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[150px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/juanduarte24">
                            <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[150px] h-[60px] flex justify-between items-center mr-[-100px] hover:ml-[-10px] duration-300 bg-[#ff8b2d]'>
                        <Link to='email' className='flex justify-between items-center w-full text-gray-300'  >
                            <HiOutlineMail size={30} />
                        </Link>
                    </li>


                </ul>
            </div>
        </div>
    )
}

export default Navbar