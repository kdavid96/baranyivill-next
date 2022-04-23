import Head from 'next/head'
import { ParallaxImage, PostWidget, About, Services, Work, Contact, Popup } from '../components/index'
import { getCategories, getPosts } from '../services';

export default function Home({ posts }: any, { categories}: any) {
  return (
    <>
    <div className="container bg-white mx-auto px-10 mb-8">
      <Head>
        <title>Baranyi Épületvillamosság - Villanyszerelés okosan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*<ParallaxImage />*/}
    </div>
    <div className="container bg-white mx-auto px-0 mb-8 md:px-10">
      <About />
      <Services />
      <Work />
      <Contact />
      <PostWidget categories={categories} slug={undefined}/>
      {/*<Popup />*/}
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
