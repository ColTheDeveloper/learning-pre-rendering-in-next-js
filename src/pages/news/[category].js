const ArticleByCategories=({article, category})=>{
    return(
        <div>
            <h1>Showing Article for category <i>{category}</i></h1>
            {article.map(art=>{
                return(
                    <div key={art.id}>
                        <h2>{art.id} {art.title}</h2>
                        <p>{art.description}</p>
                        <hr />

                    </div>
                )
            })}


        </div>

    )
}
export default ArticleByCategories

export const getServerSideProps=async(context)=>{
    const {params,req,res,query}=context
    console.log(query)
    console.log(req.headers.cookie)
    res.setHeader("Set-Cookie", ["name=ColTheDeveloper"])
    const {category}=params
    const response=await fetch(`http://localhost:4000/news?category=${category}`)
    const data=await response.json()

    return{
        props:{
            article:data,
            category,
        }
    }
}