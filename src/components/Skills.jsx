import React from 'react'
import css from '../assets/css.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'


const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#18202b] text-gray-300'>
            {/* Container */}
            <div className=' max-w-[1000px] mx-auto px-8 flex flex-col justify-center py-16 md:py-32 mt-16'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#41b645ff]'>Experiencia</p>
                    <p className='pt-3'>- Estas son las tecnologias con las que eh trabajado</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={html} alt="HTML Icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={css} alt="HTML Icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={js} alt="HTML Icon" />
                        <p className='my-4'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={react} alt="HTML Icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={github} alt="HTML Icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={tailwind} alt="HTML Icon" />
                        <p className='my-4'>TAILWIND</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills