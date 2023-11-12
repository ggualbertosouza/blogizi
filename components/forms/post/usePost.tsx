// Types | react hook form | Zod
import { schema, schemaProps } from "@/components/forms/post/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Convex | sonner
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

export const usePost = () => {
  const create = useMutation(api.posts.create);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<schemaProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(schema),
  });

  const handlePost = (data: schemaProps) => {

    const date = new Date()
    const today = Intl.DateTimeFormat('pt-br').format(date)

    const promise = create({
      title: data.title,
      slug: `${data.slug}`,
      description: data.description,
      content: data.content,
      date: today
    });

    toast.promise(promise, {
      loading: "Creating a new post...",
      success: "Posted!",
      error: "Failed to post.",
    });

    reset();
  };

  return {
    register,
    handlePost,
    handleSubmit,
    errors,
    isSubmitting,
  };
};
