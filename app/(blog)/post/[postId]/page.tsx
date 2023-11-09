'use client'
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"


const SpecificPostPage = () => {
    const getPosts = useQuery(api.posts.get)

    return(
        <>
        {getPosts?.map((post) => (
            <div key={post._id}>
                <h2>{post.title}</h2>
                <p>{post.category}</p>
                <p>{post.slug}</p>
                <p>{post.content}</p>
            </div>
        ))}
        </>
    )
}

export default SpecificPostPage