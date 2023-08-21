import React from 'react'
import pokedex from '../assets/pokedex.png'
import weather from '../assets/weather.jpg'
import rick from '../assets/rick.png'

const Proyects = () => {
    return (
        <div name='proyects' className='w-full md:h-screen text-gray-300 bg-[#18202b]'>
            <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center py-16 md:py-32 '>
                <div className='pb-8 text-center'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#41b645ff]'>
                        <br />
                        <br />
                        Proyectos</p>
                    <p className='py-4 text-xl text-gray-300'>Estos son mis proyectos mas recientes!</p>
                </div>


                {/* Container */}
                <div
                    className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div style={{ backgroundImage: `url(${pokedex})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>


                        {/* Hover Efffect */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React Js Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a target='_blank' href="https://pokedex-by-duarte.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a target='_blank' href="https://github.com/juanduarte24/Pokedex-main">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${rick})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>


                        {/* Hover Efffect */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React Js Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a target='_blank' href="https://rick-and-morty-app27.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a target='_blank' href="https://github.com/juanduarte24/Entregable-3-rick-and-morty-main-main">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${weather})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>


                        {/* Hover Efffect */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React Js Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a target='_blank' href='https://weatherapp-27.netlify.app/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a target='_blank' href="https://github.com/juanduarte24/app-clima">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyects