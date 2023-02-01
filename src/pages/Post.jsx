import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Post = () => {
    const [article, setArticle] = useState([])

    const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://blog.hsb.co.id/wp-json/wp/v2/posts',
        {
          headers: {
            authorization: ' xxxxxxxxxx',
            'Content-Type': 'application/json',
          },
        }
      )
      const data = response.data
      console.log(data);
      setArticle(data.article)
    } catch (error) {
      console.log(error.response)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
       {article.map ((item, index) => {
            return <div>
                <h1>{item.title.rendered}</h1>
            </div>
        })}
    </div>
  )
}

export default Post