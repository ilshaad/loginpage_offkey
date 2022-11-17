// protected route, & can only be access once the user has logged in

import { signOut } from "firebase/auth";
import { authObject } from "../config/firebaseAuth";
import { useAuthContext } from "../context/AuthUserContext";

export default function Dashboard() {
  const { authUser, setAuthUser } = useAuthContext();

  // log user out when they click logout button
  const handleLogout = () => {
    signOut(authObject);

    // reset user state to null
    setAuthUser(null);
  };

  return (
    <div>
      <h1>Dashboard route (aka logged in page)</h1>

      {/* logout button */}
      <button onClick={handleLogout}>Logout</button>

      <p>this is protect route, only can be seen once you have logged in</p>

      <h3>
        your email:
        {authUser !== null ? ` ${authUser.email}` : " ...loading"}
      </h3>

      <h3>
        your uid:
        {authUser !== null ? ` ${authUser.uid}` : "...loading"}
      </h3>
    </div>
  );
}
