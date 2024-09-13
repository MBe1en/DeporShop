// Type of collection
export interface IProduct {
  id: string;
  brand: string;
  category: string;
  description: string;
  gender: string;
  image: string;
  name: string;
  price: number;
  sub_category: string;
}

export interface ProductProps {
  product: IProduct;
}
