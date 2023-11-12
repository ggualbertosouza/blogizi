"use client";

import { NoteEditor } from "@/components/editor/noteEditor";
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
        <div className="flex gap-2 items-end">
          <div className="w-full">
            <Label className="text-xl font-bold">Título:</Label>
            <Input
              {...register("title")}
              error={errors?.title?.message}
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Label className="text-xl font-bold">Category:</Label>
            <select 
            {...register("slug")} 
            className='p-2 border rounded-md w-full'
            >
              <option>React</option>
              <option>NextJs</option>
              <option>TypeScript</option>
              <option>Estrutura de dados</option>
              <option>C#</option>
            </select>
          </div>
        </div>
        <div>
          <Label className="text-xl font-bold">Descrição:</Label>
          <Textarea
            {...register("description")}
            error={errors?.description?.message}
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Label className="text-xl font-bold">Conteúdo:</Label>
          <NoteEditor />
        </div>
        <Button
          type="submit"
          variant={isSubmitting ? "secondary" : "default"}
          disabled={isSubmitting}
        >
          {isSubmitting && <Spinner size="lg" />}
          Postar
        </Button>
      </form>
    </>
  );
};
