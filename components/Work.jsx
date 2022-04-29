import React, { useState } from 'react'
import Image from 'next/image'

function Work() {
    const [imgIndex, setImgIndex] = useState(0);


    const imgUrls = ["/images/ipari.jpg", "/images/lakossagi.png", "/images/drawing.jpg"]

    return (
        <div className='container p-6 flex justify-center align-center flex-col'>
            <span className='my-0 mx-auto relative mb-8 px-12 py-4 bg-lime-400 rounded-2xl text-white font-semibold'>Korábbi munkáink</span>
            <div className='left-1/2 -translate-x-1/2 max-w-3xl relative flex flex-col md:flex-row justify-center align-center gap-4'>
                <div className='relative px-12 py-8 shadow-none md:shadow-md rounded-md flex gap-15 flex-col justify-center items-center flex-row sm:flex-col gap-1 sm:gap-12'>
                    <button className={`w-full px-4 py-2 rounded-lg ${imgIndex === 0 ? "bg-lime-400 text-white " : ""}active:bg-lime-400 active:text-white cursor-pointer`} onClick={() => setImgIndex(0)}>Ipari villanyszerelés</button>
                    <button className={`w-full px-4 py-2 rounded-lg ${imgIndex === 1 ? "bg-lime-400 text-white " : ""}active:bg-lime-400 active:text-white cursor-pointer`} onClick={() => setImgIndex(1)}>Lakossági villanyszerelés</button>
                    <button className={`w-full px-4 py-2 rounded-lg ${imgIndex === 2 ? "bg-lime-400 text-white " : ""}active:bg-lime-400 active:text-white cursor-pointer`} onClick={() => setImgIndex(2)}>Tervezés</button>
                </div>
                <div className='relative p-8 rounded-md shadow-none md:shadow-md w-full my-0 mx-auto'>
                    <Image className='rounded-md' src={imgUrls[imgIndex]} alt="Baranyi Épületvillamosság - Villanyszerelés okosan Kecskeméten és környékén" layout='responsive' width="250px" height="250px" />
                </div>
            </div>
        </div>
    )
}

export default Work