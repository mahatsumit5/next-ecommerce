"use client";
import Image from "next/image";
import { FavouriteItems } from "@/types";
import Link from "next/link";
import { Button } from "../ui/button";
import { MdDelete } from "react-icons/md";
import { deleteFavouriteById } from "@/lib/actions/favourite.actions";
import { toast } from "sonner";
type CardProps = {
  data: FavouriteItems;
};

async function handleDelete(_id: string) {
  const result = await deleteFavouriteById(_id);
  if (result._id) {
    toast.success("Item Removed");
    window.location.reload();
  } else {
    toast.error("Unable to delete");
  }
}
function FavouriteCard({ data }: CardProps) {
  return (
    <div className=" w-[180px] sm:w-[200px] md:w-[280px] ">
      <div className="flex flex-col gap-2  hover:underline relative ">
        <Link href={`/category/item/${data.slug}`}>
          <div className=" product-card relative  w-full overflow-hidden">
            <Image
              src={data.images[0]}
              fill
              alt="category-image"
              className=" hover:scale-110 transition-all product-card object-cover object-center "
              loading={
                data._id !== "659c6bbea9d92e9d4e7ead1d" ? "lazy" : undefined
              }
              quality={50}
              priority={data._id === "659c6bbea9d92e9d4e7ead1d"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />{" "}
          </div>
        </Link>
        <Link href={`/category/item/${data.slug}`}>
          <h5 className="scroll-m-20 text-sm sm:text-lg  font-semibold tracking-tight line-clamp-1">
            {data.title}
          </h5>
          <h5 className="line-clamp-2 scroll-m-20 text-sm   font-semibold   text-muted-foreground">
            {data.description}
          </h5>
        </Link>

        <span className="font-bold flex justify-between">
          <p className="mt-1">${data.price}</p>
          <Button
            size={"icon"}
            variant={"outline"}
            className="border-none"
            onClick={() => {
              handleDelete(data._id);
            }}
          >
            <MdDelete color="red" />
          </Button>
        </span>
      </div>
    </div>
  );
}

export default FavouriteCard;
