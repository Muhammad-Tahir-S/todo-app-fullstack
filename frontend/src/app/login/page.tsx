import tw from "tailwind-styled-components";
import LoginPage from "./loginPage";

export default function Login() {
  return (
    <Root>
      <LoginPage />
    </Root>
  );
}

const Root = tw.div`
bg-slate-800 min-h-screen 
`;
