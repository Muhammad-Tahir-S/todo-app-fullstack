"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import axios from "axios";

export interface SignInFormValues {
  username: string;
  password: string;
}

export interface ForgotPasswordFormValues {
  email: string;
}

export interface SignUpFormValues {
  email: string;
  password: string;
  username: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  roles: string[];
  accessToken: string;
}

// export interface ChangePasswordFormValues {
//   email: string;
//   code: string;
//   newPassword: string;
//   verifyNewPassword: string;
// }

const baseUrl = "https://todo-server-psk9.onrender.com";

function useProvideAuth() {
  const [user, setUser] = useState<User | null>(null);
  async function signin(values: SignInFormValues) {
    try {
      const res = await axios.post(`${baseUrl}/api/auth/signin`, values);
      setUser(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function signup(values: SignUpFormValues) {
    try {
      const res = await axios.post(`${baseUrl}/api/auth/signup`, values);
      setUser(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  function signout() {
    setUser(null);
  }

  return {
    user,
    ready: true,
    signin,
    signout,
    signup,
  };
}

type ContextType = ReturnType<typeof useProvideAuth>;

const AuthContext = createContext({} as ContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useProvideAuth();
  return (
    <AuthContext.Provider value={auth}>
      {auth.ready && children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
