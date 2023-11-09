"use client";
// NextJs
import Link from "next/link";

// Convex | clerk
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";

// icons
import { ChevronDown } from "lucide-react";

// Components
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/modeToggle";
import { Spinner } from "@/components/ui/spinner";

export const Header = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="font-bold text-2xl">
        Blog
        <span className="bg-primary text-xl text-white rounded px-0.5">
          IZI
        </span>
      </Link>
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="flex items-center gap-0.5">
          Categorias
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </Button>

        <div className="flex items-center gap-2">
          {isLoading && (<Spinner />)}
          {!isAuthenticated && !isLoading && (
          <Button>
            <SignInButton mode="modal" />
          </Button>
          )}
          {isAuthenticated && !isLoading && (
            
          )}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};
