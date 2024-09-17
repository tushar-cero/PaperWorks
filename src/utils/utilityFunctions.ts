import { Product } from "../types";

export const filterProductsByIds = (filteringArray: any, allProducts: Product[]): Product[] => {
  const cartItemIds = new Set(filteringArray.map((item: { id: any; }) => item.id));
  return allProducts.filter(product => cartItemIds.has(product.id));
}

export const filterSimpleProductsByIds = (filteringArray: any, allProducts: Product[]): Product[] => {
  return allProducts.filter(product => filteringArray.includes(product.id));
}

export const searchProductsByTag = (
  allProducts: Product[],
  searchTag: string
): Product[] => {
  if (searchTag === '') {
    return allProducts;
  }

  return allProducts.filter(product =>
    product.tags.some(tag => tag.toLowerCase().includes(searchTag.toLowerCase()))
  );
}