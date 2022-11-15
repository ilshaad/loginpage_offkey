import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  return (
    <div>
      <button onClick={goHome}>home route</button>
      <button>Logout</button>

      <h1>Dashboard</h1>

      <p>this is protect route, only can be seen once you have logged in</p>
      <h3>your email address is: YOUREMAIL@GMAIL.COM</h3>
    </div>
  );
}
