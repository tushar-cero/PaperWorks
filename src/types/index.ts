// ----- Assets

export interface AssetSizeProps {
  size?: string;
}

// ----- Cart

export interface CartItem {
  id: string;
  quantity: number;
}

// ----- Favourites

export interface FavoriteItem {
  id: string;
}

// ----- Product

export interface ListingProps {
  productsData: Product[];
}
export interface ProductCardProps {
  product: Product;
}
export interface Product {
  id: string;
  name: string;
  price: number;
  original_price: number;
  rating: string;
  description: string;
  img: string;
}

export interface ProductDescription extends Product {
  detailedDescription: string;
}

// Cart

export interface CartProductCardProps extends ProductCardProps {
  quantity: number;
}
