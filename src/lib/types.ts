export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: ProductCategory;
  brand: string;
  inStock: boolean;
  stockQuantity: number;
  features: string[];
  specifications?: Record<string, string>;
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContext {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export type ProductCategory =
  | "cemento-hormigon"
  | "ladrillos-bloques"
  | "herramientas-manuales"
  | "herramientas-electricas"
  | "pinturas-revestimientos"
  | "tuberias-plomeria"
  | "electricidad"
  | "ferreteria"
  | "techos-cubiertas"
  | "pisos-ceramicos";

export interface ProductFilters {
  category?: ProductCategory;
  priceRange?: [number, number];
  brand?: string;
  inStock?: boolean;
  search?: string;
}
