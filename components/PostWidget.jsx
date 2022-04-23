import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
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
        <div key={post?.title} className='bg-white shadow-lg mb-6 p-6 rounded-3xl flex items-center w-full pb-6'>
          <div className='w-16 flex-none'>
            <img src={post?.headerImage?.url} height="60px" width="60px" className='align-middle rounded-md' alt={post?.title} />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-lime-400 font-semibold font-xs'>
              {moment(post?.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post?.slug}`} key={post?.title}>
              <span className='text-md text-slate-800 cursor-pointer'>{post?.title}</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget