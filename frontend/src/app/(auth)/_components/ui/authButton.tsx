import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const AuthButton = ({ className, children, ...props }: ComponentPropsWithoutRef<typeof Button>) => {
  return (
    <Button className={cn("w-4/5 sm:w-1/2 p-6 rounded-[20px]", className)} {...props}>{children}</Button>
  )
}
