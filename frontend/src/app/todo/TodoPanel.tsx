"use client";
import useAuth, { User } from "@/utils/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TodoPanel() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.accessToken) {
      router.push("/login");
    }
  }, [user, router]);

  return <h2>Todo</h2>;
}
