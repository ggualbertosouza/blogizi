'use client'
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { useParams, useRouter } from "next/navigation"

const PostsPage = () => {
    const router = useRouter()
    const params = useParams()
    const getPosts = useQuery(api.posts.get)


    const onClick = (id: string) => {
        router.push(`/post/${id}`)
    }

    return(
        <>
            {getPosts?.map((post) => (
                <div 
                key={post._id}
                onClick={() => onClick(post._id)}
                className="w-64 border p-2 cursor-pointer"
                >
                    <h2>
                    {post.title}
                    </h2>
                    <p>{post.slug}</p>
                </div>
            ))}
        </>
    )
}

export default PostsPage