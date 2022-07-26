export interface itemsInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  quantity?: number;
  rating: { rate: number; count: number };
  url?: string;
}
