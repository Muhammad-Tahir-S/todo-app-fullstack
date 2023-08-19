"use client";
import tw from "tailwind-styled-components";
import SignupPage from "./signupPage";

export default function Signup() {
  return (
    <Root>
      <SignupPage />
    </Root>
  );
}

const Root = tw.div`
bg-slate-800 min-h-screen 
`;
