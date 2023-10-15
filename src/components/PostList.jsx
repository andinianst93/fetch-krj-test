import React from 'react'
import PostOne from './PostOne'
import { useGlobalContext } from '../context/context'
import PostBig from './PostBig'
const PostList = () => {
  const { articles, loading } = useGlobalContext()
  const bigArt = articles.slice(0, 2)
  const smallArt = articles.slice(2, articles.length)
  return (
    <section>
      <div className='py-8 px-4 mx-auto'>
        <h1 className='text-3xl font-bold mb-8'>All Posts</h1>
        <div className='space-y-8 grid md:gap-8 lg:grid-cols-2 sm:gap-6 xl:gap-8 lg:space-y-0'>
          {bigArt.map((item, index) => {
            return <PostBig key={index} {...item} />
          })}
        </div>
        <div className='space-y-8 mt-[55px] lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0'>
          {smallArt.map((kecil, index) => {
            return <PostOne key={kecil.id} {...kecil} />
          })}
        </div>
      </div>
    </section>
  )
}

export default PostList
