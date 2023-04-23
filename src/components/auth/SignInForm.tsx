import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function SignInForm() {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const pushToSignUp = (e: FormEvent) => {
    e.preventDefault();
    router.push("/auth/signup");
  };

  const clearSignInForm = (e: FormEvent) => {
    e.preventDefault();

    setUsername("");
    setPassword("");
  };
  return (
    <>
      {" "}
      <form>
        <Card className="w-[25rem]">
          <CardHeader>
            <CardTitle>Sign in</CardTitle>
            <CardDescription>
              You need to sign in to access the app
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Username</Label>
              <Input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <div className="flex justify-between w-full">
              <Button
                variant="ghost"
                type="button"
                onClick={(e) => clearSignInForm(e)}
              >
                Clear
              </Button>
              <Button type="submit">Sign in</Button>
            </div>
            <div className="flex items-center w-full gap-2">
              <CardDescription>Don&apos;t have an account ?</CardDescription>{" "}
              <Button
                variant="link"
                type="button"
                onClick={(e) => pushToSignUp(e)}
              >
                Sign up
              </Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </>
  );
}
