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
export interface ICartState {
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
  orderQty: number;
  size: string;
  color: string;
}

export const defaultValue: ICartState = {
  _id: "",
  status: "",
  title: "",
  slug: "",
  price: 0,
  qty: 0,
  sku: "",
  salesPrice: 0,
  parentCat: "",
  description: "",
  thumbnail: "",
  color: "",
  size: "",
  orderQty: 0,
};
export type AddToCartProps = {
  variant:
    | "default"
    | "destructive"
    | "primary"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null;
  product: IProduct;
  size: string;
  color: string;
};
