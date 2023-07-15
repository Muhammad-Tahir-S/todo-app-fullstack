import tw from "tailwind-styled-components";

export default function Home() {
  return (
    <Main className="">
      <main></main>
    </Main>
  );
}

const Main = tw.main`
flex min-h-screen flex-col items-center justify-between p-24
`;
