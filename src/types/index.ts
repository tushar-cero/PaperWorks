// Header

export interface HeaderProps {
    cartItemsCount?: number;
    hideCart?: boolean;
}

// Product

export interface ListingProps {
    productsData: Product[];
    addToCart: (id:string) => void
}
export interface ProductCardProps {
    product: Product;
    addToCart: (id:string) => void
}
export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    img: string;
}

// Cart

export interface CartItems {
    id: string;
    quantity: number;
}
export interface CartProductCardProps {
    product: Product;
    quantity: number;
    addToCart: (id: string) => void;
    handleQuantity: (id:string) => void;
    removeFromCart: (id: string) => void;
}
export interface CartContextType {
    cartItemsArray: CartItems[];
    addToCart: (id: string) => void;
    removeFromCart: (id: string) => void;
    handleQuantity: (id:string) => void;
    getQuantityById: (id:string) => number;
}