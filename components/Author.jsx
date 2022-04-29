import React from 'react'
import Image from 'next/image'

function Author({ author }) {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-lime-400'>
      <div className='absolute left-0 right-0 -top-14'>
        { author?.photo ? 
        (<Image unoptimized src={author?.photo?.url} height="100px" width="100px" className='align-middle rounded-full border-4 border-lime-400' alt={author?.name} />)
        :
        (<Image src={''} height="100px" width="100px" className='align-middle rounded-full border-4 border-lime-400' alt={author?.name} />)
        }
      </div>
      <h3 className='text-white my-4 text-xl font-bold'>{author?.name}</h3>
      <p className='text-white text-lg'>{author?.bio}</p>
    </div>
  )
}

export default Author