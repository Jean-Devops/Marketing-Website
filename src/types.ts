export interface Figure {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  collection?: string;
  maker: string;
  material?: string;
  height?: string;
  weight?: number;
  available?: boolean;
  featured?: boolean;
  selling?: boolean;
  gacha?: boolean;
}

export type FilterOptions = {
  name?: string;
  collection?: string;
  maker?: string;
  material?: string;
  selling?: string;
}

