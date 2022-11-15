// form for user to signup with their email and password

import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { FormEvent, useState } from "react";
import { authObject } from "../config/firebaseAuth";

export default function SignupForm() {
  // collect user data from form
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // when user submit the sign up form, create user within firebase authentication
  const handleSignup = (event: FormEvent) => {
    event.preventDefault();

    console.log(data);

    createUserWithEmailAndPassword(authObject, data.email, data.password)
      .then((cred) => {
        console.log(cred);

        // reset form values to empty string
        setData({ email: "", password: "" });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <h3>Signup form</h3>

      <form onSubmit={handleSignup}>
        <label htmlFor="signupEmail">Email</label>
        <input
          type="text"
          value={data.email}
          // name="signupEmail"
          id="signupEmail"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <label htmlFor="signupPassword">Password</label>
        <input
          type="password"
          value={data.password}
          // name="signupPassword"
          id="signupPassword"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button>submit</button>
      </form>
    </div>
  );
}
