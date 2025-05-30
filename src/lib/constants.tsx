import { Logo } from "@/components/ui/Logo"
import { Cart } from "@/components/Cart"
import { SearchBar } from "@/components/SearchBar"
import { MobileSidebar } from "@/components/MobileSidebar"
import { JSX } from "react/jsx-dev-runtime"

// CONSTANTS

type navigationElementsType = {
  PATH: string,
  LABEL: string,
  CONTENT: JSX.Element | string
}

type primaryNavigationsType = {
  LOGO: navigationElementsType,
  HOME: navigationElementsType,
  SHOP: navigationElementsType,
  CONTACT: navigationElementsType
}

type secondaryNavigationsType = {
  REGISTER: navigationElementsType,
  SEARCH: navigationElementsType,
  CART: navigationElementsType
}

export const PRIMARY_NAVIGATION: primaryNavigationsType = {
  LOGO: {
    PATH: "/",
    LABEL: "LOGO",
    CONTENT: <Logo />
  },
  HOME: {
    PATH: "/",
    LABEL: "HOME",
    CONTENT: "Home"
  },
  SHOP: {
    PATH: "/Shop",
    LABEL: "SHOP",
    CONTENT: "Shop"
  },
  CONTACT: {
    PATH: "/Contact",
    LABEL: "CONTACT",
    CONTENT: "Contact"
  }
}

export const SECONDARY_NAVIGATION: secondaryNavigationsType = {
  REGISTER: {
    PATH: "/login",
    LABEL: "Login/Register",
    CONTENT: "Login/Register"
  },
  SEARCH: {
    PATH: "",
    LABEL: "SEARCH",
    CONTENT: <SearchBar />
  },
  CART: {
    PATH: "",
    LABEL: "CART",
    CONTENT: <Cart />
  },
}

export const SIDEBAR_NAVIGATION = Object.entries(PRIMARY_NAVIGATION).filter(el => {
  return el[0] !== "LOGO" && el[1]
})






