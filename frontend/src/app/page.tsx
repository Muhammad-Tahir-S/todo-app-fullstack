"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const requireAuth = () => {
    const loggedIn = true;
    // const router = useRouter;

    if (!loggedIn) {
      window.location.href = "/login";
      //   router.push("/login");
    } else {
      window.location.href = "/todo";

      //   router.push("/todo");
    }
  };

  useEffect(() => {
    requireAuth();
  }, []);

  return <div></div>;
}
