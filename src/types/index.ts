// ----- Assets

export interface AssetSizeProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

// ----- Product

export interface ListingProps {
  productsData: Product[];
  DisplayCard: React.ComponentType<any>;
}
export interface ProductCardProps {
  product: Product;
  setCurrentProduct: React.Dispatch<React.SetStateAction<string | null>>;
}
export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  original_price: number;
  rating: string;
  img: string;
  category: string;
  tags: string[];
}

export interface ProductDescription extends Product {
  detailedDescription: string;
}

// ----- Product Description


export interface ProductDescriptionInterface {
  targetId: string | null;
  setCurrentProduct: React.Dispatch<React.SetStateAction<string | null>>;
}


// ----- Cart

export interface CartProductCardProps {
  product: Product;
  quantity: number;
}

export interface CartItem {
  id: string;
  quantity: number;
}

// ----- Favourites

export interface FavoriteInitialStateInterface {
  favoriteItemsArray: string[];
  favoriteItemCount: number;
}

export interface FavoriteCardProps extends CartProductCardProps {
  setCurrentProduct: React.Dispatch<React.SetStateAction<string | null>>;
}

