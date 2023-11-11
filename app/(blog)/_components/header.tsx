"use client";
// NextJs 
import Link from "next/link";

// Convex | clerk
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";


// Components
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { ProfileName } from "@/components/profile-name";

import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";
import { ModeToggle } from "@/components/ui/modeToggle";

export const Header = () => {
  const scroll = useScroll();
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <header
      className={cn(
        "container fixed top-0 z-50 flex items-center justify-between w-full py-2 bg-background",
        scroll && "border-b shadow-sm"
      )}
    >
      <Link href="/" className="font-bold text-2xl">
        Blog
        <span className="bg-primary text-xl text-white rounded px-0.5">
          IZI
        </span>
      </Link>
      <nav className="flex items-center gap-4">
        {isLoading && <Spinner />}
        {!isAuthenticated && !isLoading && (
          <SignInButton mode="modal">
            <Button>Login</Button>
          </SignInButton>
        )}
        {isAuthenticated && !isLoading && <ProfileName />}
        <ModeToggle />
      </nav>
    </header>
  );
};
