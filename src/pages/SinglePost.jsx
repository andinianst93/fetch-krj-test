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
    <div className='text-white'>
      <h1 className='text-4xl font-bold mb-4'>{title?.rendered}</h1>
      <article className='text-left'>{parse(`${content?.rendered}`)}</article>
    </div>
  )
}

export default SinglePost
