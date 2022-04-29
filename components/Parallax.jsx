import React from 'react'
import Image from 'next/image'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

function ParallaxImage() {
  return (
    <div className='width-full relative left-0'>
        <ParallaxProvider>
            <Parallax speed={10}>
            <Image
                src='/images/bulb_bg.webp'
                alt="Parallax bulbs"
                width="100%"
                height="50px"
            />
            </Parallax>
            
            <div className='absolute w-full h-full backdrop-blur-sm flex justify-evenly align-center' style={{top: -1.55 + 'rem'}}>
              <span className='flex justify-center items-center px-8 py-4 bg-lime-400 h-12 mx-0 my-auto rounded-3xl text-white font-medium text-4xl cursor-pointer'>Telefon</span>
              <span className='flex justify-center items-center px-8 py-4 bg-lime-400 h-12 mx-0 my-auto rounded-3xl text-white font-medium text-4xl cursor-pointer'>Facebook</span>
              <span className='flex justify-center items-center px-8 py-4 bg-lime-400 h-12 mx-0 my-auto rounded-3xl text-white font-medium text-4xl cursor-pointer'>Email</span>
            </div>
        </ParallaxProvider>
    </div>
  )
}

export default ParallaxImage