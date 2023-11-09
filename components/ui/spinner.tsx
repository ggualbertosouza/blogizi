import { Loader2 } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const spinnerVariants = cva(
    'animate-spin text-muted-foreground',
    {
        variants: {
            size: {
                sm: 'w-4 h-4',
                lg: 'w-8 h-8',
                xl: 'w-10 h-10'
            }
        },
        defaultVariants: {
            size: 'sm'
        }
    },
)

 interface spinnerProps extends VariantProps<typeof spinnerVariants> {}

export const Spinner = ({size, ...props}: spinnerProps) => {
    return(
        <Loader2 className={cn(spinnerVariants({size}))} {...props}/>
    )
}