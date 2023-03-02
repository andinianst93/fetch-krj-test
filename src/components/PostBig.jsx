import React from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'
const PostBig = ({ yoast_head_json, title, excerpt, date, id }) => {
  return (
    <article className='max-w-xl md:pt-8 pt-4'>
      <Link to={`/post/${id}`}>
        {yoast_head_json.og_image.map((i, index) => {
          return (
            <img
              src={i.url}
              alt=''
              className='rounded-xl w-full md:h-fit lg:h-fit object-cover h-fit border-2'
              key={index}
            ></img>
          )
        })}
      </Link>
      <div className=''>
        <div className='flex justify-start mt-6'>
          <p className='text-center tracking-tight text-gray-900 capitalize'>
            {yoast_head_json.og_type}
          </p>
        </div>
        <Link to='#'>
          <h5 className='mb-2 md:text-2xl text-lg text-left font-bold text-gray-900 tracking-wide'>
            {title.rendered}
          </h5>
        </Link>
        <div className='mb-3 md:text-base text-sm font-normal text-gray-700 dark:text-gray-600 text-left line-clamp-2'>
          {parse(`${excerpt?.rendered}`)}
        </div>
        <div className='flex justify-between items-center'>
          <Link
            to='#'
            className='inline-flex items-center text-sm font-medium text-center text-gray-400'
          >
            {yoast_head_json.author}
          </Link>
          <p className='text-sm font-medium text-gray-400'>{date}</p>
        </div>
      </div>
    </article>
  )
}

export default PostBig
