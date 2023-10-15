import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import parse from 'html-react-parser'
const SinglePost = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [singleArticle, setSingleArticle] = useState({})

  useEffect(() => {
    setLoading(true)
    async function getSingleArticle() {
      try {
        const response = await fetch(
          `https://blog.hsb.co.id/wp-json/wp/v2/posts/${id}`
        )
        const data = await response.json()
        console.log(data)
        setSingleArticle(data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getSingleArticle()
  }, [])
  const { title, content } = singleArticle
  return (
    <>
      <div className='text-left text-blue-800'>
        <Link to={'/'}>Go back to all posts</Link>
      </div>
      <main className='text-gray-900 py-8 flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold mb-8'>{title?.rendered}</h1>
        <article className='prose lg:prose-lg max-w-4xl prose-img:mx-auto'>{parse(`${content?.rendered}`)}</article>
      </main>
    </>

  )
}

export default SinglePost
