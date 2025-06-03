'use client'
import { CardContent, CardFooter } from "@/components/ui/card";
import { Fieldset } from "@/components/ui/fieldset";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Legend } from "@/components/ui/legend";
import { useForm } from "react-hook-form";
import { AuthInput } from "../_components/ui/authInput";
import { AuthButton } from "../_components/ui/authButton";
import { Separator } from "@radix-ui/react-separator";
import { OauthButtons } from "../_components/OauthButtons";
import z from "zod";
import { signinSchema } from "@/models/authModel";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Register() {
  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirm: ""
    }
  });

  const handleSubmit = (values: z.infer<typeof signinSchema>) => {
    console.log(values);
  }

  return (
    <>
      <CardContent >
        <Form {...form}>
          <form method="POST" className="flex flex-col items-center justify-center gap-8" onSubmit={form.handleSubmit(handleSubmit)}>
            <Fieldset className="space-y-8">

              <Legend>Account Details/Credentials</Legend>

              <div className="flex flex-col items-center justify-between gap-8 w-full md:flex-row md:gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <AuthInput placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormDescription className="sr-only">
                        Email Address Credential
                      </FormDescription>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />


                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <AuthInput placeholder="Enter your username" {...field} />
                      </FormControl>
                      <FormDescription className="sr-only">
                        Username Credential
                      </FormDescription>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>

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
              <FormField
                control={form.control}
                name="confirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <AuthInput placeholder="Enter your Password" type="password" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Confirm Password Credential
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
