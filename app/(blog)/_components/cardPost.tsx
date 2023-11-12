import { postProps } from "@/types/postProps";
import Image from "next/image";
import { useRouter } from "next/navigation";



export const CardPost = ({ description, title, date, slug, id }: postProps) => {
  const router = useRouter()

  return (
    <section 
    onClick={() => router.push(`/post/${id}`)}
    className="w-full md:w-64 flex flex-col gap-3 cursor-pointer"
    >
      <div className="relative  aspect-square">
        <Image src="/Image.png" fill alt="blog image" className="object-cover"/>
      </div>
      <div className="flex flex-col gap-2 relative p-1">
        <small className="text-primary text-sm">{date}</small>
        <h2 className="font-bold text-xl line-clamp-2">{title}</h2>
        <p className="italic text-muted-foreground line-clamp-3">{description}</p>
        <div className="bg-secondary w-fit py-1 px-2 rounded-full text-sm text-purple-600">
          {slug}
        </div>
      </div>
    </section>
  );
};
