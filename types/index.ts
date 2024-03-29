import { InterfaceProduct } from "@/lib/database/models/product.models";
import { IReview } from "@/lib/database/models/review.model";

export interface ICategory {
  _id: string;
  status: string;
  title: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  image: string;
  thumbnail?: string;
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
  category: string;

  description: string;
  thumbnail: string;
  image?: string;
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
  category: string;
  description: string;
  thumbnail: string;
  images: string[];
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
  category: "",
  description: "",
  images: [""],
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

export type ProductTabsProps = {
  description: string;
  reviews: IReview[];
  productId: string;
};
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
type size = "xs" | "sm" | "md" | "lg" | "xl";
export type SizeArray = size[];
export type getAllProductProps = {
  query: string;
  limit: number;
  page: number;
  sort: "asc" | "desc";
  category: string;
  size: SizeArray;
  gte: number;
  lte: number;
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
  index?: number;
};

export type checkoutOrderProps = {
  cart: ICartState[];
  uniqueId: string;
  email: string;
  customerId: string;
  shippingRate: number;
};

export type CreateOrderParams = {
  uniqueId: string;
  stripeId: string;
  total_details: {
    amount_discount: number;
    amount_shipping: number;
    amount_tax: number;
    amount_subtotal: number;
    amount_total: number;
  };
  buyer: string;
  orderItems: [
    {
      _id: string;
      title: string;
      orderQty: string;
      size: string;
      color: string;
      price: number;
      thumbnail: string;
    }
  ];
  address: {
    city: string;
    country: string;
    line1: string;
    line2: string | null;
    postal_code: string;
    state: string;
  };
};

export type IOrderItem = {
  _id: string;
  stripeId: string;
  status: string;
  total_details: {
    amount_discount: number;
    amount_shipping: number;
    amount_tax: number;
    amount_subtotal: number;
    amount_total: number;
  };
  buyer: { _id: string; email: string; firstName: string; lastName: string };
  orderItems: [
    {
      _id: string;
      orderQty: string;
      title: string;
      size: string;
      color: string;
      thumbnail: string;
      price: string;
    }
  ];
  address: {
    city: string;
    country: string;
    line1: string;
    line2: string | null;
    postal_code: string;
    state: string;
  };
};

export type ReviewDialogProps = {
  children?: React.ReactNode;
  title: string;
  productId: string;
};
export type ReviewForm = {
  title: string;
  description: string;
  rating: number;
  userId: string;
  productId: string;
};

export type ReducerDispatch = {
  payload: string | string[] | "asc" | "desc";
  type: string;
};
export type FavouriteItems = {
  _id: string;

  title: string;

  price: number;
  slug: string;
  salesPrice: number;

  description: string;
  thumbnail: string;
  images: string[];
};

export type CollectionProps = {
  data: ICategory[] | InterfaceProduct[] | IProduct[];
  emptyTitle: string;
  emptyStateSubtext: string;
  collectiontype: "Categories" | "Products" | "Orders" | "Wishlist";
  slug?: string;
};
