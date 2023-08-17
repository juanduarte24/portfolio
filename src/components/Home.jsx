import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#41b645] text-2xl'>Hola, mi nombre es</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>[ Juan Duarte ]</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#676d86]'>Soy Desarrollador Full Stack. </h2>
                <p className='text-[#8892c0] py-4 max-w-[700px]'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cumque optio beatae amet atque dignissimos iure voluptates qui assumenda autem id dolor, iste sit ea quisquam quo! Nostrum, blanditiis asperiores!Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, architecto quas ducimus, quaerat, praesentium sed cum sint alias consequatur et molestias temporibus. Itaque facilis placeat odit iste quisquam optio sequi!</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#41b645ff] hover:border-[#41b645ff] '>
                        Proyectos
                        <span className='group-hover:rotate-90 duration-300 '>
                        <HiArrowNarrowRight className='ml-4 hover:'/>
                        </span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Home