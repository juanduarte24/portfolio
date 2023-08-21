import React from 'react'

const About = () => {
    return (
        <div name='about' className='flex w-full h-screen bg-[#18202b] text-gray-300'>
            <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center py-16 md:py-32 '>
                <div className='max-w-[1000px] w-full text-center '>
                    <div className=' pb-8  mt-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-green-600'>Sobre mi</p>
                    </div>
                    
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 '>
                    <div className='sm:text-rigth text-4xl font-bold  '>

                        <p>

                            Hola, Soy Juan Duarte, un placer que estés por aquí. Por favor hecha un vistazo a mi portafolio
                        </p>
                    </div>

                    <div>
                        <p className='text-justify'>
                            Apasionado de la tecnología y la programación. Enfocado en desafíos y
                            resultados destacados, con habilidades de aprendizaje rápido y
                            adaptabilidad. Comprometido con la innovación y deseoso de contribuir en
                            entornos dinámicos
                        </p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default About