import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

function ParallaxImage() {
  return (
    <div className='width-full relative left-0'>
        <ParallaxProvider>
            <Parallax speed={10}>
            <img
                src='/images/bulb_bg.webp'
                alt="Parallax bulbs"
                width="100%"
                height="50px"
            />
            </Parallax>
            
            <div className='absolute top-0 w-full h-full backdrop-blur-sm flex justify-evenly align-center'>
              <span className='flex justify-center items-center px-8 py-4 bg-lime-400 h-12 mx-0 my-auto rounded-3xl text-white font-semibold text-4xl'>Telefon</span>
              <span className='flex justify-center items-center px-8 py-4 bg-lime-400 h-12 mx-0 my-auto rounded-3xl text-white font-semibold text-4xl'>Facebook</span>
              <span className='flex justify-center items-center px-8 py-4 bg-lime-400 h-12 mx-0 my-auto rounded-3xl text-white font-semibold text-4xl'>Email</span>
            </div>
        </ParallaxProvider>
    </div>
  )
}

export default ParallaxImage