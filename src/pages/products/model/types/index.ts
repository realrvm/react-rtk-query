export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: `${string}.jpg`;
  images: `${string}.jpg`[];
};

export type Products = {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
};
