import React from 'react'
import { MainPage } from '../components'
import { getPosts } from '../services';

export default function Blog({posts}: any) {
  return (
        <MainPage posts={posts} />
    )
}

export async function getStaticProps() {
    let posts = (await getPosts()) || [];

    posts = posts.map((post:any) => post.node)
  
    return {
      props: { posts }
    }
}