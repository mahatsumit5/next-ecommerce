import React, { ChangeEvent, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useUser } from "@clerk/nextjs";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

const stars = [
  {
    name: "1 Star",
    value: 1,
  },
  {
    name: "2 Star",
    value: 2,
  },
  {
    name: "3 Star",
    value: 3,
  },
  {
    name: "4 Star",
    value: 4,
  },
  {
    name: "5 Star",

    value: 5,
  },
];
type Review = {
  title: string;
  description: string;
  rating: number;
  user: string | unknown;
};
function ReviewDialog({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  const [starHover, setStarHover] = useState({
    index: 0,
    status: false,
  });
  const user = useUser();
  const [review, setReview] = useState<Review>({
    description: "",
    rating: 0,
    title: "",
    user: user.user?.publicMetadata.userId,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "rating") {
      const numberValue = Number(value);
      if (review.rating === numberValue) {
        setReview({ ...review, rating: 0 });
        return;
      }
      setReview({ ...review, rating: numberValue });
      return;
    }

    setReview({ ...review, [name]: value });
  };

  const handleSubmit = () => {
    console.log(review);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="mt-5">
        {children}
      </AlertDialogTrigger>

      <AlertDialogContent className={`mt-5`}>
        <AlertDialogHeader>
          <AlertDialogTitle className="">{title}</AlertDialogTitle>
          <AlertDialogDescription>
            <form action={handleSubmit} className="flex flex-col gap-4">
              <span className="flex gap-1">
                {" "}
                {stars.map((star, index) => {
                  return (
                    <>
                      <label htmlFor={star.name} key={star.value}>
                        {review.rating >= star.value ? (
                          <StarFilledIcon color="#ffd700" />
                        ) : (
                          <>
                            {starHover.index >= index && starHover.status ? (
                              <StarFilledIcon
                                color="#ffd700"
                                onMouseLeave={() => {
                                  setStarHover({ index: index, status: false });
                                }}
                              />
                            ) : (
                              <StarIcon
                                onMouseEnter={() => {
                                  setStarHover({ index: index, status: true });
                                }}
                                color="#ffd700"
                              />
                            )}
                          </>
                        )}
                      </label>
                      <Input
                        key={star.value}
                        type="checkbox"
                        value={star.value}
                        id={star.name}
                        name="rating"
                        className="hidden"
                        onChange={(e) => {
                          handleChange(e);
                          setStarHover({ index: 0, status: false });
                        }}
                      />
                    </>
                  );
                })}
              </span>

              <Input
                placeholder="Title"
                type="text"
                name="title"
                className="focus-visible:ring-blue-300"
                onChange={handleChange}
                maxLength={50}
              />
              <Textarea
                placeholder="Enter your message"
                name="description"
                className="focus-visible:ring-blue-300"
                onChange={handleChange}
                minLength={5}
              />
              <Button
                type="submit"
                disabled={
                  !review.title || !review.description || review.rating === 0
                }
              >
                Continue
              </Button>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ReviewDialog;
