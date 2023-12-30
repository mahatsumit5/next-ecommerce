export interface ICategory {
  _id: string;
  status: string;
  title: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  image: string;
}
export interface IProduct {
  _id: string;
  status: string;
  title: string;
  slug: string;
  price: number;
  qty: number;
  sku: string;
  salesPrice: number;
  parentCat: string;
  description: string;
  thumbnail: string;
  images: string[];
  reviews: Object[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  salesEndDate: Date | null;
  salesStartDate: Date | null;
  color: string[];
  size: string[];
}
export type SearchParamProps = {
  params: { slug: string };
  // searchParams: { [key: string]: string | string[] | undefined };
};
export type ProductPageParams = {
  params: { productSlug: string };
  // searchParams: { [key: string]: string | string[] | undefined };
};
