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
  searchParams: { [key: string]: string | string[] | undefined };
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
  orderQuantity?: number;
};
export type review = {
  _id: string;
  rating: number;
  user: string;
  description: string;
  title: string;
};
export type ProductTabsProps = { description: string; review: review[] };
export type CreateUserParams = {
  clerkId: string;
  firstName: string;
  lastName: string;
  userName?: string;
  email: string;
  photo: string;
};

export type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

export type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

export type RemoveUrlQueryParams = {
  params: string;
  keysToRemove: string[];
};

export type getAllProductProps = {
  query: string;
  limit: number;
  page: number;
};
export type IMainCat = {
  _id: string;
  status: string;
  title: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
export type ICateogry = {
  _id: string;
  status: string;
  title: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  image: string;
  parentCat: string;
};

export type TMenuStore = {
  parentCat: string;
  category: ICateogry[];
  index: number;
};
