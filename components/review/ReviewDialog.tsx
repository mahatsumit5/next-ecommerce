import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

import { ReviewDialogProps } from "@/types";
import PostReviewForm from "./PostReviewForm";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

function ReviewDialog({ children, title, productId }: ReviewDialogProps) {
  const user = useUser();
  const [open, setOpen] = useState(false);
  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild className="mt-5 w-full">
        {user.isSignedIn ? (
          <Button
            variant={"outline"}
            onClick={() => {
              setOpen(true);
            }}
          >
            Add Review
          </Button>
        ) : (
          <Button variant={"outline"}>
            <Link href={"/sign-in"}>Add Review</Link>
          </Button>
        )}
      </AlertDialogTrigger>

      <AlertDialogContent className={`mt-5`}>
        <AlertDialogHeader>
          <AlertDialogTitle className="">{title}</AlertDialogTitle>
          <AlertDialogDescription>
            <PostReviewForm productId={productId} setOpen={setOpen} />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogCancel
          onClick={() => {
            setOpen(false);
          }}
        >
          Cancel
        </AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ReviewDialog;
