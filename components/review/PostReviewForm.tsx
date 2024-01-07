import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useUser } from "@clerk/nextjs";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
import { createReview } from "@/lib/actions/review.actions";
import { ReviewForm } from "@/types";
import { toast } from "sonner";

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

function PostReviewForm({
  productId,
  setOpen,
}: {
  productId: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const user = useUser();

  const [starHover, setStarHover] = useState({
    index: 0,
    status: false,
  });

  const [review, setReview] = useState<ReviewForm>({
    description: "",
    rating: 0,
    title: "",
    userId: user.user?.publicMetadata.userId as string,
    productId: productId,
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

  const handleSubmit = async (e: any) => {
    e.prevenetDefault;
    await createReview(review);
    setOpen(false);
    toast.success("Thank you for your review");
  };
  return (
    <form action={handleSubmit} className="flex flex-col gap-4">
      <span className="flex gap-1">
        {stars.map((star, index) => {
          return (
            <span key={star.value}>
              <label htmlFor={star.name}>
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
            </span>
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
        disabled={!review.title || !review.description || review.rating === 0}
      >
        Submit
      </Button>
    </form>
  );
}

export default PostReviewForm;
