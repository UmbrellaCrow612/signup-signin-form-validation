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
import { FormEvent, useEffect, useState } from "react";

export default function SignUpForm() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");

  // Error states
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmedPasswordError, setConfirmedPasswordError] =
    useState<boolean>(false);
  const [usernameTakenError, setUsernameTakenError] = useState<boolean>(false);

  useEffect(() => {
    const checkUsername = async () => {
      const response = await fetch(`/api/user/check/username/${username}`);
      const { isTaken } = await response.json();
      setUsernameTakenError(isTaken);
    };

    if (username) {
      checkUsername();
    }
  }, [username]);

  const pushToSignIn = (e: FormEvent) => {
    e.preventDefault();
    router.push("/auth/signin");
  };

  const signUserUp = (
    e: FormEvent,
    username: string,
    password: string,
    confirmedPassword: string
  ) => {
    e.preventDefault();

    setUsernameError(false);
    setPasswordError(false);
    setConfirmedPasswordError(false);
    setUsernameTakenError(false);

    const usernameRegex = /^(?=.*[A-Za-z0-9])[A-Za-z\d@$!%*#?&]{10,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/;

    if (usernameTakenError) {
      return;
    }

    if (!usernameRegex.test(username)) {
      setUsernameError(true);
      return;
    }

    if (!passwordRegex.test(password)) {
      setPasswordError(true);
      return;
    }

    if (password !== confirmedPassword) {
      setConfirmedPasswordError(true);
      return;
    }
  };

  function clearForm() {
    setUsername("");
    setPassword("");
    setConfirmedPassword("");
    setUsernameError(false);
    setPasswordError(false);
    setConfirmedPasswordError(false);
    setUsernameTakenError(false);
  }
  return (
    <>
      {" "}
      <form
        onSubmit={(e) => signUserUp(e, username, password, confirmedPassword)}
      >
        <Card className="w-[25rem]">
          <CardHeader>
            <CardTitle>Sign up</CardTitle>
            <CardDescription>
              You need to sign up to access the app
            </CardDescription>
            {usernameError ||
            passwordError ||
            confirmedPasswordError ||
            usernameTakenError ? (
              <CardDescription className="text-destructive">
                {usernameError && (
                  <>
                    Username must be at least 10 characters long and contain at
                    least one special character or number.
                  </>
                )}
                {passwordError && (
                  <>
                    Password must be at least 10 characters long and contain at
                    least one number and one special character.
                  </>
                )}
                {confirmedPasswordError && <>Passwords do not match.</>}
                {usernameTakenError && (
                  <>Username already in use, please use another one.</>
                )}
              </CardDescription>
            ) : (
              <></>
            )}
          </CardHeader>
          <CardContent className="space-y-8">
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

            <div className="space-y-4">
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

              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Confirm Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={confirmedPassword}
                  onChange={(e) => setConfirmedPassword(e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <div className="flex justify-between w-full">
              <Button variant="ghost" type="button" onClick={() => clearForm()}>
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
    </>
  );
}
