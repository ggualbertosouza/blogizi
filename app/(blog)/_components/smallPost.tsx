import { postProps } from "@/types/postProps";
import Image from "next/image";

export const SmallPost = ({ description, title, author, slug }: postProps) => {
  return (
    <section className="flex flex-col md:flex-row gap-2">
      <div className="relative w-80 h-48">
        <Image
          src="/Image.png"
          fill
          alt="blog image"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 relative">
        <small className="text-primary text-sm">{author}</small>
        <h2 className="font-bold text-xl">{title}</h2>
        <p className="italic text-muted-foreground">{description}</p>
        <div className="bg-secondary w-fit py-1 px-2 rounded-full text-sm text-purple-600 absolute bottom-1">
          {slug}
        </div>
      </div>
    </section>
  );
};
