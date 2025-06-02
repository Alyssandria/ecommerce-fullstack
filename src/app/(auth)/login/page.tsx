"use client"

import { AuthButton } from "../_components/ui/authButton";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Fieldset } from "@/components/ui/fieldset";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Legend } from "@/components/ui/legend";
import { useForm } from "react-hook-form";
import { AuthInput } from "../_components/ui/authInput";
import { Separator } from "@/components/ui/separator";
import { IconButton } from "./_components/iconButtons";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function Login() {
  const form = useForm();

  return (
    <>
      <CardContent >
        <Form {...form}>
          <form className="flex flex-col items-center justify-center gap-8">
            <Fieldset className="space-y-8">

              <Legend>Login Credentials</Legend>

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <AuthInput placeholder="Enter your username" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Username Credential
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <AuthInput placeholder="Enter your Password" type="password" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Password Credential
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </Fieldset>

            <AuthButton className="">Login</AuthButton>
          </form>
        </Form>
      </CardContent >
      <CardFooter className="w-full flex flex-col gap-4">
        <div className="w-full flex items-center gap-4">
          <div className="w-full">
            <Separator className="w-full" />
          </div>
          <span className="text-light-grey text-xs text-nowrap">or continue with</span>
          <div className="w-full">
            <Separator className="w-full" />
          </div>
        </div>

        <div className="flex gap-2 justify-between items-center w-full">
          <IconButton>
            <FcGoogle />
          </IconButton>
          <IconButton>
            <FaFacebook className="text-2xl fill-[#1778F2]" />
          </IconButton>
          <IconButton>
            <FcGoogle />
          </IconButton>
        </div>
      </CardFooter>
    </>
  )
}  
