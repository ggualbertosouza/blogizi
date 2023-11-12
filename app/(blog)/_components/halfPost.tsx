// Types | NextJs
import { postProps } from "@/types/postProps";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const HalfPost = ({ description, title, date, slug, id }: postProps) => {
  const router = useRouter()

  return (
    <section 
    onClick={() => router.push(`/post/${id}`)}
    className="flex flex-col gap-4 cursor-pointer">
      <div className="relative w-full h-64">
        <Image src="/Image.png" alt="blog image" fill />
      </div>
      <div className="flex flex-col gap-2">
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
