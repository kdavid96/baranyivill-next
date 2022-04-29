import Head from 'next/head'
import { ParallaxImage, PostWidgetBottom, About, Services, Work, Contact, Popup, Footer } from '../components/index'
import { getCategories, getPosts } from '../services';

export default function Home({ posts }: any, { categories}: any) {
  return (
    <>
    <div className="container bg-white mx-auto px-10 mb-8">
      <Head>
        <title>Baranyi Épületvillamosság - Villanyszerelés okosan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*<div className='block lg:hidden'>
        <ParallaxImage />
      </div>*/}
    </div>
    <div className="flex flex-col items-center justify-center bg-white mx-auto px-0">
      <About />
      <Services />
      <Work />
      <Contact />
      <PostWidgetBottom categories={categories} slug={undefined}/>
      <div className='absolute top-0 left-0 w-full h-full'>
        <Popup />
      </div>
      <Footer />
    </div>
    </>
  )
}

export async function getStaticProps() {
  let posts = (await getPosts()) || [];

  let categories = (await getCategories()) || [];

  posts = posts.map((post:any) => post.node)

  return {
    props: { posts, categories }
  }
}
