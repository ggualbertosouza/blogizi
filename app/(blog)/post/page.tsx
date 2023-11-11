'use client'
import { Spinner } from "@/components/ui/spinner"
import { api } from "@/convex/_generated/api"
import { useConvexAuth, useQuery } from "convex/react"
import { useRouter } from "next/navigation"

const PostsPage = () => {
    const { isLoading, isAuthenticated} = useConvexAuth()
    const router = useRouter()
    const getPosts = useQuery(api.posts.get)


    const onClick = (id: string) => {
        router.push(`/post/${id}`)
    }

    if(isLoading){
        return(
            <div className="flex items-center justify-center">
                <Spinner size='xl'/>
            </div>
        )
    }

    if(!isAuthenticated){
        return router.push('/')
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