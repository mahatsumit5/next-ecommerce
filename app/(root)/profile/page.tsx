import Collection from "@/components/shared/Collection";
import { getOrderByUser } from "@/lib/actions/order.actions";
import { currentUser } from "@clerk/nextjs";
import { InterfaceOrder } from "@/lib/database/models/order.models";
import OrderTable from "@/components/order/OrderTable";
import { getFavouriteByUser } from "@/lib/actions/favourite.actions";
import FavouriteCard from "@/components/product/FavouriteCard";
import { FavouriteItems } from "@/types";
import { Button } from "@/components/ui/button";

async function page() {
  const user = await currentUser();

  const orders: InterfaceOrder[] = await getOrderByUser(
    (user?.publicMetadata.userId as string) || ""
  );
  const result = await getFavouriteByUser(
    (user?.publicMetadata.userId as string) || ""
  );
  return (
    <div className="min-h-96 flex flex-col gap-9">
      <span className="flex flex-col gap-2">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          My orders
        </h2>
        <OrderTable
          data={[]}
          emptySubtitle="Please buy some products first."
          emptyTitle="You dont not have any orders."
        />
      </span>
      <span className="flex flex-col gap-2">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Wishlist
        </h2>
        <div className="flex gap-5 justify-start flex-wrap">
          <>
            {result.items ? (
              <>
                {result.items.product.map((item: FavouriteItems) => (
                  <FavouriteCard data={item} key={item._id} />
                ))}
              </>
            ) : (
              <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-5 rounded-[140px] bg-grey-50 py-28 text-left">
                <h3 className="p-bold-20 md:h5-bold ">
                  Your favourite list is empty.
                </h3>
                <p className="p-regular-14 text-gray-400">
                  Please add some products to your favourites.
                </p>
                <Button variant={"default"}>Products</Button>
              </div>
            )}
          </>{" "}
        </div>
      </span>
      <span className="flex flex-col gap-2">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Products you may like
        </h2>
        <Collection
          collectiontype="Products"
          data={[]}
          emptyStateSubtext=""
          emptyTitle="You do not have any wishlist."
        />
      </span>
    </div>
  );
}

export default page;
