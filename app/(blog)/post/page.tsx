'use client'
import { CardPost } from "@/app/(blog)/_components/cardPost"
import { SmallPost } from "@/app/(blog)/_components/smallPost"
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
            <div className="flex items-center justify-center h-full">
                <Spinner size='xl'/>
            </div>
        )
    }

    if(!isAuthenticated){
        return router.push('/')
    }
    
    return(
        <section className="h-full w-full flex flex-wrap gap-12">
            {getPosts?.map((post) => (
            <div 
            key={post._id}
            className='cursor-pointer border rounded'
            onClick={() => router.push(`/post/${post._id}`)}
            >
                <CardPost 
                title={post.title}
                slug={post.slug}
                description={post.description}
                />
            </div>
            ))}
        </section>
    )
}

export default PostsPage