import tw from 'tailwind-styled-components';

export default function Login() {
  return (
    <Root>
      <h2 className='text-white'>Login Page</h2>
      {/* Add your login form here */}
    </Root>
  );
}

const Root = tw.div`
bg-slate-800 min-h-screen 
`;
