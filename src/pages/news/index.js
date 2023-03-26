const NewsArticle=({articles})=>{
    return(
        <div>
            <h1>News Article</h1>
            {articles.map(article=>{
                return(
                <div key={article.id}>
                    <h2>{article.id} {article.title} | {article.category}</h2>
                </div>
                )
            })}
        </div>
    )
}
export default NewsArticle;

export const getServerSideProps=async()=>{
    const response=await fetch("http://localhost:4000/news")
    const data=await response.json()

    return{
        props:{
            articles:data
        }
    }
}