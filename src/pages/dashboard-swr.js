import {useSWR} from "swr"


export const fetcher= async ()=>{
    const response= await fetch('http://localhost:4000/dashboard')
    const data= await response.json()
    return data
}

const DashboardSWR=()=>{
    const {data, error}= useSWR("dashboard",fetcher )

    if(error) return "An Error has occured"
    if(!data) return "Loadin..."

    return(
        <div>
            <h2>Posts -{data.posts}</h2>
            <h2>Likes -{data.likes}</h2>
            <h2>Followers -{data.follower}</h2>
            <h2>Following -{data.following}</h2>
        </div>
    )

}
export default DashboardSWR