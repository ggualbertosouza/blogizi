import { NoteEditor } from "@/components/editor/noteEditor"
import { PostForm } from "@/components/forms/post/postForm"

const CreatePostPage = () => {
    return(
        <section className="flex flex-col items-center justify-center mt-12">
            <h1 className="font-bold text-4xl">Create you post</h1>
            <div className="w-1/2">
            <PostForm />
            <NoteEditor />
            </div>
        </section>
    )
}

export default CreatePostPage