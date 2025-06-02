'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentPropsWithoutRef } from "react"

export const AuthLink = ({ href, children, className, ...props }: ComponentPropsWithoutRef<typeof Link>) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn("w-full text-center text-sm rounded-[20px] text-primary-foreground p-2",
        pathname === href
          ? "bg-secondary text-secondary-foreground"
          : "",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
