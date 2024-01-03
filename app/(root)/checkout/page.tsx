import { auth, currentUser, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

async function page() {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  const user = await currentUser();
  return <div>thi si checkout page</div>;
}

export default page;
