import React from 'react'
import Image from 'next/image'

function SmallLogo() {
  return (
    <div className='w-full container mb-8'>
        <span className='block relative mx-auto my-0 custom-img border-4 border-lime-400 rounded-full'><Image src="/images/logo_official.webp" width='300px' height='300px' /></span>
    </div>
  )
}

export default SmallLogo