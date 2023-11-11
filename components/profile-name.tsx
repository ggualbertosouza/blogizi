
// Components
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

// Clerk
import { SignOutButton, useUser } from "@clerk/clerk-react";

// icon
import { PenSquare } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/modeToggle";

export const ProfileName = () => {
  const router = useRouter();
  const { user } = useUser();



  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div 
          role="button" 
          className="flex items-center gap-2 group">
            <Avatar>
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
            <span className="text-sm">{user?.firstName}</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent forceMount>
          <div>
            <Button
            onClick={() => router.push('/post/create')}
              className="flex gap-1 items-center hover:bg-muted-foreground"
            >
              <PenSquare className="w-4 h-4" />
              Create a post
            </Button>
          </div>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="text-muted-foreground w-full cursor-pointer"
            asChild
          >
            <SignOutButton>LogOut</SignOutButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
