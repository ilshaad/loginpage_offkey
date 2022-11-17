// create context for reusable firebase auth object
// the auth object will give me the up to date authentication for protected routes

import { onAuthStateChanged } from "firebase/auth";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { authObject } from "../config/firebaseAuth";

// @type for authUser state
export interface userState {
  uid: string;
  email: string;
}

// create context hook
export const AuthCreateContext = createContext({});

// reusable context of authUser & setAuthUser
export const useAuthContext = () => useContext<any>(AuthCreateContext);

// create context provider for children components
export function AuthUserContext({ children }: { children: ReactNode }) {
  // this will be the main context to use within the whole app
  const [authUser, setAuthUser] = useState<userState | null>(null);

  useEffect(() => {
    // real time updates which lets us know if user is logged in or not
    const subcribeUser = onAuthStateChanged(authObject, (userCredential) => {
      if (userCredential !== null) {
        setAuthUser({
          email: userCredential.email!,
          uid: userCredential.uid!,
        });
      } else {
        setAuthUser(null);
      }
    });

    // unsubcribe user when they logged out or no longer authenticated
    return () => subcribeUser();
  }, []);

  return (
    <AuthCreateContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthCreateContext.Provider>
  );
}
