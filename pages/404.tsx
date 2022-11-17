// all error page must be redirected to login page, or dashboard if user is authenticated

import { useRouter } from "next/router";
import { useEffect } from "react";

type Props = {};

export default function Error404({}: Props) {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  });

  return <>...loading</>;
}
