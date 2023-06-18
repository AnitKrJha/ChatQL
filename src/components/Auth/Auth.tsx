import { Session } from "next-auth";
import React, { useState } from "react";
import { Button } from "../ui/Button/button";
import { toast } from "react-hot-toast";
import { FcCollaboration, FcGoogle } from "react-icons/fc";
import { signIn, signOut } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { ButtonLoading } from "../ui/Button/buttonloading";
import { Input } from "../ui/input";

type Props = {
  session: Session | null;
  reloadSession: () => void;
};

//this componenet will render when no UserName

const Auth = ({ session, reloadSession }: Props) => {
  return (
    <>
      <div className="flex min-h-[100dvh]  border-primary border">
        <div className="flex flex-col gap-3 items-center  justify-center m-auto">
          {session ? <AuthNoUserName /> : <AuthNoSession />}
        </div>
      </div>
    </>
  );
};

export default Auth;

function AuthNoSession() {
  return (
    <>
      <span className="flex gap-2">
        <FcCollaboration /> Chat QL
      </span>

      <Button
        variant="secondary"
        className="flex w-full justify-center gap-2 items-center"
        onClick={() => {
          signIn("google");
        }}
      >
        <FcGoogle />
        Login With Google
      </Button>
    </>
  );
}
function AuthNoUserName() {
  const [loading, setLoading] = useState<"save" | "logout" | "none">("none");

  const [username, setUsername] = useState("");

  const onSubmit = () => {
    setLoading("save");
    setTimeout(() => {
      setLoading("none");
    }, 2000);
  };

  return (
    <>
      <p>Create a username for yourself</p>
      <Input onChange={(e) => setUsername(e.target.value)} value={username} />
      <ButtonLoading
        onClick={onSubmit}
        isLoading={loading === "save"}
        variant="secondary"
        loadingText="saving..."
        className="w-full"
      >
        Save
      </ButtonLoading>
      <ButtonLoading
        onClick={async () => {
          setLoading("logout");
          await signOut();
          setLoading("none");
        }}
        isLoading={loading === "logout"}
        loadingText="logging out"
        className="w-full"
      >
        Log Out
      </ButtonLoading>
    </>
  );
}
