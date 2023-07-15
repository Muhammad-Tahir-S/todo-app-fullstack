import tw from "tailwind-styled-components";
export default function Todo() {
  return (
    <Root>
      <h2>Todo</h2>
    </Root>
  );
}

const Root = tw.div`
bg-slate-800 min-h-screen 
`;
