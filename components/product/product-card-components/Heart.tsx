import { Button } from "@/components/ui/button";
import {
  addToFavourite,
  getFavouriteByUser,
  getFavouriteByUserAndProduct,
} from "@/lib/actions/favourite.actions";
import { InterfaceFavourite } from "@/lib/database/models/favourites.models";
import { InterfaceProduct } from "@/lib/database/models/product.models";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { toast } from "sonner";
import { FaHeart } from "react-icons/fa";

const Heart = ({ data }: { data: InterfaceProduct }) => {
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
      getData();
      toast[result.status](result.message);
    } else {
      toast.error(result.message);
    }
  }
  const router = useRouter();
  const { isSignedIn, user } = useUser();
  const [favourites, setFavourites] = useState<InterfaceFavourite>();

  async function getData() {
    const result = await getFavouriteByUserAndProduct(
      user?.publicMetadata.userId as string,
      data._id
    );
    if (result.status === "success") {
      setFavourites(result.items as InterfaceFavourite);
    }
  }
  useEffect(() => {
    getData();
  }, [user]);

  return (
    <Button
      type="button"
      variant={"outline"}
      size={"icon"}
      className="absolute right-2 top-1 bg-slate-50/10 border-none text-3xl dark:bg-slate-50/10 text-red-500 rounded-full dark:hover:bg-red-700
    "
      onClick={() => {
        handleAddToFav(data._id);
      }}
      key={data._id}
    >
      {favourites?.product._id ? <FaHeart /> : <CiHeart />}
    </Button>
  );
};

export default Heart;
