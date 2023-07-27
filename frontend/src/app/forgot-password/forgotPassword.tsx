import tw from "tailwind-styled-components";
import Link from "next/link";
import arrow from "../../assets/arrow.svg";
import exclaim from "../../assets/exclaim.png";
import Image from "next/image";
import Text from "@/components/Text";
import Input from "@/components/Input";

export default function ForgotPassword() {
  return (
      <Root2>
        <WhiteBg>
          <div className="flex flex-col items-center justify-center">
            <Text variant="H3" color="text-gray-600">
              Forgot Password ?{" "}
            </Text>

            <Text variant="H5" color="text-gray-400">
              No worries, we will send you reset instructions{" "}
            </Text>
          </div>

          <form className="space-y-8  mt-5 w-full" action="#">
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Uname@mail.com"
              label="Enter  your email"
            />

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
              <Text variant="p1" color="text-gray-400">
                {" "}
                we cant seem to find the right email address for you. resend the
                email that you have registered
              </Text>
            </div>
            <SubmitButton type="submit">Reset Password</SubmitButton>

            <div className=" px-5 flex  items-center  justify-center  bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
              <Image src={arrow} alt={""} width={15} className="mr-3" />

              <Link href="/login" id="google2">
                Back to Login{" "}
              </Link>
            </div>

            <AlignCenter>
              <Text variant="p1" color="black">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline "
                >
                  Sign up
                </a>
              </Text>
            </AlignCenter>
          </form>
        </WhiteBg>
      </Root2>
  );
}

const AlignCenter = tw.div`flex  items-center  justify-center`;

const WhiteBg = tw.div` w-full bg-white rounded-lg shadow  sm:max-w-md p-10 flex flex-col justify-center items-center`;

const Root2 = tw.div`flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0`;

const SubmitButton = tw.button`text-white bg-sky-600 hover:bg-blue-800 w-full py-3 flex items-center justify-center rounded-[6px] shadow-md mt-6`;
