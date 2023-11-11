import { Header } from "@/app/(blog)/_components/header"

const BlogLayout = ({children}: {children: React.ReactNode}) => {
    return(
        <div className="flex flex-col min-h-screen items-center">
            <Header />
            <main className="grow mt-20 container">
                {children}
            </main>
        </div>
    )
}


export default BlogLayout