import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1 className='text-4xl text-white mb-4'>Home</h1>
      <Link to='/post' className='text-black font-bold text-xl hover:underline'>
        Go to All Post
      </Link>
    </div>
  )
}

export default Home
