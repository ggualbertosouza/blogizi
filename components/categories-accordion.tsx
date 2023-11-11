import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const categories = ["React", "NextJs", "TypeScript", "Estrutura de dados"];

export const CategoriesAccordion = () => {
  return (
    <>
      <Accordion type="single">
        <AccordionItem value="category">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent asChild>
            <div className="flex flex-col gap-1">
              {categories.map((item) => (
                <Button key={item} variant="outline">
                  {item}
                </Button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export const CategoriesDropDown = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center">
            Categories
            <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44">
          {categories.map((item) => (
            <DropdownMenuItem key={item} className="cursor-pointer">{item}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
