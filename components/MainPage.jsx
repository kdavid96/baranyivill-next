import React from 'react'
import { Blog, PostWidget } from '../components/index'

function MainPage({posts}) {
  return (
    <div className="container my-0 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8 mx-4">
            <Blog posts={posts}/>
        </div>
        <div className='col-span-1 lg:col-span-4 mx-4'>
            <div className="lg:sticky relative top-0 lg:top-32">
                <PostWidget />
            </div>
        </div>
    </div>
  )
}

export default MainPage