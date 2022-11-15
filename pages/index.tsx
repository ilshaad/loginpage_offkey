import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { authObject } from "../config/firebaseAuth";
import styles from "../styles/Home.module.css";

export default function Home() {
  // ! temporary link unit finish
  const router = useRouter();
  const goDashboard = () => {
    router.push("/dashboard");
  };

  useEffect(() => {
    console.log(authObject);
  });

  return (
    <div className={styles.container}>
      <h1>Login page</h1>

      <button onClick={goDashboard}>dashboard route</button>

      {/* sign up form */}
      <SignupForm />

      {/* Login form */}
      <LoginForm />
    </div>
  );
}
