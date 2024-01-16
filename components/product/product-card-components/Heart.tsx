"use client";
import { Button } from "@/components/ui/button";
import { addToFavourite } from "@/lib/actions/favourite.actions";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { CiHeart } from "react-icons/ci";
import { toast } from "sonner";
import { FaHeart } from "react-icons/fa";

const Heart = ({
  productId,
  itemExist,
}: {
  productId: string;
  itemExist: boolean;
}) => {
  const router = useRouter();
  const { isSignedIn, user } = useUser();

  async function handleAddToFav(productId: string) {
    if (!isSignedIn) {
      router.push("/sign-in");
      return;
    }
    const result = await addToFavourite({
      productId,
      userId: user.publicMetadata.userId as string,
    });

    if (result.status === "success") {
      toast[result.status](result.message);
      window.location.reload();
    } else {
      toast.error(result.message);
    }
  }

  return (
    <>
      {itemExist ? (
        <Button
          type="button"
          variant={"outline"}
          size={"icon"}
          className="absolute right-2 top-1 bg-slate-50/10 border-none text-3xl dark:bg-slate-50/10 text-red-500 rounded-full dark:hover:bg-red-700
    "
          onClick={() => {
            toast.info("This item is already on your wishlist.");
          }}
        >
          <FaHeart />
        </Button>
      ) : (
        <Button
          type="button"
          variant={"outline"}
          size={"icon"}
          className="absolute right-2 top-1 bg-slate-50/10 border-none text-3xl dark:bg-slate-50/10 text-red-500 rounded-full dark:hover:bg-red-700
    "
          onClick={() => {
            handleAddToFav(productId);
          }}
          key={productId}
        >
          <CiHeart />{" "}
        </Button>
      )}
    </>
  );
};

export default Heart;
