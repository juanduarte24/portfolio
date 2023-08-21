import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center py-16 md:py-32 '>
            <form method='POST' action="https://getform.io/f/c99e7d48-e5f1-4cf2-b7aa-0142053a8952 "  className='flex flex-col mx-w-[600px] w-full justify-center items-center text-center '>
                <div>
                    <p className='text-4xl  font-bold inline  border-b-4 border-[#41b645ff] text-gray-300'>Contacto</p>
                    <p className='text-gray-300 py-4 text-xl text-left'>Contactame en el siguiente formulario </p>
                </div>
                <input className='  bg-[#ccd6f6]  p-2 w-96'type="text" placeholder='Nombre' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6] w-96' type="email" placeholder='Email' name='email' />
                <textarea className='bg-[#ccd6f6] p-2 w-96' name="message"  rows="5" placeholder='Dejame un mensaje'></textarea>
                <button className='text-white border-2 rounded hover:border-[#41b645ff] hover:bg-[#41b645ff] px-4 py-3 my-8 mx-auto flex items-center shadow-md shadow-[#040c16]'>Contactame</button>
            </form>
            
        </div>
    )
}

export default Contact