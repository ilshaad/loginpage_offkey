// top tree component which handles context, authenticated routes and every other components

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthUserContext, useAuthContext } from "../context/AuthUserContext";
import { useRouter } from "next/router";
import AuthenticateRoute from "../components/AuthenticateRoute";

export default function App({ Component, pageProps }: AppProps) {
  // every unauthenticated routes must redirected to home '/' route which display the signup/login form, otherwise redirect to /dashboard route if authenticated
  const noAuthRequiredRoutes = ["/"];

  const router = useRouter();

  const { authUser, setAuthUser } = useAuthContext();

  return (
    <AuthUserContext>
      {noAuthRequiredRoutes.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <AuthenticateRoute>
          <Component {...pageProps} />
        </AuthenticateRoute>
      )}
      {/* <AuthenticateRoute>
        <Component {...pageProps} />
      </AuthenticateRoute> */}

      {/* {router.pathname === '/' && !authUser ? (
              <AuthenticateRoute>
              <Component {...pageProps} />
            </AuthenticateRoute>
      ) :

      } */}
    </AuthUserContext>
  );
}
