import { auth } from "@clerk/nextjs";
import React from "react";

function page() {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;
  return <div>thi si checkout page</div>;
}

export default page;
