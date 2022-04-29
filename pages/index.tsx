import Head from 'next/head'
import { ParallaxImage, PostWidgetBottom, About, Services, Work, Contact, Popup, Footer, SmallLogo } from '../components/index'
import { getCategories, getPosts } from '../services';

export default function Home({ posts }: any, { categories}: any) {
  return (
    <>
    <div className="container bg-white mx-auto px-10 mb-8">
      <Head>
        <title>Baranyi Épületvillamosság - Villanyszerelés okosan Kecskeméten és környékén</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*<div className='block lg:hidden'>
        <ParallaxImage />
      </div>*/}
    </div>
    <div className="flex flex-col items-center justify-center bg-white mx-auto px-0">
      <div className='block lg:hidden'>
        <SmallLogo />
      </div>
      <h1 className='font-semibold text-lime-400 text-3xl text-center mb-10'>Baranyi Épületvillamosság <br/><span className='font-bold text-slate-500 text-2xl'>Villanyszerelés okosan Kecskeméten és környékén</span></h1>
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
