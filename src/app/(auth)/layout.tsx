'use client'

import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/ui/Logo";
import { AuthLink } from "./_components/ui/authLink";
import { useEffect, useRef } from "react";
import { useAuthLoadAnimation } from "./_animations/useAuthLoadAnimation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  // ANIMATE ON LOAD
  useAuthLoadAnimation(cardRef);

  return (
    <div ref={cardRef} className="w-full flex justify-center items-center p-4 lg:h-[85svh]">
      <Card className="w-full border-none shadow-none max-w-[455px] m-auto">
        <CardHeader className="flex flex-col items-center gap-4">
          <CardTitle className="w-32">
            <Logo />
          </CardTitle>
          <CardAction className="m-auto rounded-[44px] bg-primary w-full max-w-[277px] flex justify-center p-2 px-3">
            <AuthLink href={"/login"}>Login</AuthLink>
            <AuthLink href={"/register"}>Register</AuthLink>
          </CardAction>
          <CardDescription className="text-secondary-foreground">Discover your true self now</CardDescription>
        </CardHeader>
        {children}
      </Card>
    </div>
  );
}
