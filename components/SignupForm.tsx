// form for user to signup with their email and password

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import React, { FormEvent, useState } from "react";
import { authObject } from "../config/firebaseAuth";
import { useAuthContext } from "../context/AuthUserContext";

export default function SignupForm() {
  // collect user data from form
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const { authUser } = useAuthContext();

  // when user submit the sign up form, create user within firebase authentication
  const handleSignup = (event: FormEvent) => {
    event.preventDefault();

    createUserWithEmailAndPassword(authObject, data.email, data.password)
      .then((cred) => {
        // reset form values to empty string
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

  // if already signed up than just return a simple message you ahve already signed up
  if (authUser) {
    return <div>You already signed up</div>;
  }

  return (
    <div>
      <h3>Signup form</h3>

      <form onSubmit={handleSignup}>
        <label htmlFor="signupEmail">Email</label>
        <input
          type="text"
          value={data.email}
          id="signupEmail"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <label htmlFor="signupPassword">Password</label>
        <input
          type="password"
          value={data.password}
          id="signupPassword"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button>submit</button>
      </form>

      {/* display error message from firebase if form was not filled in property */}
      <div>{errorMessage}</div>
    </div>
  );
}
