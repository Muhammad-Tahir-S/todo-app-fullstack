import tw from "tailwind-styled-components";
import Link from "next/link";
import username from "../../assets/username.png";
import arrow from "../../assets/arrow.svg";
import exclaim from "../../assets/exclaim.png";
import Image from "next/image";
export default function ForgotPassword() {
  return (
    <div>
      <Root2>
        <Custom_div>
          <Custom_div_2>
            <Custom_div_3>
              <Custom_h1>Forgot Password ? </Custom_h1>
            </Custom_div_3>

            <Custom_div_3>
              <Custom_h1_2>
                No worries, we will send you reset instructions{" "}
              </Custom_h1_2>
            </Custom_div_3>

            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-400"
                >
                  Enter your email
                </label>

                <div
                 className=" flex  items-left    bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                 >
                  <Image src={username} alt={""} width={15} className="mr-2" />

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="uname@mail.com"
                  />
                </div>
              </div>

              <div
                style={{ marginTop: "-0.5px" }}
                className="text-gray-300  flex  items-left bg-yellow-100  border border-gray-300 rounded-lg px-5 py-5 text-xs"
              >
                <Image
                  style={{ marginLeft: "-15px" }}
                  src={exclaim}
                  alt={""}
                  className="mr-2 w-auto h-7 "
                />
                <p>
                  {" "}
                  we cant seem to find the right email address for you. resend
                  the email that byou have registered
                </p>{" "}
              </div>

              <Link
                href="/"
                id="google2"
                className="flex  items-center  justify-center bg-blue-700  border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              >
                Reset password{" "}
              </Link>
              <div className=" px-5 flex  items-center  justify-center  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                <Image src={arrow} alt={""} width={15} className="mr-3" />

                <Link href="/login" id="google2">
                  Back to Login{" "}
                </Link>
              </div>

              {/* <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button> */}
              <Custom_div_3>
                <Custom_p>
                  Don’t have an account yet?{" "}
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
// const Custom_input = tw.div`flex  items-left    bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`;

const Custom_p = tw.div`text-sm font-light text-gray-500"`;

const Custom_h1_2 = tw.div`text-sm  leading-tight tracking-tight text-gray-400`;
const Custom_h1 = tw.div`text-xl  leading-tight tracking-tight text-gray-900`;

const Custom_div_3 = tw.div`flex  items-center  justify-center`;

const Custom_div_2 = tw.div`p-6 space-y-4 md:space-y-6 sm:p-8`;

const Custom_div = tw.div` w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0`;

const Root2 = tw.div`flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0`;
