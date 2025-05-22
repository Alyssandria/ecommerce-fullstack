import { cn } from "@/lib/utils"
import { Logo } from "./ui/Logo"

// CONSTANTS
const NAVIGATION_ELEMENTS = [
    {
        PATH: "/",
        NAME: "LOGO",
        className: "",
        content: <Logo />
    },
    {
        PATH: "/",
        NAME: "HOME",
        className: "",
        content: "home"
    },
    {
        PATH: "/shop",
        NAME: "SHOP",
        className: "",
        content: "shop"
    },
    {
        PATH: "/contact",
        NAME: "CONTACT",
        className: "",
        content: "contact"
    },
    {
        PATH: "/login",
        NAME: "LOGIN/REGISTER",
        className: "",
        content: "Login/Register"
    },
]

export const Navigation = () => {

    const navLinks = NAVIGATION_ELEMENTS.map(el => {
        return (
            <a href={el.PATH} className={cn("", el.className)} key={el.NAME}>
                {el.content}
            </a>
        )

    })
    return(
        <header>
            <nav>
                <ul className="w-full flex justify-around items-center">
                    {navLinks}
                </ul>
            </nav>
        </header>
    )
}