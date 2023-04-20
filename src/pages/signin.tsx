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

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center">
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
                required
              />
            </div>

            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" type="button">
              Clear
            </Button>
            <Button type="submit">Login</Button>
          </CardFooter>
        </Card>
      </form>
    </main>
  );
}
