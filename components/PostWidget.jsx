import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image'
import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  
  useEffect(() => {
    if(slug) {
      getSimilarPosts(categories, slug)
        .then((result) => {
          setRelatedPosts(result)
        });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result.sort((a,b) => (a.createdAt > b.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? -1 : 0)))
      });
    }
  }, [slug])
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl text-lime-400 mb-6 font-semibold border-b pb-4'>
        {slug ? 'Hasonló cikkek' : 'Legutóbbi cikkek'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post?.title} className='bg-white shadow-lg mb-6 p-6 rounded-3xl flex lg:flex-col items-center w-full pb-6'>
          <div className='w-auto flex-none'>
            <Image src={post?.headerImage?.url} height="60px" width="60px" className='align-middle rounded-md' alt={post?.title} />
          </div>
          <div className='flex-grow ml-4 lg:ml-0 grid grid-rows-1 lg:grid-rows-2 grid-cols-4 lg:grid-cols-1'>
            <div className='flex flex-col justify-start gap-0 lg:gap-2 items-center col-span-4 md:col-span-3'>
              <p className='text-lime-400 font-semibold font-xs'>
                {moment(post?.createdAt).format('MMM DD, YYYY')}
              </p>
              <Link href={`/post/${post?.slug}`} key={post?.title}>
                <span className='text-md text-slate-800 cursor-pointer lg:text-center'>{post?.title}</span>
              </Link>
            </div>
            <div className='col-span-1 hidden md:block text-center'>
              <Link href={`/post/${post?.slug}`} key={post?.title}>
                <button className='text-md text-white font-lg rounded-lg cursor-pointer bg-lime-400 p-4'>Olvasson tovább...</button>
              </Link>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget