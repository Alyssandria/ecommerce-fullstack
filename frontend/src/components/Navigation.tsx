import { PRIMARY_NAVIGATION, SECONDARY_NAVIGATION } from "@/lib/constants";
import { cn } from "@/lib/utils"
import { type ClassNameValue } from "tailwind-merge";
import { MobileSidebar } from "./MobileSidebar";
import Link from "next/link";

// LOCAL CONSTANTS
export const Navigation = () => {
  const primaryNavButtons = Object.entries(PRIMARY_NAVIGATION).map(el => el[1]).map(el => {
    let className: ClassNameValue;

    if (el.LABEL === "LOGO") {
      className = "w-30"
    } else {
      className = "max-md:hidden"
    }

    return (
      <Link href={el.PATH} className={cn(className)} key={el.LABEL}>
        {el.CONTENT}
      </Link>
    )
  });

  const secondaryNavButtons = Object.entries(SECONDARY_NAVIGATION).map(el => el[1]).map(el => {
    let content;

    if (el.LABEL === "Login/Register") {
      content = (
        <Link href={el.PATH} className={cn("w-fit max-lg:hidden")} key={el.LABEL}>
          {el.CONTENT}
        </Link>)
    } else {
      content = <li key={el.LABEL} className={cn("size-6")}>{el.CONTENT}</li>;
    }

    return content;
  })
  return (
    <header className="py-4 w-full flex gap-4 justify-between items-center">
      <nav className="primary-nav flex gap-4">
        {primaryNavButtons}
      </nav>
      <nav className="seconadry-nav flex gap-4">
        {secondaryNavButtons}
        <MobileSidebar className="size-6 lg:hidden" />
      </nav>
    </header>
  )
}
