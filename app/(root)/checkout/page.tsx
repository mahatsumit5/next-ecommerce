import { auth, currentUser } from "@clerk/nextjs";
import React from "react";

async function page() {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const user = await currentUser();
  console.log(user);
  return <div>thi si checkout page</div>;
}

export default page;
