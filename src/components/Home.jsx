import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';


const Home = () => {
    return (
        <div name='home' className='w-full min-h-screen bg-[#18202b] flex items-center'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center py-16 md:py-32 mt-3'>
                <p className='text-[#41b645] text-2xl '>Hola, mi nombre es</p>
                <h1 className='text-4xl sm:text-8xl font-semibold text-[#ccd6f6]'>[Juan Duarte]</h1>
                <h2 className='text-4xl sm:text-7xl  text-[#676d86] mt-3  '>Soy Desarrollador Full Stack </h2>
                
                <p className='text-[#8892c0] py-4 max-w-[700px] text-justify'>
                ¡Bienvenidos a mi portafolio! Soy un entusiasta de la tecnología y el aprendizaje continuo. Mi pasión por la programación me lleva a explorar nuevas tecnologías y a adaptarme rápidamente a los cambios. Mi portafolio refleja excelencia, creatividad e innovación en cada proyecto.
                </p>
                <div>
                    <Link to='proyects' smooth={true} duration={500}>
                        <button className='text-white group border-2 rounded px-6 py-3 my-2 flex items-center hover:bg-[#41b645ff] hover:border-[#41b645ff] shadow-md shadow-[#040c16]'>
                            Proyectos
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-4 hover:' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
