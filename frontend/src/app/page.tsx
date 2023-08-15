"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/utils/hooks/useAuth";

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (!user?.accessToken) {
      router.push("/login");
    } else {
      window.location.href = "/todo";
      router.push("/todo");
    }
  }, [user, router]);

  return <div></div>;
}
