import { InterfaceOrder } from "@/lib/database/models/order.models";
import Image from "next/image";
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
  const header = [
    "Status",
    "Items",
    "Details",
    "Date",
    "Shipping",
    "Total Amount",
    "Address",
  ];

  return (
    <div className="relative flex flex-col w-full h-full text-gray-700 bg-white dark:bg-slate-800/50 dark:text-white shadow-md rounded-xl bg-clip-border">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 rounded-none bg-clip-border">
        <div className="flex flex-col justify-between gap-8 mb-4 md:flex-row md:items-center">
          <div>
            <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 dark:text-white">
              Recent Orders
            </h5>
          </div>
          <div className="flex w-full gap-2 shrink-0 md:w-max">
            <div className="w-full md:w-72">
              <div className="relative h-10 w-full min-w-[200px]">
                <div className="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    ></path>
                  </svg>
                </div>
                <input
                  className=" dark:bg-slate-600 peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="dark:text-white before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Search
                </label>
              </div>
            </div>
            <button
              className="flex select-none items-center gap-3 rounded-lg bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                ></path>
              </svg>
              Download
            </button>
          </div>
        </div>
      </div>
      <div className="p-6 px-0 overflow-auto">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              {header.map((item) => (
                <th className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p className="block font-sans text-sm antialiased font-normal leading-none  opacity-70">
                    {item}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-b">
                <td className="p-4 ">
                  <div className="w-max">
                    <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/40 dark:text-green-400">
                      <span className="">{item.status}</span>
                    </div>
                  </div>
                </td>
                <ProductRow
                  image={item.orderItems.map((item) => item.thumbnail)}
                  key={item._id}
                />
                <ProductDetails product={item.orderItems} key={item._id} />
                <td className="p-4 ">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {new Date(item.createdAt).toDateString()}
                  </p>
                </td>

                <td className="p-4 ">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    ${item.total_details.amount_shipping.toLocaleString()}
                  </p>
                </td>
                <td className="p-4 ">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    ${item.total_details.amount_total.toLocaleString()}
                  </p>
                </td>
                <td className="p-1 ">
                  {item.address.line1},{item.address.city},{item.address.state},
                  {item.address.country}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-center p-4  ">
        <div className="flex items-center gap-2">
          <button
            className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg border border-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              1
            </span>
          </button>
          <button
            className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              2
            </span>
          </button>
          <button
            className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              3
            </span>
          </button>
          <button
            className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              ...
            </span>
          </button>
          <button
            className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              8
            </span>
          </button>
          <button
            className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              9
            </span>
          </button>
          <button
            className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              10
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
type product = {
  _id: string;
  title: string;
  orderQty: string;
  size: string;
  color: string;
  price: number;
  thumbnail: string;
};
const ProductRow = ({ image }: { image: string[] }) => {
  return (
    <>
      <td className="p-5 ">
        {image.map((img, index) => (
          <div
            key={index}
            className="h-[150px] w-[150px]  flex flex-col relative gap-2"
          >
            <Image src={img} fill alt="image" className="object-cover" />
          </div>
        ))}
      </td>
    </>
  );
};
const ProductDetails = ({ product }: { product: product[] }) => {
  return (
    <>
      <td className="p-5 ">
        {" "}
        {product.map((item) => (
          <div
            key={item._id}
            className="flex flex-col  gap-2 h-[150px] w-[150px]"
          >
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              {item.title}
            </p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              Price: {item.price}
            </p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              Size: {item.size}
            </p>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
              Order Quantity:{item.orderQty}
            </p>
          </div>
        ))}
      </td>
    </>
  );
};

export default OrderTable;
