export type Variant = {
  name: string;
  color: string;
  images: string[];
  stock?: number;
};

export type Product = {
  id: string;
  name: string;
  subtitle?: string | null;
  description: string;
  price: number;
  images: string[];
  variants?: Variant[];
  categoryId?: string | null;
};

export type Category = {
  id: string;
  name: string;
};

export type OrderItem = {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
  variantName?: string;
  variantColor?: string;
};
