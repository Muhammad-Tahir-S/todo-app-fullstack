"use client";
import tw from "tailwind-styled-components";

import arrow from "../../assets/arrow.svg";

import Image from "next/image";
import Input from "@/components/Input";
import Text from "@/components/Text";
import Button from "@/components/Button/Button";
import LinkButton from "@/components/Button/LinkButton";
import useAuth, { SignInFormValues, User } from "@/utils/hooks/useAuth";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [submitting, setSubmitting] = useState(false);
  const { user, signin } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    defaultValues: { username: "", password: "" },
  });

  async function onSubmit(values: SignInFormValues) {
    try {
      setSubmitting(true);
      await signin(values);

      setSubmitting(false);
    } catch (error) {
      console.log(error);
      setSubmitting(false);
    }
  }

  useEffect(() => {
    if (user?.accessToken) {
      router.push("/todo");
    }
  }, [user, router]);

  return (
    <Root>
      <WhiteBg>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 w-full">
          <Input
            {...register("username")}
            placeholder="Username"
            label="Username"
          />

          <Input {...register("username")} placeholder="Email" label="Email" />

          <Input
            // type="password"
            {...register("password")}
            placeholder="Password"
            label="Password"
          />

          <br />
          <br />

          <LinkButton href="/login" size="large" variant="secondary">
            <Image src={arrow} alt={""} width={15} />
            Back to Login
          </LinkButton>

          <br />

          <Button
            type="submit"
            variant="secondary"
            fullWidth
            className="mt-6"
            loading={submitting}
          >
            Sign up
          </Button>
        </form>
      </WhiteBg>
    </Root>
  );
}

const WhiteBg = tw.div` w-full bg-white rounded-lg shadow  sm:max-w-md p-10 flex flex-col justify-center items-center`;

const Root = tw.div`flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0`;

const TextBetweenLines = tw(
  Text
)`my-4 before:absolute before:right-[100%] before:top-[calc(50%_-_0.5px)] before:mr-3 before:w-[100px] before:h-[1px] before:bg-gray-300 after:absolute after:left-[100%] after:top-[calc(50%_-_0.5px)] after:ml-3 after:w-[100px] after:h-[1px] after:bg-gray-300`;
