export interface PoojaType {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface PoojaItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  unit: string;
}

export interface GroundingChunk {
  web: {
    uri: string;
    title: string;
  }
}

export interface VratType {
  id: string;
  name: string;
  description: string;
  kitPrice: number;
  category: string;
  image: string;
  duration?: string;
  bestTime?: string;
}

export interface VratKit {
  id: string;
  vratId: string;
  items: PoojaItem[];
  totalPrice: number;
}
