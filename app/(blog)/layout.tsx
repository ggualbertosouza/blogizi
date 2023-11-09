import { Header } from "@/app/(blog)/_components/header"

const BlogLayout = ({children}: {children: React.ReactNode}) => {
    return(
        <div className="container flex flex-col min-h-screen py-2">
            <header>
                <Header />
            </header>
            <main className="grow">
                {children}
            </main>
        </div>
    )
}


export default BlogLayout