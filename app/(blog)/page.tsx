"use client";

import { CardPost } from "@/app/(blog)/_components/cardPost";
import { HalfPost } from "@/app/(blog)/_components/halfPost";
import { LargePost } from "@/app/(blog)/_components/largePost";
import { SmallPost } from "@/app/(blog)/_components/smallPost";
// Components
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";

// Convex
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";

const HomePage = () => {
  const allPosts = useQuery(api.posts.get);
  const recentPost = useQuery(api.posts.getBestPost);
  const csharpPost = useQuery(api.posts.getCsharpPost);

  const mostRecent = recentPost?.slice(0, 1)
  const recents = recentPost?.slice(1,3)

  return (
    <section className="flex flex-col my-6 w-full">
      <div className="space-y-6 text-center">
        <Separator />
        <h1 className="text-8xl font-bold">The Blog</h1>
        <Separator />
      </div>
      <div className="relative bg-primary py-6 my-2">
        <h3 className="text-2xl text-center text-white">Guilherme Gualberto Souza</h3>
        <div className="absolute right-2 bottom-2 flex items-center gap-3 text-white">
          <p>Follow me:</p> 
          <Link href='https://github.com/ggualbertosouza'>
          <Github className=""/>
          </Link>
          <Link href='https://www.linkedin.com/in/guilhermegsz'>
          <Linkedin />
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 my-6">
        <div className="w-full md:w-1/2">
          {mostRecent ? (
            mostRecent?.map((post) => (
              <HalfPost
                key={post._id}
                date={post.date}
                title={post.title}
                description={post.description}
                slug={post.slug}
                id={post._id}
              />
            ))
          ) : (
            <Spinner />
          )}
        </div>
        <div className="w-full md:w-1/2  flex flex-col gap-4">
          {recents ? (
            recents?.map((post) => (
              <SmallPost
                id={post._id}
                key={post._id}
                date={post.date}
                title={post.title}
                description={post.description}
                slug={post.slug}
              />
            ))
          ) : (
            <Spinner />
          )}
        </div>
      </div>
      <Separator />
      <div className="my-6">
        {csharpPost ? (
          csharpPost?.map((post) => (
            <LargePost
              id={post._id}
              key={post._id}
              date={post.date}
              title={post.title}
              description={post.description}
              slug={post.slug}
            />
          ))
        ) : (
          <Spinner />
        )}
      </div>
      <Separator />
      <Link href="/post" className="flex items-center gap-1 my-2">
        All posts <ArrowRight className="w-4 h-4 text-muted-foreground" />
      </Link>
      <div className="flex flex-wrap mb-6 gap-16">
        {allPosts ? (
          allPosts?.map((post) => (
            <div key={post._id}>
              <CardPost
                id={post._id}
                date={post.date}
                title={post.title}
                description={post.description}
                slug={post.slug}
              />
            </div>
          ))
        ) : (
          <Spinner />
        )}
      </div>
    </section>
  );
};

export default HomePage;
