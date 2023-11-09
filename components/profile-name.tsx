// Components
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Clerk
import {useUser} from '@clerk/clerk-react'

export const ProfileName = () =>{
    const {} = useUser()

    return(
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div
                    role="button"
                    >
                        <Avatar>
                            <AvatarImage />
                        </Avatar>
                    </div>
                </DropdownMenuTrigger>
            </DropdownMenu>
        </>
    )
}