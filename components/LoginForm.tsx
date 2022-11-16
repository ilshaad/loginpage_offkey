// form for user to login with their email and password

import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { authObject } from "../config/firebaseAuth";
import { useAuthContext } from "../context/AuthUserContext";

export default function LoginForm() {
  // collect user data from form
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const {authUser} = useAuthContext()

  // when user submit the login form
  const handleLogin = (event: FormEvent) => {
    event.preventDefault();

    signInWithEmailAndPassword(authObject, data.email, data.password)
      .then((cred) => {
        setData({ email: "", password: "" });

        // redirect user to /dashboard
        router.push("/dashboard");
      })
      .catch((error) => {
        console.log(error.message);

        // display error message to user
        setErrorMessage(error.message);
      });
  };

    // if already logged in than just return a simple message you ahve already logged in
    if (authUser) {
      return <div>You already logged in</div>;
    }
  
  return (
    <div>
      <h3>Login form</h3>

      <form onSubmit={handleLogin}>
        <label htmlFor="loginEmail">Email</label>
        <input
          type="text"
          value={data.email}
          // name="loginEmail"
          id="loginEmail"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <label htmlFor="loginPassword">Password</label>
        <input
          type="password"
          value={data.password}
          // name="loginPassword"
          id="loginPassword"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button>submit</button>
      </form>

      {/* display error message from firebase if form was not filled in property */}
      <div>{errorMessage}</div>
    </div>
  );
}
