"use client";

import { CardPost } from "@/app/(blog)/_components/cardPost";
import { HalfPost } from "@/app/(blog)/_components/halfPost";
import { LargePost } from "@/app/(blog)/_components/largePost";
import { SmallPost } from "@/app/(blog)/_components/smallPost";
// Components
import { Separator } from "@/components/ui/separator";

// Convex
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

const HomePage = () => {
  const allPosts = useQuery(api.posts.get);
  const recentPost = useQuery(api.posts.getBestPost);
  const csharpPost = useQuery(api.posts.getCsharpPost);

  return (
    <section className="flex flex-col my-6 w-full">
      <div className="space-y-6 text-center">
        <Separator />
        <h1 className="text-8xl font-bold">The Blog</h1>
        <Separator />
      </div>
      <div className="flex flex-col md:flex-row gap-4 my-6">
        <div className="w-full md:w-1/2">
          {recentPost?.map((post) => (
            <HalfPost
              key={post._id}
              date={post.date}
              title={post.title}
              description={post.description}
              slug={post.slug}
            />
          ))}
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {allPosts?.map((post) => (
            <SmallPost
              key={post._id}
              date={post.date}
              title={post.title}
              description={post.description}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
      <Separator />
      <div className="my-6">
        {csharpPost?.map((post) => (
          <LargePost
            key={post._id}
            date={post.date}
            title={post.title}
            description={post.description}
            slug={post.slug}
          />
        ))}
      </div>
      <Separator />
      <div className="flex flex-wrap my-6 gap-16">
        {allPosts?.map((post) => (
          <div key={post._id}>
            <CardPost
              date={post.date}
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
