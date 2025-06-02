import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

export const IconButton = ({ className, children, ...props }: ComponentPropsWithoutRef<typeof Button>) => {
  return (
    <Button className={cn("block px-8 bg-secondary shadow-lg border border-light-grey", className)} {...props}>
      {children}
    </Button>
  )
}
