import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

export const IconButton = ({ className, children, ...props }: ComponentPropsWithoutRef<typeof Button>) => {
  return (
    <Button size={"lg"} className={cn("cursor-pointer bg-secondary shadow-lg border border-light-grey hover:bg-light-grey/20", className)} {...props}>
      {children}
    </Button>
  )
}
