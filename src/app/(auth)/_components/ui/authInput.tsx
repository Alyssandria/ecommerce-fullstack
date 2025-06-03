'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"
import { ComponentPropsWithoutRef, useState } from "react"

export const AuthInput = ({ type, className, ...props }: ComponentPropsWithoutRef<typeof Input>) => {
  const defaultInputClassname = "p-6  rounded-[20px] border-primary text-sm placeholder:text-xs placeholder:text-light-grey md:placeholder:text-sm"
  const [isHidden, setIsHidden] = useState<boolean>(true);

  return (
    type === 'password'
      ?
      <span className="relative">
        <Input className={cn(defaultInputClassname, "pr-12", className)} type={isHidden ? type : "text"} {...props} />
        <Button type="button"
          className="cursor-pointer bg-transparent p-0 absolute top-[50%] right-3 size-5 has-[>svg]:px-0 -translate-[40%] hover:bg-transparent"
          onClick={() => setIsHidden(prev => !prev)}
        >
          <Eye className={cn("text-primary", isHidden ? "block" : "hidden")} />
          <EyeOff className={cn("text-primary", isHidden ? "hidden" : "block")} />
        </Button>
      </span>
      :
      <Input className={cn(defaultInputClassname, className)} {...props} />
  )
}
