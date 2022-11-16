// protected route, & can only be access once the user has logged in

import { signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { authObject } from "../config/firebaseAuth";
import {
  AuthCreateContext,
  useAuthContext,
  userState,
} from "../context/AuthUserContext";

export default function Dashboard() {
  const router = useRouter();
  // const { authUser, setAuthUser } = useContext<any>(AuthCreateContext);
  const { authUser, setAuthUser } = useAuthContext();

  // ! temporary link
  const goHome = () => {
    router.push("/");
  };

  // log user out when they click logout button
  const handleLogout = () => {
    signOut(authObject);

    // reset user state to null
    setAuthUser(null);
  };

  return (
    <div>
      <h1>/Dashboard route (aka logged in page)</h1>

      {/* link to signup/login page */}
      {/* <button>
        <Link href={"/"}>Go to signup/login route</Link>
      </button> */}

      {/* logout button */}
      <button onClick={handleLogout}>Logout</button>

      <p>this is protect route, only can be seen once you have logged in</p>

      <h3>
        your email address is:
        {authUser !== null ? ` ${authUser.email}` : " ...loading"}
      </h3>

      <h3>
        your uid is:
        {authUser !== null ? ` ${authUser.uid}` : "...loading"}
      </h3>
    </div>
  );
}
