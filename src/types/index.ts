export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    img: string;
}
export interface ListingProps {
    productsData: Product[];
    handleAddtoCart(id: string): void;
}
export interface ProductCardProps {
    product: Product;
    handleAddtoCart(id: string): void;
}
export interface HeaderProps {
    cartItems: number
}
export interface CartItems {
    id: string;
}
export interface CartItem {
    id: string;
    quantity: number;
}

export interface CartContextType {
    cartItems: CartItem[];
    handleAddToCart: (id: string) => void;
}