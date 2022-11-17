// signup/login page, which contains the signup & login form.

import { useRouter } from "next/router";
import { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { useAuthContext } from "../context/AuthUserContext";

export default function Home() {
  const router = useRouter();

  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser !== null) {
      router.push("/dashboard");
    }
  }, [router, authUser]);

  return (
    <div>
      <h1>Signin/Login route page</h1>

      {/* sign up form */}
      <SignupForm />

      {/* Login form */}
      <LoginForm />
    </div>
  );
}
