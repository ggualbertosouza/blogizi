"use client";

import { usePost } from "@/components/forms/post/usePost";
// Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";

export const PostForm = () => {
  const { errors, handlePost, handleSubmit, isSubmitting, register } =
    usePost();
    
  return (
    <>
      <form onSubmit={handleSubmit(handlePost)} className="flex flex-col gap-2">
        <div>
          <Label>Título:</Label>
          <Input 
          {...register("title")} 
          error={errors?.title?.message} 
          disabled={isSubmitting}
          />
        </div>
        <div>
          <Label>Categoria:</Label>
          <Input 
          {...register("category")} 
          error={errors?.category?.message} 
          disabled={isSubmitting}
          />
        </div>
        <div>
          <Label>Descrição:</Label>
          <Input 
          {...register("slug")} 
          error={errors?.slug?.message} 
          disabled={isSubmitting}
          />
        </div>
        <div>
          <Label>Conteúdo:</Label>
          <Textarea 
          {...register("content")} 
          error={errors?.content?.message} 
          disabled={isSubmitting}
          />
        </div>
        <Button
        type="submit"
        variant={isSubmitting ? 'secondary' : 'default'}
        disabled={isSubmitting}
        >
         {isSubmitting && <Spinner size='lg'/>}
          Postar
        </Button>
      </form>
    </>
  );
};
