import React from 'react'
import Image from 'next/image'

function SmallLogo() {
  return (
    <div className='w-full container'>
        <Image className='block relative mx-auto my-0 custom-img' src="/images/logo_official.webp" width='300px' height='300px' />
    </div>
  )
}

export default SmallLogo