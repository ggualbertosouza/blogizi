// Types | NextJs
import { postProps } from "@/types/postProps";
import Image from "next/image";

export const LargePost = ({ description, title, date, slug }: postProps) => {
  return (
    <section className="flex flex-col md:flex-row gap-4">
      <div className="relative w-full md:w-1/2 h-64">
        <Image src="/Image.png" alt="blog image" fill />
      </div>
      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <small className="text-primary text-sm">{date}</small>
        <h2 className="font-bold text-xl">{title}</h2>
        <p className="italic text-muted-foreground">{description}</p>
        <div className="bg-secondary w-fit py-1 px-2 rounded-full text-sm text-purple-600 ">
          {slug}
        </div>
      </div>
    </section>
  );
};
