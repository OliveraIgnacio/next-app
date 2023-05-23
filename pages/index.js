import styles from '../styles/Home.module.css'
import PageLayout from '../components/PageLayout'
import { useEffect, useState } from 'react'

export default function Home() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=cb2c2345a8ab475ebd59379b8945c1a9')
      .then(res => res.json())
      .then(response => {
        const { articles } = response
        setArticles(articles)
      })
  }, [])

  return (
    <PageLayout title='NewsApp - Home'>
      <div className={styles.container}>
        {articles.length === 0 && <p>Loading....</p>}
        {articles.length > 0 && articles.map((article, index) => {
          return (
            <div key={index}>
              <img alt={`Image for the article ${article.title}`} src={article.urlToImage} />
              <h2> {article.title}</h2>
              <p>{article.description}</p>
            </div>
          )
        })}
      </div >
    </PageLayout >
  )
}
