import tw from 'tailwind-styled-components';
import ForgotPassword from './forgotPassword';

export default function Login() {
  return (
    <Root>
      <ForgotPassword/>
    </Root>
  );
}

const Root = tw.div`
bg-slate-800 min-h-screen 
`;
