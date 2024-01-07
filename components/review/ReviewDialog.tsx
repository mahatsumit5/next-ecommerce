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

function ReviewDialog({ children, title, productId }: ReviewDialogProps) {
  const [open, setOpen] = useState(false);
  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild className="mt-5">
        <Button
          variant={"outline"}
          onClick={() => {
            setOpen(true);
          }}
        >
          Add Review
        </Button>
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
