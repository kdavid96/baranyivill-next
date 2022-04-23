import React from 'react'
import { PostCard } from './index'

function Blog({posts}) {
    return (
        <div>
            {posts?.sort((a,b) => (a.createdAt > b.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? -1 : 0)).map((post, index) => (<PostCard post={post} key={index}/>))}
        </div>
    )
}

export default Blog