import React, { useState } from 'react'
import Image from 'next/image'

function Work() {
    const [imgIndex, setImgIndex] = useState(0);


    const imgUrls = ["/images/ipari.jpg", "/images/lakossagi.png", "/images/drawing.jpg"]

    return (
        <div className='container p-6 flex justify-center align-center flex-col'>
            <span className='my-0 mx-auto relative mb-8 px-12 py-4 bg-lime-400 rounded-2xl text-white font-semibold'>Korábbi munkáink</span>
            <div className='my-0 mx-auto relative'>
                <div className='my-0 mx-auto relative px-12 py-8 shadow-none md:shadow-md rounded-md width-full flex flex-col justify-center items-center lg:block'>
                    <button className={`px-4 py-2 rounded-lg ${imgIndex === 0 ? "bg-lime-400 text-white " : ""}active:bg-lime-400 active:text-white cursor-pointer`} onClick={() => setImgIndex(0)}>Ipari villanyszerelés</button>
                    <button className={`px-4 py-2 rounded-lg ${imgIndex === 1 ? "bg-lime-400 text-white " : ""}active:bg-lime-400 active:text-white cursor-pointer`} onClick={() => setImgIndex(1)}>Lakossági villanyszerelés</button>
                    <button className={`px-4 py-2 rounded-lg ${imgIndex === 2 ? "bg-lime-400 text-white " : ""}active:bg-lime-400 active:text-white cursor-pointer`} onClick={() => setImgIndex(2)}>Tervezés</button>
                </div>
                <div className='my-0 mx-auto p-8 rounded-md shadow-none md:shadow-md'>
                    <Image className='my-0 mx-auto rounded-md' src={imgUrls[imgIndex]} alt="Baranyi Épületvillamosság - Villanyszerelés okosan Kecskeméten és környékén" width='550px' height='550px'/>
                </div>
            </div>
        </div>
    )
}

export default Work