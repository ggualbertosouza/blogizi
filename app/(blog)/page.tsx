"use client";

import { CardPost } from "@/app/(blog)/_components/cardPost";
import { HalfPost } from "@/app/(blog)/_components/halfPost";
import { SmallPost } from "@/app/(blog)/_components/smallPost";
// Components
import { Separator } from "@/components/ui/separator";

// Convex
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const HomePage = () => {
  const posts = useQuery(api.posts.get);
  
  return (
    <section className="flex flex-col my-6 w-full">
      <div className="space-y-6 text-center">
        <Separator />
        <h1 className="text-8xl font-bold">The Blog</h1>
        <Separator />
      </div>
      {/* {posts?.map((post) => ( 
        <section 
        key={post._id}
        className="flex gap-4 my-6"
        >
          <div className="w-1/2">
            <HalfPost 
            author={post.author}
            title={post.title}
            description={post.description}
            slug={post.slug}
            />
          </div>
          <div 
          key={post._id}
          className="flex flex-col w-1/2 gap-4">
            <SmallPost 
            author={post.author}
            title={post.title}
            description={post.description}
            slug={post.slug}
            />
            <SmallPost 
            author={post.author}
            title={post.title}
            description={post.description}
            slug={post.slug}
            />
          </div>
        </section>
      ))} */}
      <div className="flex my-6 gap-24">
        {posts?.map((post) => (
          <div key={post._id}>
            <CardPost
              author={post.date}
              title={post.title}
              description={post.description}
              slug={post.slug}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePage;
