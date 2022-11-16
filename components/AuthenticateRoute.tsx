// determine if user is authenticated for protected routes otherwise block access
// only allow users access if they have sign up or logged in within firebase authentication

import { useRouter } from "next/router";
import React, { ReactNode, useEffect } from "react";
import { useAuthContext } from "../context/AuthUserContext";

export default function AuthenticateRoute({
  children,
}: {
  children: ReactNode;
}) {
  const { authUser, setAuthUser } = useAuthContext();

  useEffect(() => {
    console.log("iK this is authenticated route");

    console.log(authUser);
  });

  const router = useRouter();

  useEffect(() => {
    if (!authUser) {
      router.push("/");
    }
  }, [router, authUser]);

  return <>{authUser ? children : null}</>;
  // return <div>{children}</div>;

  // // authenticated routes
  // if (authUser !== null) {
  //   return <>{children}</>;
  // }
  // // unauthenticated routes return to signup/login route
  // else {
  //   router.push("/");
  //   return <></>;
  // }
}
