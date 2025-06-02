import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

export const AuthInput = ({ className, ...props }: ComponentPropsWithoutRef<typeof Input>) => {
  return (
    <Input className={cn("relative p-6  rounded-[20px] border-primary text-sm placeholder:text-xs placeholder:text-light-grey md:placeholder:text-sm", className)} {...props} />
  )
}
