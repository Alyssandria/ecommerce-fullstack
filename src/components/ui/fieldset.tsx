import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Fieldset = ({ children, className, ...props }: ComponentPropsWithoutRef<"fieldset">) => {
  return (
    <fieldset className={cn("w-full border-none shadow-none", className)} {...props}>
      {children}
    </fieldset>
  )
}
