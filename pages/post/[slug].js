import React from 'react'
import Link from 'next/link'
import { getPosts, getPostDetails } from '../../services';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm } from '../../components';

const PostDetails = ({ post }) => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <Link href={`/blog`}><span className='rounded-lg bg-lime-400 text-white px-4 py-2 -mt-8 fixed top-40 left-2 cursor-pointer z-50'>Vissza</span></Link>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
            <div className='col-span-1 lg:col-span-8'>
                <PostDetail post={post} />
                <Author author={post?.author} />
                {/*<CommentsForm slug={post.slug} />
                <Comments slug={post.slug} />*/}
            </div>
            <div className='col-span-1 lg:col-span-4'>
                <div className='relative lg:sticky top-32'>
                    <PostWidget slug={post?.slug} />
                    {/*<Categories />*/}
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({ params }) {
    
    let data = await getPostDetails(params.slug);

    return {
      props: { post: data }
    }
}

export async function getStaticPaths() {
    let data = await getPosts();

    return {
      paths: data.map(({ node: { slug }}) => ({ params: { slug }})),
      fallback: true,
    }
}