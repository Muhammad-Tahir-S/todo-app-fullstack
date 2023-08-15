"use client";
import Button from "@/components/Button/Button";
import useAuth from "@/utils/hooks/useAuth";
import tw from "tailwind-styled-components";
import TodoPanel from "./TodoPanel";

export default function Todo() {
  const { user, signout } = useAuth();

  return (
    <Root>
      <div className="w-full flex gap-2 px-4 justify-end pt-6">
        <Button onClick={signout}>Sign Out</Button>
        <Button onClick={() => console.log("user", user)}>Log user</Button>
      </div>
      <TodoPanel />
    </Root>
  );
}

const Root = tw.div`
bg-slate-800 min-h-screen 
`;
