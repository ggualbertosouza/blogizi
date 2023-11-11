"use client";

import { usePost } from "@/components/forms/post/usePost";

// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const PostForm = () => {
  const [category, setCategory] = useState("");
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
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>Select</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={category}
                  onValueChange={setCategory}
                >
                  <DropdownMenuRadioItem value="react">
                    React
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="nextjs">
                    NextJs
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="typeScript">
                    TypeScript
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="estruturaDeDados">
                    Estrutura de dados
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="csharp">C#</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Input
              {...register("slug")}
              value={category}
              disabled={true}
              placeholder="Category"
            />
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
          <Textarea
            {...register("content")}
            error={errors?.content?.message}
            disabled={isSubmitting}
          />
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
