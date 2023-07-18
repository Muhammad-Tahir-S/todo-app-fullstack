import tw from 'tailwind-styled-components';
import ForgotPassword from './forgotPassword';
import LoginPage from './loginPage';

export default function Login() {
  return (
    <Root>
      <h2 className='text-white'>Login Page</h2>
      {/* Add your login form here */}
      {/* <LoginPage/> */}
      <ForgotPassword/>
    </Root>
  );
}

const Root = tw.div`
bg-slate-800 min-h-screen 
`;
