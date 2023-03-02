import React, { useState, useContext, useEffect } from 'react'

const url = 'https://blog.hsb.co.id/wp-json/wp/v2/posts'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [articles, setArticles] = useState([])

  const fetchArticle = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}`)
      const data = await response.json()
      console.log(data)
      setArticles(data)
    } catch (error) {
      console.log()
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchArticle()
  }, [])
  return (
    <AppContext.Provider value={{ articles, loading }}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
