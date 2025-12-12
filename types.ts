export interface Wine {
  id: string;
  name: string;
  appellation: string;
  year: number;
  type: 'red' | 'white' | 'rose' | 'champagne';
  price: number;
  description: string;
  aromas: string[];
  alcohol: number;
  bottleColor: string; // Hex for CSS generation
  labelColor: string;
}

export interface CartItem extends Wine {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (wine: Wine) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}
