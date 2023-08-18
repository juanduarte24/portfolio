import React from 'react'

const About = () => {
    return (
        <div name='about' className='flex w-full h-screen bg-[#18202b] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-green-600'>About</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-rigth text-4xl font-bold '>

                        <p>

                            Hola, Soy Juan Duarte, un placer que estes por aqui. Por favor hecha un vistazo a mi Portafolio
                        </p>
                    </div>

                    <div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae odit nam suscipit labore, perspiciatis libero laboriosam quos error, incidunt in harum, dolorum maiores unde neque maxime possimus amet quo consectetur!
                        </p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default About