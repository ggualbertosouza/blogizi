import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/modeToggle";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="font-bold text-2xl">
        Blog
        <span className="bg-primary text-xl text-white rounded px-0.5">
          IZI
        </span>
      </Link>
      <div className="flex items-center gap-2">
        <Button variant="ghost" className="flex items-center gap-0.5">
          Categorias
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </Button>
        <ModeToggle />
      </div>
    </nav>
  );
};
