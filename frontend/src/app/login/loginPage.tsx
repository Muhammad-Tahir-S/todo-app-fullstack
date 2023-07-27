import tw from "tailwind-styled-components";
import Link from "next/link";
import google from "@/assets/google.png";
import apple from "@/assets/apple.png";

import Image from "next/image";
import Input from "@/components/Input";
import Text from "@/components/Text";

export default function LoginPage() {
  return (
    <Root>
      <WhiteBg>
        <div className="flex flex-col items-center justify-center">
          <Text variant="H3" color="text-gray-600">
            You must Sign In to join
          </Text>
          <Text variant="H5" color="text-gray-400">
            We&apos;re a team that guides each other
          </Text>
        </div>

        <div className="w-full flex flex-col gap-3 mt-6">
          <ThirdPartySignInLink
            href="/"
          >
            <Image src={google} alt={""} width={27} height={24} />
            <Text variant="H4" color="text-gray-700">
              Sign in with Google
            </Text>
          </ThirdPartySignInLink>

          <ThirdPartySignInLink
            href="/"
          >
            <Image src={apple} alt={""} width={27} height={27} />
            <Text variant="H4" color="text-gray-700">
              Sign in with Apple
            </Text>
          </ThirdPartySignInLink>
        </div>

        <div className="relative mt-4">
          <TextBetweenLines
            variant="p1"
            color="text-gray-400"
          >
            Or
          </TextBetweenLines>
        </div>

        <form className="space-y-2 w-full" action="#">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Uname@mail.com"
            label="Email or username"
          />

          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            label="Password"
          />
        </form>

        <ForgotPasswordLink href='/forgot-password'>Forgot password?</ForgotPasswordLink>

        <SubmitButton type='submit'>Sign In</SubmitButton>
      </WhiteBg>
    </Root>
  );
}

const WhiteBg = tw.div` w-full bg-white rounded-lg shadow  sm:max-w-md p-10 flex flex-col justify-center items-center`;

const Root = tw.div`flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0`;

const ThirdPartySignInLink = tw(Link)`border border-gray-400 w-full flex rounded-md gap-4 justify-center px-2 py-1.5`;

const ForgotPasswordLink = tw(Link)`self-end text-blue-400 cursor-pointer hover:text-blue-800 text-[14px]`;

const TextBetweenLines = tw(Text)`my-4 before:absolute before:right-[100%] before:top-[calc(50%_-_0.5px)] before:mr-3 before:w-[100px] before:h-[1px] before:bg-gray-300 after:absolute after:left-[100%] after:top-[calc(50%_-_0.5px)] after:ml-3 after:w-[100px] after:h-[1px] after:bg-gray-300`;

const SubmitButton=tw.button`text-white bg-sky-600 hover:bg-blue-800 w-full py-3 flex items-center justify-center rounded-[6px] shadow-md mt-6`