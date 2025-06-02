import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/ui/Logo";

export default function Login() {
  return (
    <div className="w-full flex justify-center items-center p-4 lg:h-screen">
      <Card className=" w-full border-0 shadow-none md:w-3/5">
        <CardHeader className="w-full bg-green-50 flex flex-col items-center gap-4 p-0">
          <CardTitle className="w-32 md:w-40">
            <Logo />
          </CardTitle>
          <CardAction className="w-full bg-primary flex p-4 justify-between rounded-[33px]">
            <Button className="bg-white text-primary w-1/2">Login</Button>
            <Button>Register</Button>
          </CardAction>
          <CardDescription>Discover your true self now</CardDescription>
        </CardHeader>
        <CardContent >
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}  
