"use client"

import { AuthButton } from "../_components/ui/authButton";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Fieldset } from "@/components/ui/fieldset";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Legend } from "@/components/ui/legend";
import { useForm } from "react-hook-form";
import { AuthInput } from "../_components/ui/authInput";
import { Separator } from "@/components/ui/separator";
import { z } from "zod";
import { loginSchema } from "@/models/authModel";
import { zodResolver } from "@hookform/resolvers/zod"
import { OauthButtons } from "../_components/OauthButtons";

export default function Login() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: ""
    }
  });

  return (
    <>
      <CardContent >
        <Form {...form}>
          <form method="POST" className="flex flex-col items-center justify-center gap-8">
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
        <OauthButtons />
      </CardFooter>
    </>
  )
}  
