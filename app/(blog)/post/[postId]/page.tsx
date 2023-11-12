"use client";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";

const SpecificPostPage = () => {
  const params = useParams();

  const getPost = useQuery(api.posts.getById, {
    id: params.postId as Id<"posts">,
  });

  return (
    <section className="px-2 ">
      <Separator />
      {getPost ? getPost?.map((post) => (
        <div className="my-6 flex flex-col gap-3" key={post._id}>
          <h2 className="text-4xl font-bold text-center">{post.title}</h2>
          <div className="py-1 px-2 bg-primary/20 w-fit rounded-full text-primary text-sm">{post.slug}</div>
          <p className="italic" dangerouslySetInnerHTML={{__html: post.content}}></p>
        </div>
      )) : <Spinner />}
    </section>
  );
};

export default SpecificPostPage;
