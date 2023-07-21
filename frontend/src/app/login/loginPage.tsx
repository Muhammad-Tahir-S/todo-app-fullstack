import tw from "tailwind-styled-components";
import Link from "next/link";
import google from "../../assets/google.png";
import apple from "../../assets/apple.png";
// import username from "../../images/username.png";
// import password from "../../images/password.png";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div>
      <Root2>
        <Custom_div>
          <Custom_div_2>
            <Custom_div_3>
              <Custom_h1>
                You must sign in to join
                </Custom_h1>
            </Custom_div_3>
            <Custom_div_3>
              <Custom_h1_2>We are a team that guides each other </Custom_h1_2>
            </Custom_div_3>

            <div className=" px-5 flex  items-center  justify-center  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
              <Image src={google} alt={""} width={15} className="mr-3" />

              <Link href="/" id="google">
                Sign in with Google{" "}
              </Link>
            </div>

            <div className=" px-5 flex  items-center  justify-center  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
              <Image src={apple} alt={""} width={25} className="mr-3" />
              <Link href="/" id="apple">
                Sign in with Apple{" "}
              </Link>
            </div>

            <Custom_div_4>
              <Custom_div_5></Custom_div_5>
              <Custom_span>or</Custom_span>
              <Custom_div_5></Custom_div_5>
            </Custom_div_4>

            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-400"
                >
                  Email or username
                </label>
                <div className=" flex  items-left    bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                  {/* <Image src={username} alt={""} width={15} className="mr-2" /> */}

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="uname@mail.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-400"
                >
                  Password
                </label>
                <div className=" flex  items-left bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5">
                  {/* <Image src={password} alt={""} width={15} className="mr-2" /> */}

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                  />
                </div>
              </div>
              <div className=" flex items-center justify-end">
                <Link
                  style={{ marginTop: "-1em" }}
                  href="/forgotPassword"
                  className="text-sm font-medium text-blue-600 hover:underline "
                >
                  Forgot password?
                </Link>
              </div>
              <Link
                href="/"
                id="google2"
                className="flex  items-center  justify-center bg-blue-700  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              >
                Sign in with Google{" "}
              </Link>
              {/* <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button> */}
              <Custom_div_3>
                <Custom_p>
                  Don’t have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Sign up
                  </a>
                </Custom_p>
              </Custom_div_3>
            </form>
          </Custom_div_2>
        </Custom_div>
      </Root2>
    </div>
  );
}

// const Forgot_password = tw.div`flex items-center justify-end"`;
const Custom_p = tw.div`text-sm font-light text-gray-500"`;
const Custom_span = tw.div`flex-shrink mx-4 text-gray-400`;
const Custom_h1_2 = tw.div`text-sm  leading-tight tracking-tight text-gray-400`;
const Custom_h1 = tw.div`text-xl  leading-tight tracking-tight text-gray-900`;
const Custom_div_5 = tw.div`flex-grow border-t border-gray-400"`;
const Custom_div_4 = tw.div`relative flex py-4 items-center`;
const Custom_div_3 = tw.div`flex  items-center  justify-center`;
const Custom_div_2 = tw.div`p-6 space-y-4 md:space-y-6 sm:p-8`;
const Custom_div = tw.div` w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0`;
const Root2 = tw.div`flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0`;
