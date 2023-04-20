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
import { FormEvent } from "react";

export default function Page() {
  const router = useRouter();

  const pushToSignIn = (e: FormEvent) => {
    e.preventDefault();
    router.push("/auth/signin");
  };
  return (
    <main className="flex items-center justify-center min-h-screen">
      <form>
        <Card className="w-[25rem]">
          <CardHeader>
            <CardTitle>Sign up</CardTitle>
            <CardDescription>
              You need to sign up to access the app
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Username</Label>
              <Input
                type="text"
                id="username"
                placeholder="Username"
                required
              />
            </div>

            <div className="space-y-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Confirm Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <div className="flex justify-between w-full">
              <Button variant="ghost" type="button">
                Clear
              </Button>
              <Button type="submit">Create</Button>
            </div>
            <div className="flex items-center w-full gap-2">
              <CardDescription>Already have an account ?</CardDescription>{" "}
              <Button
                variant="link"
                type="button"
                onClick={(e) => pushToSignIn(e)}
              >
                Sign in
              </Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </main>
  );
}
