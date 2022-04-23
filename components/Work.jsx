import React from 'react'
import Image from 'next/image'

function Work() {

    return (
        <div className='p-6 flex justify-center align-center flex-col'>
            <span className='my-0 mx-auto relative mb-8 px-12 py-4 bg-lime-400 rounded-2xl text-white font-semibold'>Korábbi munkáink</span>
            <div className='my-0 mx-auto relative'>
                <div className='my-0 mx-auto relative px-12 py-8 shadow-md rounded-md width-full'>
                    <span className='px-4 py-2 rounded-lg active:bg-lime-400 active:text-white cursor-pointer'>Ipari villanyszerelés</span>
                    <span className='px-4 py-2 rounded-lg active:bg-lime-400 active:text-white cursor-pointer'>Lakossági villanyszerelés</span>
                    <span className='px-4 py-2 rounded-lg active:bg-lime-400 active:text-white cursor-pointer'>Tervezés</span>
                </div>
                <div className='my-0 mx-auto p-8 rounded-md shadow-md'>
                    <Image className='my-0 mx-auto rounded-md' src="/images/ipari.jpg" alt="villanyszereles_kep" width='550px' height='550px'/>
                </div>
            </div>
        </div>
    )
}

export default Work