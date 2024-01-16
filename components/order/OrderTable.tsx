import { InterfaceOrder } from "@/lib/database/models/order.models";
import React from "react";

type OrderTableProps = {
  data: InterfaceOrder[];
  emptyTitle: string;
  emptySubtitle: string;
};
const OrderTable = ({ data, emptySubtitle, emptyTitle }: OrderTableProps) => {
  if (!data.length) {
    return (
      <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[140px] bg-grey-50 py-28 text-left">
        <h3 className="p-bold-20 md:h5-bold ">{emptyTitle}</h3>
        <p className="p-regular-14 text-gray-400">{emptySubtitle}</p>
      </div>
    );
  }
  return <div>OrderTable</div>;
};

export default OrderTable;
