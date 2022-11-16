import { signOut } from "firebase/auth";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { authObject } from "../config/firebaseAuth";
import { useAuthContext } from "../context/AuthUserContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  // ! temporary link unit finish
  const router = useRouter();
  // const goDashboard = () => {
  //   router.push("/dashboard");
  // };

  const { authUser, setAuthUser } = useAuthContext();

  useEffect(() => {
    // console.log(authObject);
    if (authUser !== null) {
      router.push("/dashboard");
    }
  }, [router, authUser]);

  // log user out when they click logout button
  const handleLogout = () => {
    signOut(authObject);

    // reset user state to null
    setAuthUser(null);
  };

  return (
    <div>
      <h1>Signin/Login route page</h1>

      {/* anchor link to dashboard button, but only if user is logged in*/}
      {/* {authUser ? (
        <button>
          <Link href={"/dashboard"}>Go to /dashboard route</Link>
        </button>
      ) : (
        <></>
      )} */}

      {/* <button onClick={goDashboard}>dashboard route</button> */}

      {/* sign up form */}
      <SignupForm />

      {/* Login form */}
      <LoginForm />

      {/* Logout button only if user is already logged in */}
      {/* {authUser ? <button onClick={handleLogout}>Logout</button> : <></>} */}
    </div>
  );
}
