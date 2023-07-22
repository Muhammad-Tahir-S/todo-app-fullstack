import tw from 'tailwind-styled-components';
import ForgotPassword from './forgotPassword';

export default function Login() {
  return (
    <Root>
      <h2 className='text-white'>forgot password Page</h2>
      {/* Add your login form here */}
      <ForgotPassword/>
    </Root>
  );
}

const Root = tw.div`
bg-slate-800 min-h-screen 
`;
