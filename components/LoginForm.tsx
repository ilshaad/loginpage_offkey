// form for user to signup with their email and password

import React, { FormEvent, useState } from "react";

export default function LoginForm() {
  // collect user data from form
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // when user submit the sign up form
  const handleLogin = (event: FormEvent) => {
    event.preventDefault();

    console.log(data);
  };

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
    </div>
  );
}
