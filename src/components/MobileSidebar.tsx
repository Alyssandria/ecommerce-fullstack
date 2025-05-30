"use client"

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription
} from "@/components/ui/sheet"
import { HamburgerMenu } from "@/components/ui/Hamburger"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef, useState } from "react";
import { SIDEBAR_NAVIGATION } from "@/lib/constants";
import { Dialog } from "@radix-ui/react-dialog";


// LOCAL CONSTANTS
const SidebarNav = [
  {
    PATH: "/",
    LABEL: "HOME",
    CLASSNAME: "",
    CONTENT: "Home"
  },
  {
    PATH: "/Shop",
    LABEL: "SHOP",
    CLASSNAME: "",
    CONTENT: "Shop"
  },
  {
    PATH: "/Contact",
    LABEL: "CONTACT",
    CLASSNAME: "",
    CONTENT: "Contact"
  }
]

export const MobileSidebar = ({ className, ...props }: ComponentPropsWithoutRef<"div">) => {

  console.log(SIDEBAR_NAVIGATION)
  const [isClicked, setIsClicked] = useState<Boolean>(false)

  const primaryNavButtons = SidebarNav.map(el => {
    return (
      <li key={el.LABEL} className="cursor-pointer">
        <Link href={el.PATH} className={cn("font-medium text-2xl", el.CLASSNAME)} >
          {el.CONTENT}
        </Link>
      </li>
    )
  });

  return (
    <Sheet>
      <SheetTrigger className={className}>
        <HamburgerMenu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="sr-only">Mobile Sidebar Navigation</SheetTitle>
          <SheetDescription className="sr-only">Mobile Sidebar Navigation</SheetDescription>
        </SheetHeader>
        <nav className="size-full">
          <ul className="size-full flex flex-col justify-center gap-6 items-center">
            {primaryNavButtons}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
};
